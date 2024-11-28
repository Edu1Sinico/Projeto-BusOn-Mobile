import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './login_register/login';
import RegisterScreen from './login_register/register';
import RegisterPlus from './login_register/registerPlus';

import { Routes } from '../routes'; // Importando o sistema de navegação com o BottomTabNavigator

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,  // Removendo o cabeçalho
        }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          animation: 'fade'
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          animation: 'fade'
        }} />
        <Stack.Screen name="Register-Plus" component={RegisterPlus} options={{
          animation: 'fade'
        }} />
        <Stack.Screen name="MainRoutes" component={Routes} options={{
          headerShown: false,
          animation: 'fade'
        }} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}