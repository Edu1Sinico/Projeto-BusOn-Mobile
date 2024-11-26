
import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useLinkTo } from '@react-navigation/native';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/CashPageStyle'


// Importando o Header como componente
import Header from '@/components/header/header';


export default function CashScreen() {

  // useState
  const [showBalance, setShowBalance] = useState(true); // Cria um useState booleano para a mudança de estado da visibilidade do saldo

  const linkTo = useLinkTo(); // Sistema de links do react navigator

  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />

      <View style={styles.mainSection}>
        <View style={styles.balanceSection}>
          <View style={styles.balanceLeftSection}>
            <View style={styles.balanceTextSection}>
              <Text style={styles.balanceText}>Saldo Disponível</Text>
            </View>

            <View style={styles.balanceValueSection}>
              <Text style={styles.realIcon}>R$ </Text>
              <Text style={styles.valueText}>{showBalance ? '●●●●' : '0,00'}</Text>
            </View>
          </View>

          <View style={styles.balanceRightSection}>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Icon
                name={showBalance ? 'eye' : 'eye-slash'} // Alterna o ícone com base no estado
                size={30}
                color="#0AC86C"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonSection}>
          <View style={styles.cashButtonsSection}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => linkTo('/Adicionar-Credito')} // Navegando para a página "Adicionar Créditos"
            >
              <Icon name="wallet" size={90} color="#0AC86C" />
              <Text style={styles.buttonText}>Adicionar Créditos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cashButtonsSection}>
            <TouchableOpacity style={styles.iconButton}
              onPress={() => linkTo('/Realizar-Pagamento')}>
              <Icon name="credit-card" size={90} color="#0AC86C" />
              <Text style={styles.buttonText}>Realizar Pagamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}