import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const CategoriesCard = ({Url,Title}) => {
  return (
    <TouchableOpacity className="relative mr-1">
        <View>
          <Image
                className="h-20 w-20 rounded"
                  source={{
                    uri: Url,
                }}
                
                />
        </View>
      <Text className="bottom-5 left-1">{Title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard