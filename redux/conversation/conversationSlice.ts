import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ConversationContext } from "../../types/reduxTypes";
import { ConversationType } from "../../types/types";

const initialState: ConversationContext = {
  value: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ConversationType>) => {
      state.value.push(action.payload);
    },
    clearMessages: (state) => {
      state.value = [];
    },
    setMessageAtIndex: (state, action) => {
      const { isRegenerated, isPrompt, message, index } = action.payload;
      if (index !== undefined) {
        state.value[index] = { isRegenerated, isPrompt, message };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage, clearMessages, setMessageAtIndex } = conversationSlice.actions;

export default conversationSlice.reducer;
