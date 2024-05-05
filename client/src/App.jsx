
import { StyleSheet, Text, View } from 'react-native'

//Screens
import Register from './screens/Register'
import Login from './screens/Login'
import Home from './screens/Home';

import RootNavigation from './RootNavigation';

// Navigation

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { authContext, AuthProvider } from './context/authContext';
import { useContext, useState } from 'react';

// const Stack = createNativeStackNavigator()


const App = () => {

  // const [state]=useContext(authContext)
  // const [state]=useContext(authContext)

  return (
    <NavigationContainer>
      <RootNavigation></RootNavigation>
      {/* <AuthProvider>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
      name="Register"
      component={Register}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
      />
      </Stack.Navigator>
      </AuthProvider> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App