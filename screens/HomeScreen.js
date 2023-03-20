import { View, Text,Image, TextInput, ScrollView, FlatList } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import {UserIcon,ChevronDownIcon,SearchIcon,AdjustmentsIcon} from "react-native-heroicons/outline"
import * as Icons from "react-native-heroicons/outline"
import Categories from '../components/Categories'

import { TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToType } from '../features/typeSlice'
import axios from 'axios'
import { addToCategory } from '../features/categorySlice'
import { setRestaurant } from '../features/restaurantSlice'
import { cityRestaurants, fetchAllRestaurants } from '../features/allrestaurantsSlice'
import RestaurantCard from '../components/RestaurantCard'



const HomeScreen = () => {
  const {isloading,userToken,userInfo}=useContext(AuthContext)
 console.log(userInfo?.result);
  
const [cat,setCat]=useState("")
  const dispatch=useDispatch()

  // const types=useSelector(state=>state.types.items)
  const res=useSelector((state)=>state.theAllrestaurants.allrestaurants)

  const [re,setRe]=useState([])
  const [deconnect,SetDeconnect]=useState(true)
  const {logout}=useContext(AuthContext)
    const navigation=useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
    const ToDeconnect=()=>{
      logout()
      SetDeconnect(false)
    }
    useEffect(()=>{
      SetDeconnect(false)
    },[])
  
    const  getCategories=async()=>{
      try {
        const {data}=await axios.get('https://lamineatbackend-lamineat.onrender.com/category')
         
        dispatch(addToCategory(data))
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
      getCategories()
      Restos()
     
   },[])
    useEffect(()=>{

        cat ? setRe(res.filter(item=>item.category===cat)):setRe(res)
    },[cat])
    console.log(re);
// Types------------------
    // const  AllTypes=async()=>{
    //   try {
    //     const {data}=await axios.get('https://lamineatbackend-lamineat.onrender.com/types')

    //     dispatch(addToType(data))

    //   } catch (error) {
    //     console.log(error);
    //   }
      
    
    // }
// Restaurant--------------------------
    const  Restos=async()=>{
      try {
        const {data}=await axios.get('https://lamineatbackend-lamineat.onrender.com/allrestaurants')
          
        dispatch(fetchAllRestaurants(data))
    

      } catch (error) {
        console.log(error);
      }
      
    
    }
    
 
    useEffect(()=>{
      // const interval=setInterval(()=>{
        // AllTypes()
       
        
      // },500)
    //  return ()=>clearInterval(interval)
    },[])
//  setTimeout(()=>AllTypes(),30000
//  )
// console.log(types);


const [ville,setVille]=useState("")
console.log(ville);
useEffect(()=>{
  if(ville){
    setCat("")
    setRe(res.filter(item=>item.ville==ville))
  }else{
    setRe(res)
  }
  
},[ville])

  return (
    <>
   {
    !deconnect &&(
      <SafeAreaView >
     
            {/* Header */}

            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                  source={{
                    uri: userInfo?.result.profileimage,
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
            
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Commander maintenant</Text>
                <Text className="font-bold text-xl">
                    Localisation actuelle
                    <Icons.ChevronDownIcon size={20} color="#000000"/>
                </Text>
            </View>
            <TouchableOpacity onPress={()=>SetDeconnect(true)}>
            <Icons.UserIcon size={35} color="#000000"/>
            </TouchableOpacity>
            
          </View>
          {/* SearchBar */}
          <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
              <TouchableOpacity onPress={()=>Restos()}>
              <Icons.MagnifyingGlassIcon color="#000000"/>
              </TouchableOpacity>
           
          <TextInput placeholder='Rechercher un restaurant ' onChangeText={(newText)=>setVille(newText)} keyboardType='default'/>
            </View>
           

          </View>
          {/* Body */}
          
            {/* Type de restaurants */}
            <Categories setCat={setCat}/>
            {/* Top Resaurants */}
         
          
           
            {/* <FlatList
            data={types}
            keyExtractor={(item,index)=>item._id}
            renderItem={({item})=> <TopCategories id={item._id}
            title={item.type_name}
            description={item.description}
            restaurants={item.restaurants}
            
            />}
            ListHeaderComponent={  <View>
              <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold ">Restaurants</Text>
                <Icons.ArrowRightIcon color="#000000"/>
             </View>
                <Text className="text-xs text-gray-500 px-4 ">Vous allez trouver le bon repas ici</Text>
    
      </View>}
            ListFooterComponent={<View className="h-60"/>}
            /> */}
                     <FlatList
      
      data={re}
      // keyExtractor={item=>id}
      renderItem={({item})=><RestaurantCard id={item._id}
      restaurant_name={item.restaurant_name}
      description={item.description}
      rating={item.rating}
      address={item.address}
      genre={item.category}
      imgUrl={item?.image} 
      dishes={item.dishes}
      long={item.long}
      lat={item.lat}
      ville={item.ville}
      category={item.category}
      
      
      />
    }
    ListFooterComponent={<View className="h-60"/>}
      />


    </SafeAreaView>
    )
   }
    
      { deconnect &&(
        
           <View className="bg-gray-300  flex items-center justify-center flex-1">
 
              <View className=" flex-grow justify-center space-y-2">
                 <TouchableOpacity onPress={ToDeconnect} className="bg-orange-500 p-3 rounded-md text-center ">
                 <Text className="text-center">Deconnecter</Text>
                 </TouchableOpacity>
                 <TouchableOpacity className="bg-gray-900 p-3 rounded-md text-center " onPress={()=>SetDeconnect(false)}>
                 <Text className="text-center text-white">Annuler</Text>
                 </TouchableOpacity>
            </View>  
           </View>
       
      )
      }
   
    </>
  )
}

export default HomeScreen