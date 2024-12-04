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
  const [companyName, setCompanyName] = useState('Empresa');

  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  // Método para validar o código
  const buscarCodigoPagamento = async () => {
    try {
      // Define o endpoint da API (ajuste o endereço do backend)
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
        const data = await response.json();
        setCompanyName(data.nome_empresa);
        setSuccessMessage(true);
        setCodeValidation(true);
        setMessageAlert('Código validado com sucesso para a empresa "' + companyName + '"!');
        setModalVisible(true);
      } else {
        setSuccessMessage(false);
        setCodeValidation(false);
        setMessageAlert('O código enviado não foi encontrado, tente novamente.');
        setModalVisible(true);
      }
    } catch (err) {
      setSuccessMessage(false);
      setCodeValidation(false);
      setMessageAlert('Erro de conexão com o servidor. Tente novamente.');
      setModalVisible(true);
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
        setSuccessMessage(false);
        setMessageAlert('Saldo não encotrado, tente novamente.');
        setModalVisible(true);
      }
    } catch (err) {
      setSuccessMessage(false);
      setMessageAlert('Erro de conexão com o servidor. Tente novamente.');
      setModalVisible(true);
      console.error('Erro de conexão: ' + err);
    }
  };

  const retirarSaldo = async (saldo) => {
    try {
      // Define o endpoint da API (ajuste o endereço do backend)
      const response = await fetch('http://localhost:3000/api/retirarSaldo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: id, // ID do usuário
          valor: saldo,   // Valor a ser retirado
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSaldo(data.valor); // Atualiza o saldo no estado
        setSuccessMessage(true);
        setMessageAlert('Pagamento realizado com sucesso!');
        setModalVisible(true);
      } else {
        console.error('Erro ao retirar saldo:', await response.text());
        setSuccessMessage(false);
        setMessageAlert('Falha ao realizar o pagamento.');
        setModalVisible(true);
      }
    } catch (err) {
      console.error('Erro ao retirar saldo: ' + err);
    }
  };

  const handlePaymentValidation = async () => {
    buscarSaldo();
    console.log("Saldo: ", saldo)
    if (saldo >= 5) {
      if (code === null || code === '') {
        setSuccessMessage(false);
        setMessageAlert('Por favor, insira o código!');
        setModalVisible(true);
      } else {
        buscarCodigoPagamento();
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
        if (codeValidation == true) {
          setSaldo(saldo - 5);
          console.log("Saldo atual: ", saldo);
          retirarSaldo(saldo);
          setTimeout(() => {
            setModalVisible(false);
          }, 2000);
        }
      }
    } else {
      setSuccessMessage(false);
      setMessageAlert('Saldo insuficiente, por favor insirá mais créditos na sua carteira.');
      setModalVisible(true);
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
