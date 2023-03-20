import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import React,{ useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { CameraIcon } from 'react-native-heroicons/outline'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import * as ImagePicker from'expo-image-picker'


const RegisterScreen = () => {
    const {signup,userToken}=useContext(AuthContext)
    const [client,setClient]=useState({firstname:"",lastname:"",email:"",password:"",confirmpassword:"",profileimage:""})
    const [image,setImage]=useState(null)
    const addImage=async()=>{
        let imageFile=await ImagePicker.launchImageLibraryAsync({
           mediaTypes:ImagePicker.MediaTypeOptions.All,
           allowsEditing:true,
           aspect:[4,3],
           quality:1,
           base64:true
        })
        if(!imageFile.canceled){
            
            setImage(imageFile.uri)
            setClient({...client,profileimage:'data:image/jpeg;base64,'+ imageFile.base64})
        }
        console.log(client.profileimage);
    }
    // const dispatch=useDispatch()
    const navigation=useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    })
    function SignUpAndNav(){
        signup(client)
        if (userToken!==null){
            navigation.navigate('Home')
        }
    }
    console.log(client);
  return (
    <SafeAreaView className="flex flex-1 justify-center  ">
     <View className="px-5">
     
       <View className="flex  items-center">
       <View className="bg-gray-500 opacity w-40 h-40 flex items-center justify-start mb-2 rounded-full">
          <Image
                  source={{uri:image}}
                className="w-4/5 h-40 rounded-md relative w-40 h-40 rounded-full"
                />
                 <TouchableOpacity onPress={()=>addImage()}  className="absolute border-t-2 bottom-0 flex  items-center">
        <Text className="text-orange-600 font-bold text-xl" >{!image?'Télécharger':"Modifier"}</Text>
        <CameraIcon size={35} color='black'/>
    </TouchableOpacity>
       </View>
       </View>
    <Text  className="font-bold text-3xl ">S'inscrire</Text>
    <View className="border-b-2 rounded">
        <TextInput onChangeText={text=>setClient({...client,firstname:text})} name="firstname" placeholder="Nom" className="p-3"/>
    </View>
    <View className="border-b-2 rounded">
        <TextInput onChangeText={text=>setClient({...client,lastname:text})} name="lastname" placeholder="Prénom" className="p-3"/>
    </View>
    <View className="border-b-2 rounded">
        <TextInput onChangeText={text=>setClient({...client,email:text})} name="email" type="email" placeholder="Email" className="p-3"/>
    </View>
    <View className="border-b-2 rounded">
        <TextInput onChangeText={text=>setClient({...client,password:text})} name="password" type="password" placeholder="Mot de passe" secureTextEntry={true} className="p-3"/>
    </View>
    <View className="border-b-2 rounded">
        <TextInput value={client.confirmpassword} onChangeText={text=>setClient({...client,confirmpassword:text})} name="confirmpassword" type="password" placeholder="Confirmer mot de passe" secureTextEntry={true} className="p-3"/>
    </View>
   
    <TouchableOpacity onPress={SignUpAndNav}  className="bg-black p-3 mt-10 mb-2 rounded-lg flex items-center">
        <Text className="text-white font-bold text-xl" >S'inscrire</Text>
    </TouchableOpacity>
    <TouchableOpacity className="bg-black p-3  rounded-lg flex items-center">
        <Text className="text-white font-bold text-xl" >S'inscrire avec Google</Text>
    </TouchableOpacity>
    <View className="mt-10">
        <Text className="text-md">Déja inscrit?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
            <Text className="text-orange-500 text-lg font-semibold">Se connecter</Text>
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default RegisterScreen