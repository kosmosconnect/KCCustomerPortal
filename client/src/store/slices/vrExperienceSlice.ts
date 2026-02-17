import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface VRScene {
  id: string;
  name: string;
  description: string;
  assets: {
    models: string[];
    textures: string[];
    audio: string[];
  };
}

interface VRExperienceState {
  scenes: VRScene[];
  activeScene: VRScene | null;
  isLoading: boolean;
  error: string | null;
  isVRSupported: boolean;
}

const initialState: VRExperienceState = {
  scenes: [],
  activeScene: null,
  isLoading: false,
  error: null,
  isVRSupported: false,
};

export const fetchVRScenes = createAsyncThunk(
  'vrExperience/fetchScenes',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/vr/scenes`);
    if (!response.ok) {
      throw new Error('Failed to fetch VR scenes');
    }
    return response.json();
  }
);

export const loadVRScene = createAsyncThunk(
  'vrExperience/loadScene',
  async (sceneId: string) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/vr/scenes/${sceneId}`);
    if (!response.ok) {
      throw new Error('Failed to load VR scene');
    }
    return response.json();
  }
);

const vrExperienceSlice = createSlice({
  name: 'vrExperience',
  initialState,
  reducers: {
    setVRSupport(state, action) {
      state.isVRSupported = action.payload;
    },
    exitVR(state) {
      state.activeScene = null;
    },
    updateVRScene(state, action) {
      state.activeScene = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVRScenes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVRScenes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.scenes = action.payload;
      })
      .addCase(fetchVRScenes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch VR scenes';
      })
      .addCase(loadVRScene.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadVRScene.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeScene = action.payload;
      })
      .addCase(loadVRScene.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to load VR scene';
      });
  },
});

export const { setVRSupport, exitVR, updateVRScene } = vrExperienceSlice.actions;
export default vrExperienceSlice.reducer;
