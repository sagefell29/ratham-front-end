import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  timer: 0,
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    startTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { addMessage, clearMessages, startTimer } = chatbotSlice.actions;

export default chatbotSlice.reducer;