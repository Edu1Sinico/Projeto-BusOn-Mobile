import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '@/app/styles/internal_pages/internal_cash_page/AddCardStyle';
import Header from '@/components/header/header';
import SemiHeader from '@/components/header/semiHeader';
import { useNavigation } from '@react-navigation/native';

export default function AddCardScreen() {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleAddCard = async () => {
    if (!cardNumber || !expiryDate || !securityCode) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      // Enviar dados para o backend
      const response = await fetch('http://localhost:3000/api/cartao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero_cartao: cardNumber,
          data_vencimento: expiryDate,
          codigo_seguranca: securityCode,
          id_usuario: 1, // Substitua pelo ID do usuário logado
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Cartão cadastrado com sucesso!');
        navigation.goBack();
      } else {
        Alert.alert('Erro', 'Erro ao cadastrar o cartão.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o cartão.');
    }
  };

  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />
      <SemiHeader title="Cadastrar Cartão" />

      <View style={styles.form}>
        <Text style={styles.label}>Número do Cartão</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          placeholderTextColor={'#C7C7C7'}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          maxLength={16}
          placeholder="Digite o número do cartão"
        />

        <Text style={styles.label}>Data de Vencimento</Text>
        <TextInput
          style={styles.input}
          value={expiryDate}
          placeholderTextColor={'#C7C7C7'}
          onChangeText={setExpiryDate}
          placeholder="MM/AAAA"
        />

        <Text style={styles.label}>Código de Segurança</Text>
        <TextInput
          style={styles.input}
          value={securityCode}
          placeholderTextColor={'#C7C7C7'}
          onChangeText={setSecurityCode}
          keyboardType="numeric"
          maxLength={3}
          placeholder="Digite o código"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddCard}>
          <Text style={styles.buttonText}>Cadastrar Cartão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
