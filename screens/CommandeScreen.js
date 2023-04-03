import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import {  updateCommande } from '../features/commandeSlice'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

const CommandeScreen = () => {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  const {userId}=useContext(AuthContext)
  const commandId=useSelector(state=>state.commandes.res.slice(-1)[0]?._id)
  console.log(commandId);
  // console.log(userId);
  // console.log(userId);
  const Verif=async()=>{
    try {
      const {data}=await axios.get("https://lamineatbackend-lamineat.onrender.com/specificcommand/"+commandId)
    dispatch(updateCommande(data))
    
    if(data.status==="Acceptée"){
      return navigation.navigate('Accept')
    }else{
     return  console.log("pas encore");
    }
    

    } catch (error) {
      console.log(error.message);
    }
  }
useEffect(()=>{
  // const inter=setInterval(()=>{
    Verif()
//   },50000);
//  ()=>clearInterval(inter)
  
},[])


  return (
    <SafeAreaView className=" bg-orange-500 flex-1 justify-center items-center">
       <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-400 rounded-full">
          <ArrowLeftIcon size={20} color="black"/>
        </TouchableOpacity>
      <Animatable.Image 
      source={require('../assets/images/login.png')}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96"
      />
      <Animatable.Text 
     
      animation="slideInUp"
      iterationCount={1}
      className="text-lg my-10 text-white font-bold text-center"
      >Attendez que le restaurant accepte votre commande .</Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  )
}

export default CommandeScreen