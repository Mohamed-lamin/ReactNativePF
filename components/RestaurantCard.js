import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'

const RestaurantCard = ({id, imgUrl, Title,Genre, Address}) => {
  return (
    <TouchableOpacity>
      <Image 
      source={{uri:imgUrl}}
      className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{Title}</Text>
        <View><StarIcon color="black" opacity={0.5}/></View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard