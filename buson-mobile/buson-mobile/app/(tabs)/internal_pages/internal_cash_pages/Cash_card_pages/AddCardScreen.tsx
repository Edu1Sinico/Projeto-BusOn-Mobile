import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import styles from '@/app/styles/internal_pages/internal_cash_page/AddCardStyle';
import Header from '@/components/header/header';
import SemiHeader from '@/components/header/semiHeader';
import { useRoute } from '@react-navigation/native';

export default function AddCardScreen() {
  const route = useRoute();
  const { id } = route.params || {};
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cards, setCards] = useState([]);

  // Função para buscar cartões cadastrados
  // Função para buscar cartões cadastrados
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cartoes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id_usuario: id, // Substitua 1 pelo ID real do usuário
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setCards(data);
        } else {
          console.error('Erro ao buscar cartões');
        }
      } catch (error) {
        console.error('Erro ao buscar cartões:', error);
      }
    };

    fetchCards(); // Invocação da função dentro do useEffect
  }, []); // Dependências vazias para executar apenas uma vez


  const handleAddCard = async () => {
    if (!cardNumber || !expiryDate || !securityCode) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/cartao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero_cartao: cardNumber,
          data_vencimento: expiryDate,
          codigo_seguranca: securityCode,
          id_usuario: id,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Cartão cadastrado com sucesso!');
        setCardNumber('');
        setExpiryDate('');
        setSecurityCode('');
        // Atualiza a lista de cartões
        const newCard = await response.json();
        setCards([...cards, newCard]);
      } else {
        Alert.alert('Erro', 'Erro ao cadastrar o cartão.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o cartão.');
    }
  };

  const handleAddValue = (value) => {
    Alert.alert('Valor Selecionado', `Você escolheu adicionar R$ ${value},00.`);
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

        <View style={styles.valueButtons}>
          {[5, 10, 20, 50].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.valueButton}
              onPress={() => handleAddValue(value)}
            >
              <Text style={styles.valueButtonText}>R$ {value},00</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={cards}
        keyExtractor={(item, index) => (item?.id ? item.id.toString() : `card-${index}`)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>
              Cartão: **** **** **** {item.numero_cartao?.slice(-4) || 'XXXX'}
            </Text>
            <Text style={styles.cardText}>Validade: {item.data_vencimento || 'N/A'}</Text>
          </View>
        )}
        ListHeaderComponent={<Text style={styles.label}>Cartões Cadastrados:</Text>}
      />

    </View>
  );
}