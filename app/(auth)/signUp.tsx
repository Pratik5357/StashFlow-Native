import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function signup() {
  return (
    <SafeAreaView>
      <View className='flex-1 justify-center items-center'>
        <Text className='text-5xl'>Welcome to StashFlow</Text>
        <Text>signup</Text>
      </View>
    </SafeAreaView>
  )
}