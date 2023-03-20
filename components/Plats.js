import { View, Text,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithId } from '../features/basketSlice'


const Plats = ({id,name,description,price,image }) => {
    const items=useSelector((state)=>selectBasketItemWithId(state,id))
    const [isPressed, setIsPressed]=useState(false)
    const dispatch= useDispatch()
    const addItemtoBasket=()=>{
      dispatch(addToBasket({id,name,description,price,image}))
    }
    const removeItemFromBasket=()=>{
      if (!items.length > 0) return
      dispatch(removeFromBasket({id,name,description,price,image}))
    }
  return (
    <>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
     <View className="flex-row">
     <View className="flex-1 pr-2" >
      <Text className="text-lg mb-1">{name}</Text>
      <Text className="text-gray-400">{description}</Text>
      <Text className="text-gray-400 mt-2">
      <Currency quantity={price}  currency={"EUR"}/>
      </Text>
    </View>
    <View>
        <Image
        source={{uri:image}}
        className="h-20 w-20 bg-gray-300"
        />
    </View>
    </View>
    </TouchableOpacity>
  { isPressed &&(
    <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
                <MinusCircleIcon color={items.length >0 ? "black":"gray"} size={40}/>
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemtoBasket}>
                <PlusCircleIcon color="black" size={40}/>
            </TouchableOpacity>
        </View>
    </View>
  )
  }
  </>
  )

}

export default Plats