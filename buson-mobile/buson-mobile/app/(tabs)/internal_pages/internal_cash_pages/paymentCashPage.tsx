import React from "react";
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// Importando a estilização
import styles from '@/app/styles/internal_pages/internal_cash_page/PaymentCashPageStyle'

// Importando o Header como componente
import Header from '@/components/header/header';
import SemiHeader from "@/components/header/semiHeader";

export default function PaymentCashPage() {

  const [code, setCode] = useState('');

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
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
