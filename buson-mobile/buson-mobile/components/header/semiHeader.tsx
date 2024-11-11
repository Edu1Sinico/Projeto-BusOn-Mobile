import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SemiHeader = ({ route }) => {
  // Verifique se `route` e `route.params` estão definidos
  const pageType = route?.params?.pageType || 'default';

  const pageTitle = pageType === 'add' ? 'Realizar Pagamento' : 'Adicionar Créditos';

  return (
    <View style={styles.semiHeader}>
      <View style={styles.semiHeaderTop}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={30} color="#166CE2" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>{pageTitle}</Text>
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
        fontSize: 20,
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