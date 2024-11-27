import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "@/app/styles/login_register/RegisterPlusStyle";
import { useLinkTo, useRoute } from '@react-navigation/native';
import SemiHeader from "@/components/header/semiHeader";

// Importando a tela de aviso do campo vazio
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
import { inputValidationRegisterPlus } from '@/app/scripts/login_register/validationRegisterPlus';

export default function RegisterPlus() {
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  console.log(route.params);
  const [cpf, setCpf] = useState("");
  const { id } = route.params; // Obtém o parâmetro id
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [categoria, setCategoria] = useState("Padrão");
  const [modalVisible, setModalVisible] = useState(false);


  // Estados de erro para campos individuais
  const [cpfError, setCpfError] = useState(false);
  const [dataNascError, setDataNascError] = useState(false);
  const [telefoneError, setTelefoneError] = useState(false);
  const [enderecoError, setEnderecoError] = useState(false);

  // Mensagem de alerta
  const [messageAlert, setMessageAlert] = useState("");

  // Estado para mensagem de sucesso
  const [successRegister, setSuccessRegister] = useState(false);

  const background = require('@/assets/images/background/background.png');

  const linkTo = useLinkTo(); // Sistema de links do react navigator

  const handleRegister = async (response) => {
    const isValid = inputValidationRegisterPlus(cpf, dataNascimento, telefone, endereco, setMessageAlert, setCpfError, setDataNascError, setTelefoneError, setEnderecoError, setModalVisible);
    if (isValid) {

      const id = await completarCadastro();

      if (id) {
        setSuccessRegister(true);
        setTimeout(() => {
          linkTo('/Home'); // Passa os parâmetros explicitamente
          setModalVisible(false);
        }, 1500);
      }
    }
  };

  const completarCadastro = async () => {
    try {
      // Define o endpoint da API (ajuste o endereço do backend)
      const response = await fetch('http://localhost:3000/api/completarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: cpf,
          data_nascimento: dataNascimento,
          telefone: telefone,
          endereco: endereco,
          tipo_usuario: categoria,
          id_usuario: id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.id_usuario;
      } else {
        console.error('Erro ao cadastrar usuário:', await response.text());
        setMessageAlert('Erro ao cadastrar usuário. Tente novamente.');
        setModalVisible(true);
        return null;
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setMessageAlert('Erro de conexão com o servidor. Tente novamente.');
      setModalVisible(true);
      return null;
    }
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.banner} // Use o estilo ajustado
      >
        {/* Top Section */}
        <View style={styles.sectionTop}>
          <View style={styles.header}>
            <View style={styles.logo_section}>
              <Image
                source={require("@/assets/images/BusOn_Logo_Branco_Preto.png")}
                style={styles.logo}
              />
            </View>
          </View>
          <View style={styles.userbanner}>
            <Icon name="user-alt" size={50} color="#0AC86C" />
          </View>
          <Text style={styles.title}>Complete o seu Cadastro</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.sectionBottom}>
          {/* SemiHeader Component */}
          <SemiHeader title={"Preencha as Informações"} />

          {/* Form Section */}
          <View style={styles.formSection}>
            <View style={styles.inputContainer}>
              {/* input cpf */}
              <View style={styles.inputSection}>
                <View style={[styles.iconInputSection, cpfError && styles.iconInputError]}>
                  <Icon name="id-card" size={20} color="#fff" />
                </View>
                <TextInput
                  style={[styles.input, cpfError && styles.inputError]}
                  placeholder="CPF"
                  placeholderTextColor={"#C7C7C7"}
                  value={cpf}
                  onChangeText={setCpf}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              {/* input cpf */}
              <View style={styles.inputSection}>
                <View style={[styles.iconInputSection, dataNascError && styles.iconInputError]}>
                  <Icon name="calendar" size={20} color="#fff" />
                </View>
                <TextInput
                  style={[styles.input, dataNascError && styles.inputError]}
                  placeholder="Data de Nascimento"
                  placeholderTextColor={"#C7C7C7"}
                  value={dataNascimento}
                  onChangeText={setDataNascimento}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              {/* input cpf */}
              <View style={styles.inputSection}>
                <View style={[styles.iconInputSection, telefoneError && styles.iconInputError]}>
                  <Icon name="phone" size={20} color="#fff" />
                </View>
                <TextInput
                  style={[styles.input, telefoneError && styles.inputError]}
                  placeholder="Telefone"
                  placeholderTextColor={"#C7C7C7"}
                  value={telefone}
                  onChangeText={setTelefone}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              {/* input cpf */}
              <View style={styles.inputSection}>
                <View style={[styles.iconInputSection, enderecoError && styles.iconInputError]}>
                  <Icon name="map-marker-alt" size={20} color="#fff" />
                </View>
                <TextInput
                  style={[styles.input, enderecoError && styles.inputError]}
                  placeholder="Endereço"
                  placeholderTextColor={"#C7C7C7"}
                  value={endereco}
                  onChangeText={setEndereco}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>

            {/* Radio Buttons */}
            <View style={styles.radioGroup}>
              {["Padrão", "Estudante", "PCD"].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.radioButton}
                  onPress={() => setCategoria(option)}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      categoria === option && styles.radioSelected,
                    ]}
                  />
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.addButton}
              onPress={handleRegister}>
              <Text style={styles.addTextButton}>Completar Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal de alerta */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
        >
          <ModalAlertValidation messageAlert={messageAlert} successMessage={successRegister} handleClose={() => setModalVisible(false)} />
        </Modal>
      </ImageBackground>
    </View>
  );
}