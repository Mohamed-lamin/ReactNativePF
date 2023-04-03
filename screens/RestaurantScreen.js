import { View, Text, ScrollView, Image,TouchableOpacity, FlatList } from 'react-native'
import React, {  useEffect, useLayoutEffect } from 'react'
import {  useRoute } from '@react-navigation/native'
import { ArrowLeftIcon,ChevronDownIcon,StarIcon,MapPinIcon } from 'react-native-heroicons/solid'
import { ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import Plats from '../components/Plats'
import Panier from '../components/Panier'
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'
import { fetchAllDishes } from '../features/alldishesSlice'
import axios from 'axios'

const RestaurantScreen = ({route,navigation}) => {
const dispatch=useDispatch()

 const {id,restaurant_name,description,
  rating,
  address,
  genre,
  imgUrl,
  long,
  lat,
dishes}=route.params
console.log(id,genre, address);
useEffect(()=>{
  dispatch(setRestaurant({id,restaurant_name,description,
    rating,
    address,
    genre,
    imgUrl,
    long,
    lat,
  dishes}))
},[])
console.log("it is ok");
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  })
  
  console.log(dishes);

   
  
  return (
    <>
    <Panier/>
    <ScrollView>
      <View className="relative">
        <Image source={{
          uri:imgUrl
        }}
        className="w-full h-56 bg-gray-300 p-4"
        />
     
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-400 rounded-full">
          <ArrowLeftIcon size={20} color="black"/>
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{restaurant_name}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
             <StarIcon color="black" opacity={0.5} size={22}/>
             <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}</Text> . Offre
             </Text>
            </View>
            <View className="flex-row items-center space-x-1">
             <MapPinIcon color="black" opacity={0.5} size={22}/>
             <Text className="text-xs text-gray-500">
               {address}
             </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
          <Text className="pl-2 flex-1 text-md font-bold">
            Avez vous une allergie ?
          </Text>
          <ChevronRightIcon color="black"/>
        </TouchableOpacity>
        {/* plats(dishes) */}
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* <FlatList
        nestedScrollEnabled
        data={dishes}
        renderItem={({item})=><Plats
        key={item._id}
        id={item._id}
        name={item.dishname}
        description={item.description}
        price={item.price}
        image={item.image}
        />}
        /> */}
        <ScrollView>
        {dishes.map((item=>(
            
                 <Plats
        key={item._id}
        id={item._id}
        name={item.dishname}
        description={item.description}
        price={item.price}
        image={item.image}
        />
            
        )))}
        </ScrollView>
       
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen