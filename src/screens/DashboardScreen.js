/* eslint-disable prettier/prettier */
import { View,SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function DashboardScreen({navigation}) {
  return (
    <SafeAreaView className="bg-white h-full flex-1 justify-center ">
      <Text className="text-4xl text-black text-center">Dashboard</Text>
    </SafeAreaView>
  )
}