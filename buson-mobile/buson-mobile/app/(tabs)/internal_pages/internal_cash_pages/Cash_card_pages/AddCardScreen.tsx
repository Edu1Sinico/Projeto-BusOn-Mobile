import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '@/app/styles/internal_pages/internal_cash_page/AddCardStyle';
import Header from '@/components/header/header';
import SemiHeader from '@/components/header/semiHeader';


export default function AddCardScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params || {};

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedValue, setSelectedValue] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cartoes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },

          body: JSON.stringify({ id_usuario: id || 1 }),

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


    fetchCards();
  }, [id]);


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
          id_usuario: id || 1,


        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Cartão cadastrado com sucesso!');
        setCardNumber('');
        setExpiryDate('');
        setSecurityCode('');

        const newCard = await response.json();
        setCards([...cards, newCard]);
      } else {
        Alert.alert('Erro', 'Erro ao cadastrar o cartão.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o cartão.');
    }
  };


  const handleConfirm = async () => {
    if (!selectedCard || !selectedValue) {
      Alert.alert('Erro', 'Selecione um cartão e um valor.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/saldo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          valor: selectedValue,
          id_usuario: id || 1,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', `R$ ${selectedValue},00 adicionados ao saldo com sucesso!`);
        navigation.navigate('CashScreen', { saldoAtualizado: selectedValue });
      } else {
        Alert.alert('Erro', 'Erro ao adicionar saldo.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar o saldo.');
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
          placeholder="Digite o número do cartão"
          onChangeText={setCardNumber}
          keyboardType="numeric"
          maxLength={16}
        />

        <Text style={styles.label}>Data de Vencimento</Text>
        <TextInput
          style={styles.input}
          value={expiryDate}
          placeholder="MM/AAAA"
          onChangeText={setExpiryDate}
        />

        <Text style={styles.label}>Código de Segurança</Text>
        <TextInput
          style={styles.input}
          value={securityCode}
          placeholder="Digite o código"
          onChangeText={setSecurityCode}
          keyboardType="numeric"
          maxLength={3}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddCard}>
          <Text style={styles.buttonText}>Cadastrar Cartão</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={cards}

        keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selectedCard === item.id && styles.selectedCard]}
            onPress={() => setSelectedCard(item.id)}
          >
            <Text style={styles.cardText}>
              Cartão: **** {item?.numero_cartao?.slice(-4) || 'Desconhecido'}
            </Text>
          </TouchableOpacity>
        )}
      />


      <View style={styles.valueButtons}>
        {[5, 10, 20, 50].map((value) => (
          <TouchableOpacity
            key={value}
            style={[styles.valueButton, selectedValue === value && styles.selectedValueButton]}
            onPress={() => setSelectedValue(value)}
          >
            <Text style={styles.valueButtonText}>R$ {value},00</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
