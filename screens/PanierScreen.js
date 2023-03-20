import { View, Text, TouchableOpacity, Image,ScrollView, LogBox } from 'react-native'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, SelectBasketTotal } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter'
import { AuthContext } from '../context/AuthContext'
import { CreateCommande, d } from '../features/commandeSlice'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const PanierScreen = () => {
    const {userInfo}=useContext(AuthContext)
    const userId=userInfo?.result?._id
    const navigation=useNavigation()
    const restaurant=useSelector(selectRestaurant)
    // console.log(userId);
    const items=useSelector(selectBasketItems)
    const totalPanier=useSelector(SelectBasketTotal)
    console.log(totalPanier);
    const [groupedItemsInPanier,setGroupedItemsInPanier]=useState([])
    const [user,setUser]=useState()
    const dispatch=useDispatch()
    const [commande,setCommande]=useState({total:"",clientId:"",clientName:"",platsCommand:[]})
  
   const restaurantId=restaurant.id
   console.log(restaurantId);
   console.log(userInfo);
useMemo(()=>{
  const groupedItems=items.reduce((results,item)=>{
    (results[item.id]=results[item.id]||[]).push(item)
    return results
  },{})
  setGroupedItemsInPanier(groupedItems)

// const UserInfo=async()=>{
//     try {
//       const userInfo1=await AsyncStorage.getItem('profile')
//        setUser(JSON.parse(userInfo1))
//     } catch (error) {
//       console.log(error);
//     } 
//   }
//   useEffect(()=>{
//     UserInfo
//   },[])
setCommande({status:"Accepter",total:totalPanier+5.99,clientName:userInfo?.result.name,clientId:userInfo?.result._id,clientImage:userInfo?.result.profileimage,platsCommand:Object.entries(groupedItems)?.map(([key,items])=>({id:key,number:items.length,total:totalPanier+5.99,platName:items[0].name,PlatImage:items[0].image}))})
},[items])



const commander=async()=>{
  try {
    const {data}=await axios.post("https://lamineatbackend-lamineat.onrender.com/commande/"+restaurantId,commande)
    console.log("restaurantid"+restaurantId);
  dispatch(CreateCommande(data))
  navigation.navigate('CommandePreparation',{userId})
  } catch (error) {
    console.log(error.message);
  }
}




  return (
    <SafeAreaView className="flex-1 bg-white">
   <View className="flex-1 bg-gray-100">
      <View className="p-5 border-b border-gray bg-white shadow-xs">
        <View>
            <Text className="text-lg font-bold text-center">Panier</Text>
            <Text className="text-center text-gray-400">{restaurant.restaurant_name}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-5">
        <XCircleIcon color="gray" height={50} width={50}/>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
        <Image
        source={{
            uri:'https://startling-blini-3bec23.netlify.app/delivery.png'
        }}
        className="h-7 bg-gray-300 p-4 rounded-full"
        />
        <Text className="flex-1">Deliver in 50-75 min</Text>
        <TouchableOpacity>
        <Text className="text-orange-500">Modifier</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="divided-y">
        {
            Object.entries(groupedItemsInPanier).map(([key,items])=>(
                <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                  <Text>{items.length}x</Text>
                  <Image 
                   source={{uri:items[0]?.image}}
                   className="h-12 w-12 rounded-full"
                   />
                   <Text className="flex-1">{items[0]?.name}</Text>
                   <Text className=" text-black">
                     <Currency quantity={items[0].price} currency="EUR"/> 
                   </Text>
                   <TouchableOpacity >
                     <Text onPress={()=>dispatch(removeFromBasket({id:key}))} className="text-orange-500">
                        Supprimer
                     </Text>
                   </TouchableOpacity>
                </View>
            ))
        }
      </ScrollView>
      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Sous-Total</Text>
            <Text className=" text-gray-400">
                     <Currency quantity={totalPanier} currency="EUR"/> 
            </Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Taxe de livraison</Text>
            <Text className=" text-gray-400">
                     <Currency quantity={5.99} currency="EUR"/> 
            </Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="">Total de commande</Text>
            <Text className="font-extrabold">
                     <Currency quantity={totalPanier + 5.99} currency="EUR"/> 
            </Text>
        </View>
        <TouchableOpacity onPress={commander} className="rounded-lg bg-orange-500 p-4">
            <Text className="text-center text-white text-lg font-bold">Commander</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
 
  )
}

export default PanierScreen