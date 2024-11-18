import React from "react";
import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import SemiHeader from "@/components/header/semiHeader";
import Icon from "react-native-vector-icons/FontAwesome5";

// Importando a estilização
import styles from "@/app/styles/login_register/styleregisterplus";

// Importando o Header como componente
import Header from "@/components/header/header";

export default function Registerplus() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTop}>
        <View style={styles.header}>
          <View style={[styles.logo_section]}>
            <Image
              source={require("@/assets/images/BusOn_Logo_Branco_Preto.png")}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.userbanner}>
          <Icon name="user-alt" size={50} color="#0AC86C" />
        </View>
        <Text style={styles.title}>Complete o seu Cadastro</Text>
      </View>

      <View style={styles.sectionBottom}>
        <View>
         <SemiHeader title={'Preencha as Informações'}></SemiHeader> 
        </View>
      </View>
      <View></View>
    </View>
  );
}
