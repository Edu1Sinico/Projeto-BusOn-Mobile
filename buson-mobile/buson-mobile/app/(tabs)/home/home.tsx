
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLinkTo, useRoute } from '@react-navigation/native';
import { ImageBackground } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome5';

// Importando a estilização
import styles from '@/app/styles/home/HomeStyle';

// Importando o Header como componente
import Header from '@/components/header/header';


export default function HomeScreen() {
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const { id } = route.params || {}; // Obtém o parâmetro id

  React.useEffect(() => {
    console.log('ID do usuário:', id);
  }, [id]);

  // useState
  const [search, setSearch] = useState('');
  const [showBalance, setShowBalance] = useState(true); // Cria um useState booleano para a mudança de estado da visibilidade do saldo
  const [userName, setUserName] = useState('Usuário');

  const linkTo = useLinkTo(); // Sistema de links do react navigator

  const background = require('@/assets/images/background/background.png');

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

        <View style={styles.user_section}>
          <Text style={styles.text_title}>Bem-vindo(a), {userName}!</Text>
        </View>

        {/* Seção de saldo disponível */}
        <View style={styles.balanceSection}>
          <View style={styles.balanceIconSection}>
            <Text style={styles.balanceDollarIcon}>$</Text>
          </View>
          <View style={styles.balanceTextSection}>
            <Text style={styles.balanceTitle}>Saldo Disponível</Text>
            <Text style={styles.balanceValue}> {showBalance ? 'R$ ●●●●' : 'R$ 0,00'} </Text>
          </View>
          <View style={styles.visibleButtonSection}>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Icon
                name={showBalance ? 'eye' : 'eye-slash'} // Alterna o ícone com base no estado
                size={20}
                color="#0AC86C"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção principal */}
        <View style={styles.mainSection}>

          {/* Seção do Topo */}

          {/* Barra de pesquisa */}
          <View style={styles.mainTopSection}>
            <View style={styles.inputSection}>
              <View style={styles.iconInputSection}>
                <Icon name="search" size={20} color="#fff" />
              </View>
              <TextInput
                style={[styles.input]}
                placeholder="Pesquisar"
                placeholderTextColor={'#C7C7C7'}
                value={search}
                onChangeText={setSearch}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          {/* Seção de baixo */}
          <View style={styles.mainBottomSection}>

            <View style={styles.divisorBar}></View>

            <View style={styles.buttonSection}>
              <View style={styles.buttonTopSection}>
                <TouchableOpacity
                  style={styles.bigIconButton}
                  onPress={() => linkTo(`/Empresas?id=${id}`)}
                >
                  <Icon name="building" size={90} color={'#fff'}></Icon>
                  <Text style={styles.bigTextIcon}>Empresas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bigIconButton}
                  onPress={() => linkTo('/Empresas-Favoritas')}
                >
                  <Icon name="star" size={90} color={'#fff'}></Icon>
                  <Text style={styles.bigTextIcon}>Favoritos</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonBottomSection}>
                <TouchableOpacity style={styles.bigIconButton}>
                  <Icon name="question" size={90} color={'#fff'}></Icon>
                  <Text style={styles.bigTextIcon}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bigIconButton}
                  onPress={() => linkTo('/Perfil')}
                >
                  <Icon name="user-circle" size={90} color={'#fff'}></Icon>
                  <Text style={styles.bigTextIcon}>Perfil</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>

  );
}