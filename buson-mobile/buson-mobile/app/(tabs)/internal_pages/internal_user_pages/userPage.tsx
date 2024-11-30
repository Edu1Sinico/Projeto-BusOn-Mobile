import { useState } from 'react';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Biblioteca para ícones
import { useNavigation, useLinkTo, useRoute } from '@react-navigation/native'; // Importando o hook de navegação

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_user_pages/userPageStyle';

// Importando o Header como componente
import Header from '@/components/header/header';

export default function ProfileScreen() {

  const background = require('@/assets/images/background/background.png');

  const navigation = useNavigation(); // Inicializando o hook de navegação
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const linkTo = useLinkTo(); // Sistema de links do react navigator
  const { id } = route.params || {}; // Obtém o parâmetro id

  // Campos do usuário
  const [userName, setUserName] = useState('Usuário');
  const [userEmail, setUserEmail] = useState('example@example.com');
  const [userPassword, setUserPassword] = useState('*****');
  const [userPhone, setUserPhone] = useState('');
  const [registerComplete, setRegisterComplete] = useState(false);

  function navigateToRegisterPlus() {
    const registerPlusProfile = true; // Valor booleano que deseja passar

    linkTo(`/Register-Plus?id=${id}&registerPlusProfile=${registerPlusProfile}`);
  }


  const buscarUsuario = async (id_usuario) => {
    try {
      // Define o endpoint da API (ajuste o endereço do backend)
      const response = await fetch('http://localhost:3000/api/buscarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserName(data.nome);
        setUserEmail(data.email);
        setUserPassword(data.senha);
        setUserPhone(data.telefone);
        setRegisterComplete(data.cadastro_completo);
      } else {
        console.log('Erro ao buscar o usuário.')
      }
    } catch (err) {
      console.error('Erro ao buscar usuário: ' + err);
    }
  };

  buscarUsuario(id);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <ImageBackground
        source={background}
        style={styles.banner} // Use o estilo ajustado
      >
        <Header backgroundActive={false} />

        <View style={styles.mainSection}>
          <View style={styles.infoSection}>
            {/* Avatar e Nome  do usuário*/}
            <View style={styles.avatarSection}>
              <View style={styles.userProfileSection}>
                <View style={styles.avatarCircle}>
                  <Icon name="person" size={140} color="#0AC86C" />
                </View>
                <View style={styles.userSection}>
                  <Text style={styles.userName}>{userName}</Text>
                  <TouchableOpacity>
                    <Icon name="edit" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Senha */}
            <View style={styles.infoRow}>
              <View style={styles.infoTextContainer}>
                <View style={styles.infoIconTextSection}>
                  <Icon name="lock" size={24} color="#000" />
                  <Text style={styles.infoText}>Senha: {userPassword}</Text>
                </ View>
                <TouchableOpacity>
                  <Text style={styles.editText}>Alterar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>

            {/* E-mail */}
            <View style={styles.infoRow}>
              <View style={styles.infoTextContainer}>
                <View style={styles.infoIconTextSection}>
                  <Icon name="email" size={24} color="#000" />
                  <Text style={styles.infoText}>E-mail: {userEmail}</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.editText}>Alterar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>

            {/* Telefone */}
            <View style={styles.infoRow}>
              <View style={styles.infoTextContainer}>
                <View style={styles.infoIconTextSection}>
                  <Icon name="phone" size={24} color="#000" />
                  <Text style={styles.infoText}>Telefone: {userPhone}</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.editText}>Alterar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>
            {/* Botões */}
            <View style={styles.buttonSection}>
              {!registerComplete ? (
                <TouchableOpacity style={styles.button}
                  onPress={navigateToRegisterPlus}>
                  <Text style={styles.buttonText}>Finalizar Cadastro</Text>
                </TouchableOpacity>
              ) : (
                <View />
              )
              }
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="home" size={60} color="#0AC86C" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Preferências</Text>
                <Icon name={"build"} size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};