import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { addMood } from '../../redux/slices/moodslice'
import { postMoodEntry } from '../utils/data_utils'

export default function MoodLoggerScreen() {
  const [moodLevel, setMoodLevel] = useState('3')
  const [note, setNote] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    const entry = {
      moodLevel: parseInt(moodLevel),
      note,
      timestamp: new Date().toISOString(),
    }

    try {
      await postMoodEntry(entry)
      dispatch(addMood(entry))
      setNote('')
    } catch (e) {
      console.error('Error sending to backend:', e)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mood Level (1–5):</Text>
      <TextInput value={moodLevel} onChangeText={setMoodLevel} keyboardType="numeric" style={styles.input} />
      <Text style={styles.label}>Note:</Text>
      <TextInput value={note} onChangeText={setNote} style={styles.input} />
      <Button title="Log Mood" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontWeight: 'bold', marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 8 },
})
