import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from '../store';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { useContext } from 'react';
import PanierScreen from '../screens/PanierScreen';
import CommandeScreen from '../screens/CommandeScreen';
import Accept from '../screens/Accept';

const Stack = createNativeStackNavigator();
const AppNav = () => {
    const {isloading,userToken}=useContext(AuthContext)
     console.log(isloading);
    if(isloading){
      return(
      <View className="flex flex-1 justify-center items-center">
        
        <ActivityIndicator color="orange" size={'large'}/>
      </View>
      )
    }
    console.log(isloading);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
      {
        userToken!==null?<Stack.Screen name="Home" component={HomeScreen} />:
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      }
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="PanierNav" component={PanierScreen} options={{
          presentation:"modal", headerShown:false
        }}/>
        <Stack.Screen name="CommandePreparation" component={CommandeScreen} options={{
          presentation:"fullScreenModal", headerShown:false
        }}/>
        <Stack.Screen name="Accept" component={Accept} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default AppNav