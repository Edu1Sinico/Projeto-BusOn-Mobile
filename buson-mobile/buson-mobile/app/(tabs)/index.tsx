// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from './login_register/login';
// import RegisterScreen from './login_register/register';

// import { Routes } from '../routes'; // Importando o sistema de navegação com o BottomTabNavigator

// const Stack = createNativeStackNavigator();

// export default function App() {

//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Login"
//         screenOptions={{
//           headerShown: false,  // Removendo o cabeçalho
//         }}>
//         <Stack.Screen name="Login" component={LoginScreen} options={{
//           animation: 'fade'
//         }} />
//         <Stack.Screen name="Register" component={RegisterScreen} options={{
//           animation: 'fade'
//         }} />
//         <Stack.Screen
//           name="Home"
//           component={Routes} // Aqui você usa o Routes com o BottomTabNavigator
//           options={{ headerShown: false, animation: 'fade' }} // Esconde o header se necessário
//         />
//       </Stack.Navigator>
//     </NavigationContainer >
//   )
// }

import React from "react";
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/PaymentCashPageStyle'

// Importando o Header como componente
import Header from '@/components/header/header';
import SemiHeader from "@/components/header/semiHeader";

export default function PaymentCashPage() {
  return (
    <View style={styles.container}>
      <Header />
      <SemiHeader title={'Realizar Pagamento'} />

      <View style={styles.mainSection}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Escolha uma forma de pagamento</Text>
        </View>

        <View style={styles.mainTopSection}>

          <View style={styles.paymentButtonsSection}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="phone-iphone" size={130} color="#fff" />
              <Text style={styles.buttonText}>Aproximação</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.mainBottomSection}>

        </View>
      </View>
    </View>
  );
}