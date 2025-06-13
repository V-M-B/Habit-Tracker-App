import React from 'react'
import { Text, View } from 'react-native'

const StreakScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Streak Screen</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>Track your habits and maintain your streaks!</Text>
    </View>
  )
}

export default StreakScreen