import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Ticket {
  id: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  messages: {
    id: string;
    content: string;
    sender: string;
    timestamp: string;
  }[];
}

interface SupportState {
  tickets: Ticket[];
  selectedTicket: Ticket | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: SupportState = {
  tickets: [],
  selectedTicket: null,
  isLoading: false,
  error: null,
};

export const createTicket = createAsyncThunk(
  'support/createTicket',
  async (ticketData: Partial<Ticket>) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/support/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });
    if (!response.ok) {
      throw new Error('Failed to create ticket');
    }
    return response.json();
  }
);

export const fetchTickets = createAsyncThunk(
  'support/fetchTickets',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/support/tickets`);
    if (!response.ok) {
      throw new Error('Failed to fetch tickets');
    }
    return response.json();
  }
);

const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    selectTicket: (state, action) => {
      state.selectedTicket = state.tickets.find(ticket => ticket.id === action.payload) || null;
    },
    clearSelectedTicket: (state) => {
      state.selectedTicket = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets.unshift(action.payload);
        state.selectedTicket = action.payload;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to create ticket';
      })
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch tickets';
      });
  },
});

export const { selectTicket, clearSelectedTicket } = supportSlice.actions;
export default supportSlice.reducer;
