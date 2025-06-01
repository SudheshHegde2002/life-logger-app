import axios from 'axios'

export interface MoodEntry {
  moodLevel: number
  note: string
  timestamp: string
}

export async function postMoodEntry(entry: MoodEntry): Promise<void> {
  await axios.post('http://localhost:8080/api/mood', entry)
}
