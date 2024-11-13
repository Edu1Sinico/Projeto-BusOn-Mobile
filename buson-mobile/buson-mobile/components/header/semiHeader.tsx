import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação

const SemiHeader = ({ title }) => {
  const navigation = useNavigation(); // Inicializando o hook de navegação

  return (
    <View style={styles.semiHeader}>
      <View style={styles.semiHeaderTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#0AC86C" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>{title}</Text>
      </View>
      <View style={styles.divisorSection}>
        <View style={styles.divisor}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  semiHeader: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },

    semiHeaderTop: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    pageTitle: {
        flex: 1, 
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },

    divisorSection: {
      width: '100%',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',

    },

    divisor: {
      height: 10,
      width: 45,
      backgroundColor: '#D9D9D9',
      borderRadius: 10,
    },

});

export default SemiHeader;