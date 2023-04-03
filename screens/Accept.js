import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Accept() {
  return (
    <SafeAreaView className=" bg-orange-500 flex-1 justify-center items-center">
    <View>
      <Text>Votre commande a bien été Acceptée</Text>
    </View>
    </SafeAreaView>
  )
}