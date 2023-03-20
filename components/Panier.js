import { View, Text,TouchableOpacity  } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, SelectBasketTotal } from '../features/basketSlice'
import Currency from 'react-currency-formatter'
import { useNavigation } from '@react-navigation/native'
const Panier = () => {
    const basketTotal=useSelector(SelectBasketTotal)
    const navigation=useNavigation()
    const items=useSelector(selectBasketItems)
    if ( items.length==0) return null
  return (
    <View className="absolute bottom-10 w-full z-50">
    <TouchableOpacity onPress={()=>navigation.navigate('PanierNav')} className="mx-5 bg-black p-4 rounded-lg flex-row items-center space-x-1">

      <Text className="text-white font-extrabold text-lg py-1 px-2">{items.length}</Text>
      <Text className="text-white font-extrabold">Panier</Text>
      <Text className="text-lg text-white font-extrabold">
        <Currency quantity={basketTotal} currency="EUR"/>
      </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Panier