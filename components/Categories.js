import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }} horizontal showsHorizontalScrollIndicator={false}>
        
      {/* CategoriesCard */}
      <CategoriesCard Url="https://startling-blini-3bec23.netlify.app/principal_liste/1.png" Title="Asian"/>
      <CategoriesCard Url="https://startling-blini-3bec23.netlify.app/principal_liste/2.png" Title="Pizza"/>
      <CategoriesCard Url="https://startling-blini-3bec23.netlify.app/principal_liste/1.png" Title="Autre"/>
      <CategoriesCard Url="https://startling-blini-3bec23.netlify.app/principal_liste/1.png" Title="Autre"/>
      <CategoriesCard Url="https://startling-blini-3bec23.netlify.app/principal_liste/1.png" Title="Autre"/>
    </ScrollView>
  )
}

export default Categories