import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { categoryRestaurants } from '../features/allrestaurantsSlice'

const CategoriesCard = ({setCat,imageUrl,category_name}) => {
  
  const dispatch=useDispatch()
  return (
    <TouchableOpacity onPress={()=>setCat(category_name)} className="relative mr-1">
        <View>
          <Image
                className="h-20 w-20 rounded"
                  source={{
                    uri: imageUrl,
                }}
                
                />
        </View>
      <Text className="font-bold bottom-20 left-1">{category_name}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard