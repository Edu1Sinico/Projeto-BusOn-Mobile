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

export default function PaymentCashPage() {

  const [code, setCode] = useState('');
  const [companyName, setCompanyName] = useState('Empresa');
  const [companyCode, setCompanyCode] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

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
        setCompanyCode(data.codigo_pagamento);
        setSuccessMessage(true);
        setMessageAlert('Código validado com sucesso para a empresa "' + companyName + '"!');
        setModalVisible(true);
      } else {
        setSuccessMessage(false);
        setMessageAlert('O código enviado não foi encontrado, tente novamente.');
        setModalVisible(true);
        console.log('Código da empresa não encontrado.')
      }
    } catch (err) {
      setSuccessMessage(false);
      setMessageAlert('Erro de conexão com o servidor. Tente novamente.');
      setModalVisible(true);
      console.error('Erro de conexão: ' + err);
    }
  };

  const handlePaymentValidation = async () => {
    if (code === null || code === '') {
      setSuccessMessage(false);
      setMessageAlert('Por favor, insira o código!');
      setModalVisible(true);
    } else {
      buscarCodigoPagamento();
      setTimeout(() => {
        setModalVisible(false);
      }, 2000);
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
