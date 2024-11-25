import { useState } from 'react';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Biblioteca para ícones

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_user_pages/userPageStyle';

// Importando o Header como componente
import Header from '@/components/header/header';

export default function ProfileScreen() {

  const background = require('@/assets/images/background/background.png');


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
                  <Text style={styles.userName}>Usuário</Text>
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
                  <Text style={styles.infoText}>Senha: *****</Text>
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
                  <Text style={styles.infoText}>E-mail: usuario@gmail.com</Text>
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
                  <Text style={styles.infoText}>Telefone: -</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.editText}>Alterar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>
            {/* Botões */}
            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Finalizar Cadastro</Text>
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