import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';

// Importando os ícones
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/AddCashPageStyle'

// Importando o Header como componente
import Header from '@/components/header/header';
import SemiHeader from '@/components/header/semiHeader';

export default function AddCashScreen() {

  return (
    <View style={styles.container}>
      <Header />
      <SemiHeader route={{ params: { pageType: 'add' }}} />

      <View style={styles.mainSection}>
        {/* Botão do PIX */}
        <TouchableOpacity style={styles.cashButton}>
          <View style={styles.iconCashSection}>
            <Icon name={'pix'} size={40} color="#2EBEC6" />
          </View>
          <View style={styles.textCashSection}>
            <Text style={styles.titleCashButton}>Pix</Text>
            <Text style={styles.textCashButton}>Adicione credítos na sua carteira via Pix</Text>
          </View>
        </TouchableOpacity>

        {/* Botão do Cartão */}
        <TouchableOpacity style={styles.cashButton}>
          <View style={styles.iconCashSection}>
            <Icon name="credit-card" size={40} color="#2EBEC6" />
          </View>
          <View style={styles.textCashSection}>
            <Text style={styles.titleCashButton}>Cartão</Text>
            <Text style={styles.textCashButton}>Adicione credítos na sua carteira via Débito ou Crédito</Text>
          </View>
        </TouchableOpacity>

        {/* Botão do Boleto */}
        <TouchableOpacity style={styles.cashButton}>
          <View style={styles.iconCashSection}>
            <Icon name="local-atm" size={40} color="#2EBEC6" />
          </View>
          <View style={styles.textCashSection}>
            <Text style={styles.titleCashButton}>Boleto</Text>
            <Text style={styles.textCashButton}>Adicione credítos na sua carteira via Boleto</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}