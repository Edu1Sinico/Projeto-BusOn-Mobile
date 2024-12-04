
import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useLinkTo, useRoute } from '@react-navigation/native';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/CashPageStyle'


// Importando o Header como componente
import Header from '@/components/header/header';


export default function CashScreen() {
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const { id } = route.params || {}; // Obtém o parâmetro id

  // useState do Saldo
  const [saldo, setSaldo] = useState('0.00');

  const buscarSaldo = async () => {
    try {
      // Define o endpoint da API (ajuste o endereço do backend)
      const response = await fetch('http://localhost:3000/api/buscarSaldo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSaldo(data.valor);
      } else {
        console.log('Erro ao buscar o saldo: ', await response.text())
      }
    } catch (err) {
      console.error('Erro ao buscar o saldo: ' + err);
    }
  };

  buscarSaldo();

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
              <Text style={styles.valueText}>{showBalance ? '●●●●' : saldo}</Text>
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
              onPress={() => linkTo(`/Adicionar-Credito?id=${id}`)} // Navegando para a página "Adicionar Créditos"
            >
              <Icon name="wallet" size={90} color="#0AC86C" />
              <Text style={styles.buttonText}>Adicionar Créditos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cashButtonsSection}>
            <TouchableOpacity style={styles.iconButton}
              onPress={() => linkTo(`/Realizar-Pagamento?id=${id}`)}>
              <Icon name="credit-card" size={90} color="#0AC86C" />
              <Text style={styles.buttonText}>Realizar Pagamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}