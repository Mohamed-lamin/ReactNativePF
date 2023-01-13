import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const TopCategories = ({Title, Description,id}) => {
  return (
    <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold">{Title}</Text>
      <ArrowRightIcon color="#000000"/>
    </View>
    <Text className="text-xs text-gray-500 px-4">{Description}</Text>
    <ScrollView 
    horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
    }}
    showsHorizontalScrollIndicator={false}
    className="pt-4"
    />
    {/* Restaurants */}
    <RestaurantCard id="1" Title="KFC" imgUrl="https://startling-blini-3bec23.netlify.app/deuxieme_liste/brett-jordan-4lqO7zRoLaM-unsplash.jpg" />
    </View>
  )
}

export default TopCategories