import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CelestialData {
  id: string;
  name: string;
  type: string;
  coordinates: {
    ra: number;
    dec: number;
  };
  data: {
    resolution: string;
    spectrum: string[];
    timestamp: string;
  };
  streamUrl?: string;
}

interface CelestialDataState {
  data: CelestialData[];
  selectedData: CelestialData | null;
  isLoading: boolean;
  error: string | null;
  streamingStatus: {
    [key: string]: {
      isStreaming: boolean;
      quality: '4k' | '1080p' | '720p';
      fps: number;
    };
  };
}

const initialState: CelestialDataState = {
  data: [],
  selectedData: null,
  isLoading: false,
  error: null,
  streamingStatus: {},
};

export const fetchCelestialData = createAsyncThunk(
  'celestialData/fetch',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/celestial-data`);
    if (!response.ok) {
      throw new Error('Failed to fetch celestial data');
    }
    return response.json();
  }
);

export const startStreaming = createAsyncThunk(
  'celestialData/startStreaming',
  async ({ id, quality }: { id: string; quality: '4k' | '1080p' | '720p' }) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/celestial-data/${id}/stream`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quality }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to start streaming');
    }
    return response.json();
  }
);

const celestialDataSlice = createSlice({
  name: 'celestialData',
  initialState,
  reducers: {
    selectData: (state, action) => {
      state.selectedData = state.data.find(item => item.id === action.payload) || null;
    },
    clearSelected: (state) => {
      state.selectedData = null;
    },
    updateCelestialData: (state, action) => {
      const updatedData = action.payload;
      const index = state.data.findIndex(item => item.id === updatedData.id);
      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...updatedData,
        };
        if (state.selectedData?.id === updatedData.id) {
          state.selectedData = state.data[index];
        }
      }
    },
    updateStreamingStatus: (state, action) => {
      const { id, status } = action.payload;
      state.streamingStatus[id] = {
        ...state.streamingStatus[id],
        ...status,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCelestialData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCelestialData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCelestialData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch celestial data';
      })
      .addCase(startStreaming.pending, (state, action) => {
        const { id } = action.meta.arg;
        state.streamingStatus[id] = {
          ...state.streamingStatus[id],
          isStreaming: true,
          quality: action.meta.arg.quality,
          fps: 0,
        };
      })
      .addCase(startStreaming.fulfilled, (state, action) => {
        const { id, streamUrl, quality, fps } = action.payload;
        const dataIndex = state.data.findIndex(item => item.id === id);
        if (dataIndex !== -1) {
          state.data[dataIndex].streamUrl = streamUrl;
          state.streamingStatus[id] = {
            isStreaming: true,
            quality,
            fps,
          };
        }
      })
      .addCase(startStreaming.rejected, (state, action) => {
        const { id } = action.meta.arg;
        delete state.streamingStatus[id];
        state.error = action.error.message || 'Failed to start streaming';
      });
  },
});

export const {
  selectData,
  clearSelected,
  updateCelestialData,
  updateStreamingStatus,
} = celestialDataSlice.actions;

export default celestialDataSlice.reducer;
