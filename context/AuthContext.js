import { View, Text } from 'react-native'
import React ,{ createContext, useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    
    const [isloading,setIsloading]=useState(false)
    const [userToken,setUserToken]=useState()
    const [userInfo,setUserInfo]=useState()


   const signup=async(client)=>{
     
    try {
        setIsloading(true)
        const {data}=await axios.post("https://lamineatbackend-lamineat.onrender.com/clientsignup",client)
        setUserToken(data.token)
        setUserInfo(data)
        AsyncStorage.setItem('profile',JSON.stringify(data))
        setIsloading(false)
        
    } catch (error) {
       console.log(error); 
    }
   
   }
   const login=async(client)=>{
     
    try {
        setIsloading(true)
        const {data}=await axios.post("https://lamineatbackend-lamineat.onrender.com/clientsignin",client)
        setUserToken(data.token)
        setUserInfo(data)
        AsyncStorage.setItem('profile',JSON.stringify(data))
        setIsloading(false)
       
    } catch (error) {
       console.log(error.message); 
    }
   }
   const logout=()=>{
   AsyncStorage.removeItem('profile')
   setUserToken(null)
   setUserInfo(null)
    setIsloading(false)
   }
   const isLoggedIn=async()=>{
    try {
        let userToken=await AsyncStorage.getItem('profile')
        setUserInfo(JSON.parse(userToken))
        
    } catch (error) {
        console.log(error);
    }
   }
   const userId=userInfo?.result?._id
   useEffect(()=>{
    isLoggedIn()
    
   },[])
  
    return(
        <AuthContext.Provider value={{login,signup,logout,userInfo,isloading, userToken,userId}}>
            {children}
        </AuthContext.Provider>
    )
}