import { View, Text, Image,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

import login from '../assets/images/login.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect,useContext } from 'react'
import RegisterScreen from './RegisterScreen'
import { AuthContext } from '../context/AuthContext'



const LoginScreen = () => {
    const [clientLogin,setClientLogin]=useState({email:"",password:""})

   const {login,userToken}=useContext(AuthContext)
    const navigation=useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
    const loginAndNav=()=>{
        login(clientLogin)
        if (userToken!==null){
            navigation.navigate('Home')
        }
    }
  return (
    <SafeAreaView className="flex flex-1 justify-center  ">
     <View className="px-5">
       <View className=" flex items-center justify-start mb-2">
          <Image
                  source={require('../assets/images/login.png')
                }
                className="w-4/5 h-40 rounded-md"
                />
       </View>
    <Text  className="font-bold text-3xl ">Connecter</Text>
    
    <View className="border-b-2 rounded">
        <TextInput onChangeText={text=>setClientLogin({...clientLogin,email:text})} type="email" placeholder="Email" className="p-3"/>
    </View>
    <View className="border-b-2 rounded">
        <TextInput onChangeText={text=>setClientLogin({...clientLogin,password:text})} placeholder="Mot de passe" secureTextEntry={true} className="p-3"/>
    </View>
    <TouchableOpacity onPress={loginAndNav} className="bg-black p-3 mt-10 mb-2 rounded-lg flex items-center" >
        <Text className="text-white font-bold text-xl" >Connecter</Text>
    </TouchableOpacity>
    <TouchableOpacity className="bg-black p-3  rounded-lg flex items-center">
        <Text className="text-white font-bold text-xl" >Connecter avec Google</Text>
    </TouchableOpacity>
    <View className="mt-10">
        <Text className="text-md">Nouveau à l'application?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('RegisterScreen')}
        }>
            <Text className="text-orange-500 text-lg font-semibold">S'inscrire</Text>
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>

  )
}

export default LoginScreen