import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '@/app/styles/internal_pages/internal_cash_page/AddCardStyle';
import Header from '@/components/header/header';
import SemiHeader from '@/components/header/semiHeader';
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
import { inputValidationCard } from '@/app/scripts/internal_pages/internal_cash_pages/inputValidationCard';


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

  const [cardNumberError, setCardNumberError] = useState(false);
  const [expiryDateError, setExpiryDateError] = useState(false);
  const [securityCodeError, setSecurityCodeError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  const handleCardValidation = () => {
    const isValid = inputValidationCard(
      cardNumber,
      expiryDate,
      securityCode,
      setMessageAlert,
      setCardNumberError,
      setExpiryDateError,
      setSecurityCodeError,
      setSuccessMessage,
      setModalVisible
    );

    if (isValid) {
      handleAddCard();
      setTimeout(() => {
        setModalVisible(false);
      }, 1500);
    }
  };



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
          style={[styles.input, cardNumberError && styles.inputError]}
          value={cardNumber}
          placeholder="Digite o número do cartão"
          placeholderTextColor={'#C7C7C7'}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          maxLength={16}
        />

        <TextInput
          style={[styles.input, expiryDateError && styles.inputError]}
          value={expiryDate}
          placeholder="MM/AAAA"
          placeholderTextColor={'#C7C7C7'}
          onChangeText={setExpiryDate}
        />

        <TextInput
          style={[styles.input, securityCodeError && styles.inputError]}
          value={securityCode}
          placeholder="Digite o código"
          placeholderTextColor={'#C7C7C7'}
          onChangeText={setSecurityCode}
          keyboardType="numeric"
          maxLength={3}
        />

        <TouchableOpacity style={styles.button} onPress={handleCardValidation}>
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

      <Modal animationType="fade" transparent visible={modalVisible}>
        <ModalAlertValidation
          messageAlert={messageAlert}
          successMessage={successMessage}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}
