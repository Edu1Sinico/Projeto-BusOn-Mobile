import React from "react";
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/PaymentCashPageStyle'

// Importando o Header como componente
import Header from '@/components/header/header';
import SemiHeader from "@/components/header/semiHeader";
import { ModalAlertValidation } from "@/components/modal/ModalAlertValidation";
import { useRoute } from "@react-navigation/native";

export default function PaymentCashPage() {
  const route = useRoute(); // Hook para acessar os parâmetros da rota
  const { id } = route.params || {}; // Obtém o parâmetro id

  const [saldo, setSaldo] = useState(0);

  const [code, setCode] = useState('');
  const [codeValidation, setCodeValidation] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  // Método para validar o código
  const buscarCodigoPagamento = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/buscarCodigoPagamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigo_pagamento: code,
        }),
      });

      if (response.ok) {
        setCodeValidation(true);
        const data = await response.json();
        console.log("Código aceito!", data);
      } else {
        setCodeValidation(false);
        console.log("Código negado!");
      }
    } catch (err) {
      setCodeValidation(false);
      console.error('Erro de conexão: ' + err);
    }
  };


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
      console.error('Erro de conexão: ' + err);
    }
  };

  const retirarSaldo = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/retirarSaldo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id, // Envie apenas o ID do usuário
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSaldo(data.valor); // Atualize o estado com o novo saldo
      } else {
        const errorMessage = await response.text();
        console.error('Erro ao retirar saldo:', errorMessage);
      }
    } catch (err) {
      console.error('Erro ao retirar saldo:', err);
    }
  };



  const handlePaymentValidation = async () => {
    await buscarSaldo(); // Atualiza o saldo antes da validação

    console.log("Saldo atual: ", saldo);

    if (code === '' || code === null) {
      setSuccessMessage(false);
      setMessageAlert('Por favor, insira o código!');
      setModalVisible(true);
    } else {
      await buscarCodigoPagamento();
      if (codeValidation) {
        if (saldo >= 5) {
          setSuccessMessage(true);
          setMessageAlert('Pagamento realizado com sucesso!');
          setModalVisible(true); // Exibe o modal

          setTimeout(async () => {
            await retirarSaldo(); // Subtração ocorre diretamente no backend
            setModalVisible(false); // Fecha o modal após 2 segundos
            setCodeValidation(false);
          }, 2000);
        } else {
          setSuccessMessage(false);
          setMessageAlert('Saldo insuficiente, por favor insira mais créditos na sua carteira.');
          setModalVisible(true);
        }
      } else {
        setSuccessMessage(false);
        setMessageAlert('Código inválido! Por favor, utilize outro código!');
        setModalVisible(true);
      }
    }
  };




  return (
    <View style={styles.container}>
      <Header backgroundActive={true} />
      <SemiHeader title={'Realizar Pagamento'} />

      <View style={styles.mainSection}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Escolha uma forma de pagamento</Text>
        </View>

        <View style={styles.mainTopSection}>

          <View style={styles.paymentButtonsSection}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="qrcode" size={130} color="#fff" />
              <Text style={styles.buttonText}>QR Code</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.mainBottomSection}>
          <View style={styles.paymentCodeCard}>
            <View style={styles.paymentCodeTopSection}>
              <Text style={styles.paymentCodeTitle}>Insira o código da empresa</Text>
            </View>
            <View style={styles.paymentCodeBottomSection}>
              <TextInput
                style={[styles.input]}
                placeholder="●●●●"
                placeholderTextColor={'#C7C7C7'}
                value={code}
                onChangeText={setCode}
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity style={styles.submitButton}
                onPress={handlePaymentValidation}
              >
                <Text style={styles.submitButtonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

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
