import { configureStore } from "@reduxjs/toolkit";
import moodreduer from "./slices/moodSlice";

export const store = configureStore({
  reducer: {
    mood : moodreduer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch