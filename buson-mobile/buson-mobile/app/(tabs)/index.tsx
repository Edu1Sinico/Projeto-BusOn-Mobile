import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './login_register/login';
import RegisterScreen from './login_register/register';
import RegisterPlus from './login_register/registerplus';

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
        <Stack.Screen
          name="Home"
          component={Routes} // Aqui você usa o Routes com o BottomTabNavigator
          options={{ headerShown: false, animation: 'fade' }} // Esconde o header se necessário
        />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

// import React from "react";
// import { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import styles from "@/app/styles/login_register/RegisterPlusStyle";
// import SemiHeader from "@/components/header/semiHeader";

// export default function RegisterPlus() {
//   const [cpf, setCpf] = useState("");
//   const [dataNascimento, setDataNascimento] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [endereco, setEndereco] = useState("");
//   const [categoria, setCategoria] = useState("Comum");

//   return (
//     <View style={styles.container}>
//       {/* Top Section */}
//       <View style={styles.sectionTop}>
//         <View style={styles.header}>
//           <View style={styles.logo_section}>
//             <Image
//               source={require("@/assets/images/BusOn_Logo_Branco_Preto.png")}
//               style={styles.logo}
//             />
//           </View>
//         </View>
//         <View style={styles.userbanner}>
//           <Icon name="user-alt" size={50} color="#0AC86C" />
//         </View>
//         <Text style={styles.title}>Complete o seu Cadastro</Text>
//       </View>

//       {/* Bottom Section */}
//       <View style={styles.sectionBottom}>
//         {/* SemiHeader Component */}
//         <SemiHeader title={"Preencha as Informações"} />

//         {/* Form Section */}
//         <View style={styles.formSection}>
//           <View style={styles.inputContainer}>
//             {/* input cpf */}
//             <View style={styles.inputSection}>
//               <View style={styles.iconInputSection}>
//                 <Icon name="id-card" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input]}
//                 placeholder="CPF"
//                 placeholderTextColor={"#C7C7C7"}
//                 value={cpf}
//                 onChangeText={setCpf}
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//           </View>

//           <View style={styles.inputContainer}>
//             {/* input cpf */}
//             <View style={styles.inputSection}>
//               <View style={styles.iconInputSection}>
//                 <Icon name="calendar" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input]}
//                 placeholder="Data de Nascimento"
//                 placeholderTextColor={"#C7C7C7"}
//                 value={dataNascimento}
//                 onChangeText={setDataNascimento}
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//           </View>
//           <View style={styles.inputContainer}>
//             {/* input cpf */}
//             <View style={styles.inputSection}>
//               <View style={styles.iconInputSection}>
//                 <Icon name="phone" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input]}
//                 placeholder="Telefone"
//                 placeholderTextColor={"#C7C7C7"}
//                 value={telefone}
//                 onChangeText={setTelefone}
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//           </View>
//           <View style={styles.inputContainer}>
//             {/* input cpf */}
//             <View style={styles.inputSection}>
//               <View style={styles.iconInputSection}>
//                 <Icon name="map-marker-alt" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input]}
//                 placeholder="Endereço"
//                 placeholderTextColor={"#C7C7C7"}
//                 value={endereco}
//                 onChangeText={setEndereco}
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//           </View>

//           {/* Radio Buttons */}
//           <View style={styles.radioGroup}>
//             {["Comum", "Estudante", "Deficiente"].map((option) => (
//               <TouchableOpacity
//                 key={option}
//                 style={styles.radioButton}
//                 onPress={() => setCategoria(option)}
//               >
//                 <View
//                   style={[
//                     styles.radioCircle,
//                     categoria === option && styles.radioSelected,
//                   ]}
//                 />
//                 <Text>{option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Submit Button */}
//           <TouchableOpacity style={styles.addButton}>
//             <Text style={styles.addTextButton}>Adicionar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

