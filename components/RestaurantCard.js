import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/solid'
import { MapIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantCard = ({id,restaurant_name,
  description,
  rating,
  address,
  genre,
  imgUrl,
  dishes,
  long,
  lat,ville,category}) => {

  const navigation=useNavigation()

  
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Restaurant",{id,restaurant_name, description,
      rating,
      address,
      genre,
      imgUrl,
      dishes,
      long,
      lat,category})}} className="bg-white mr-3 shadow">
      <Image 
      source={{uri:imgUrl}}
      className="h-44 w-full rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{restaurant_name}</Text>
        <View  className="flex-row items-center space-x-2">
          <StarIcon color="black" opacity={0.5}/>
          <Text className="text-xs">{rating} <Text >{category}</Text></Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon  color="#000000"/>
          <Text className="text-xs text-gray-500"> {ville}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard