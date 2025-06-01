import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import MoodLoggerScreen from './app/screens/MoodLogScreen'

export default function App() {
  return (
    <Provider store={store}>
      <MoodLoggerScreen />
    </Provider>
  )
}
