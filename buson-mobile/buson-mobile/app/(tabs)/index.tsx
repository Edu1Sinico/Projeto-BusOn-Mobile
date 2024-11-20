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
// import { View, Text, TextInput, TouchableOpacity, Image, Modal } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome5";
// import styles from "@/app/styles/login_register/RegisterPlusStyle";
// import { useLinkTo } from '@react-navigation/native';
// import SemiHeader from "@/components/header/semiHeader";

// // Importando a tela de aviso do campo vazio
// import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
// import { inputValidationRegisterPlus } from '@/app/scripts/login_register/validationRegisterPlus';

// export default function RegisterPlus() {
//   const [cpf, setCpf] = useState("");
//   const [dataNascimento, setDataNascimento] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [endereco, setEndereco] = useState("");
//   const [categoria, setCategoria] = useState("Comum");
//   const [modalVisible, setModalVisible] = useState(false);

//   // Estados de erro para campos individuais
//   const [cpfError, setCpfError] = useState(false);
//   const [dataNascError, setDataNascError] = useState(false);
//   const [telefoneError, setTelefoneError] = useState(false);
//   const [enderecoError, setEnderecoError] = useState(false);

//   // Mensagem de alerta
//   const [messageAlert, setMessageAlert] = useState("");

//   // Estado para mensagem de sucesso
//   const [successRegister, setSuccessRegister] = useState(false);

//   const linkTo = useLinkTo(); // Sistema de links do react navigator

//   const handleRegister = () => {
//     if (inputValidationRegisterPlus(cpf, dataNascimento, telefone, endereco, setMessageAlert, setCpfError, setDataNascError, setTelefoneError, setEnderecoError, setModalVisible)) {
//       setSuccessRegister(true);
//       setTimeout(() => {
//         linkTo('/Home');
//         setModalVisible(false)
//       }, 1500);
//     }
//   };

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
//               <View style={[styles.iconInputSection, cpfError && styles.iconInputError]}>
//                 <Icon name="id-card" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input, cpfError && styles.inputError]}
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
//               <View style={[styles.iconInputSection, dataNascError && styles.iconInputError]}>
//                 <Icon name="calendar" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input, dataNascError && styles.inputError]}
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
//               <View style={[styles.iconInputSection, telefoneError && styles.iconInputError]}>
//                 <Icon name="phone" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input, telefoneError && styles.inputError]}
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
//               <View style={[styles.iconInputSection, enderecoError && styles.iconInputError]}>
//                 <Icon name="map-marker-alt" size={20} color="#fff" />
//               </View>
//               <TextInput
//                 style={[styles.input, enderecoError && styles.inputError]}
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
//           <TouchableOpacity style={styles.addButton}
//             onPress={handleRegister}>
//             <Text style={styles.addTextButton}>Completar Cadastro</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Modal de alerta */}
//       <Modal
//         animationType='fade'
//         transparent={true}
//         visible={modalVisible}
//       >
//         <ModalAlertValidation messageAlert={messageAlert} successMessage={successRegister} handleClose={() => setModalVisible(false)} />
//       </Modal>
//     </View>
//   );
// }