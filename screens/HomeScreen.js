import { View, Text,Image, TextInput, ScrollView } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
import {UserIcon,ChevronDownIcon,SearchIcon,AdjustmentsIcon} from "react-native-heroicons/outline"
import * as Icons from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import TopCategories from '../components/TopCategories'

const HomeScreen = () => {
    const navigation=useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
  return (
    <SafeAreaView>
     
            {/* Header */}

            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                  source={{
                    uri: 'https://startling-blini-3bec23.netlify.app/delivery.png',
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
            
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Commander mantenant</Text>
                <Text className="font-bold text-xl">
                    Localisation actuelle
                    <Icons.ChevronDownIcon size={20} color="#000000"/>
                </Text>
            </View>
            <Icons.UserIcon size={35} color="#000000"/>
          </View>
          {/* SearchBar */}
          <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
           <Icons.MagnifyingGlassIcon color="#000000"/>
          <TextInput placeholder='commander' keyboardType='default'/>
            </View>
           <Icons.AdjustmentsVerticalIcon color="#000000"/>

          </View>
          {/* Body */}
          <ScrollView className="bg-gray-200">
            {/* Type de restaurants */}
            <Categories/>
            {/* Top Resaurants */}
            <TopCategories id="1" Title="Top Restraurant" Description="Test" Category="top"/>
            <TopCategories id="2" Title="Reduction" Description="Amuse toi avec cette reduction" Category="Reduction"/>
            <TopCategories id="3" Title="Offres à coté de vous" Description="Test" Category="offres"/>
          </ScrollView>
         
    </SafeAreaView>
      
    
  )
}

export default HomeScreen