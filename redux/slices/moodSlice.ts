import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MoodEntry {
  moodLevel: number
  note: string
  timestamp: string
}

interface MoodState {
  entries: MoodEntry[]
}

const initialState: MoodState = {
  entries: [],
}

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    addMood(state, action: PayloadAction<MoodEntry>) {
      state.entries.push(action.payload)
    },
  },
})

export const { addMood } = moodSlice.actions
export default moodSlice.reducer
