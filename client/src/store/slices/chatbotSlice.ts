import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'bot';
}

interface ChatbotState {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
  context: {
    lastQuery?: string;
    relevantTopics?: string[];
  };
}

const initialState: ChatbotState = {
  messages: [],
  isTyping: false,
  error: null,
  context: {},
};

export const sendMessage = createAsyncThunk(
  'chatbot/sendMessage',
  async (message: string) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/chatbot/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    return response.json();
  }
);

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setTyping: (state, action) => {
      state.isTyping = action.payload;
    },
    clearChat: (state) => {
      state.messages = [];
      state.context = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isTyping = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isTyping = false;
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isTyping = false;
        state.error = action.error.message || 'Failed to send message';
      });
  },
});

export const { addMessage, setTyping, clearChat } = chatbotSlice.actions;
export default chatbotSlice.reducer;
