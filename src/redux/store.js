import { configureStore } from "@reduxjs/toolkit";
import chatBotReducer from "./chatBotSlice";

const store = configureStore({
  reducer: {
    chatBot: chatBotReducer,
  },
});

export default store;
