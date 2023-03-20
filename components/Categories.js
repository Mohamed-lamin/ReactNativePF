import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import { useDispatch, useSelector } from 'react-redux'
import { addToCategory } from '../features/categorySlice'
import axios from 'axios'

const Categories = ({setCat}) => {
  
  const categories=useSelector(state=>state.categories.catego)

console.log(categories[0]);
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }} horizontal showsHorizontalScrollIndicator={false}>
      
        {categories.map((item)=>(
          <View key={item._id}>
        <CategoriesCard setCat={setCat} imageUrl={item.category_image} category_name={item.category_name}/>
        </View>
        ))}

      
    </ScrollView>
  )
}

export default Categories