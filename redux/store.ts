import { configureStore } from "@reduxjs/toolkit";
import conversationReducer from "./conversation/conversationSlice";
import songInfoReducer from "./music/songInfoSlice";
import suggestionStateReducer from "./suggestions/suggestionStateSlice";
import alertReducer from "./alerts/alertSlice";
import responseLoadingReducer from "./loading/responseLoading";
import regenerationReducer from './regeneration/regenerationSlice';

export const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    songInfo: songInfoReducer,
    suggestionState: suggestionStateReducer,
    alert: alertReducer,
    responseLoading: responseLoadingReducer,
    regeneration: regenerationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
