import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';


// Importando os ícones
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/AddCashPageStyle'

// Importando o Header como componente
import Header from '@/components/header/header';
import SemiHeader from '@/components/header/semiHeader';

export default function AddCashScreen() {

  const linkTo = useLinkTo(); // Sistema de links do react navigator

  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />
      <SemiHeader title="Adicionar Créditos" />

      <View style={styles.mainSection}>
        {/* Botão do PIX */}
        <TouchableOpacity style={styles.cashButton}>
          <View style={styles.iconCashSection}>
            <Icon name={'pix'} size={40} color="#2EBEC6" />
          </View>
          <View style={styles.textCashSection}>
            <Text style={styles.titleCashButton}>Pix</Text>
            <Text style={styles.textCashButton}>Adicione créditos na sua carteira via Pix</Text>
          </View>
        </TouchableOpacity>

        {/* Botão do Cartão */}
        <TouchableOpacity style={styles.cashButton}
          onPress={() => linkTo('/Visualizar-Cartao')}>
          <View style={styles.iconCashSection}>
            <Icon name="credit-card" size={40} color="#2EBEC6" />
          </View>
          <View style={styles.textCashSection}>
            <Text style={styles.titleCashButton}>Cartão</Text>
            <Text style={styles.textCashButton}>Adicione créditos na sua carteira via Débito ou Crédito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cashButton}>
          <View style={styles.iconCashSection}>
            <Icon name={'card-giftcard'} size={40} color="#2EBEC6" />
          </View>
          <View style={styles.textCashSection}>
            <Text style={styles.titleCashButton}>Cartão-Presente</Text>
            <Text style={styles.textCashButton}>Adicione créditos na sua carteira via Cartão-Presente</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}