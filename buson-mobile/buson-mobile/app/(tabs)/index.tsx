
import { useState } from 'react';
import Header from '@/components/header/header';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Biblioteca para ícones

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Icon name="menu" size={24} color="#fff" />
        <Text style={styles.logo}>BUS ON</Text>
        <View style={styles.headerIcons}>
          <Icon name="notifications" size={24} color="#fff" />
          <Icon name="account-circle" size={24} color="#fff" style={styles.iconMargin} />
        </View>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <Icon name="person" size={50} color="#4CAF50" />
          </View>
          <View style={styles.usersection}>
            <Text style={styles.userName}>Usuário</Text>
            <TouchableOpacity>
              <Icon name="edit" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Avatar e Nome */}


        {/* Senha */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Icon name="lock" size={24} color="#4CAF50" />
            <Text style={styles.infoText}>Senha: *****</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Alterar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
        </View>

        {/* E-mail */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Icon name="email" size={24} color="#4CAF50" />
            <Text style={styles.infoText}>E-mail: usuario@gmail.com</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Alterar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
        </View>

        {/* Telefone */}
        <View style={styles.infoRow}>
          <View style={styles.infoTextContainer}>
            <Icon name="phone" size={24} color="#4CAF50" />
            <Text style={styles.infoText}>Telefone: -</Text>
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
          </TouchableOpacity>
        </View>
      </View>




      {/* Rodapé */}
      <View style={styles.footer}>
        <Icon name="account-balance-wallet" size={24} color="#B0B0B0" />
        <Icon name="home" size={24} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
  },
  logo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 15,
  },
  avatarSection: {
    alignItems: 'center',
    
  },
  avatarCircle: {
    position: 'absolute',
    bottom: 1,
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth:5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    flexDirection: 'column',
  },
  usersection:{
    flexDirection: 'row',
    top: 30,
    alignItems:'center',
    justifyContent:'space-evenly',
    width:130,
  },
  infoSection: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 15,
    elevation: 3,
    marginTop: 140,
  },
  infoRow: {
    marginBottom: 25,
    marginTop: 40 // Espaço entre os campos
  },
  infoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Separação entre texto e botão
  },
  infoText: {
    fontSize: 20, // Fonte maior
    color: '#000',
    marginLeft: 10,
  },
  editText: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1, // Espessura da linha
    backgroundColor: '#000', // Cor preta
    marginTop: 10, // Espaço entre o texto e a linha
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 55,
    alignItems: 'center',
    marginTop: 90,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});



export default ProfilePage;


