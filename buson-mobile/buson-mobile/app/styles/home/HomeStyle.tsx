import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#0AC86C',
    },

    user_section: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    text_title: {
        fontSize: 22,
        fontWeight: 'light',
        color: '#fff',
        marginBottom: 30,
    },

    balanceSection: {
        position: 'absolute',
        top: 230, // Ajuste este valor conforme necessário para centralizar
        left: '10%',
        right: '10%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Para sombra no Android
      },

      balanceIconSection: {
        alignItems: 'center',
        justifyContent: 'center',
      },

      balanceDollarIcon: {
        fontSize: 50,
        fontWeight: 'bold',
      },

      balanceTextSection: {
        alignItems: 'center',
        justifyContent: 'center',
      },

      balanceTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
      },

      balanceValue: {
        fontSize: 24,
        fontWeight: '400',
        color: '#333',
      },

      visibleButtonSection: {
        alignItems: 'center',
        justifyContent: 'center',
      },

    mainSection: {
        flex: 1,
        width: '100%',
        marginTop: 50,
        backgroundColor: '#fff',
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },

    mainTopSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },

    inputSection: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '65%',
        height: 50,
        backgroundColor: '#EDEDED',
        paddingLeft: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },

    iconInputSection: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0AC86C',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },

    mainBottomSection: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 25,
  },

  divisorBar: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 10,
    borderRadius: 5,
  },

  buttonSection: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  buttonTopSection: {
    width: '90%',
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonBottomSection: {
    width: '100%',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  bigIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0AC86C',
    width: 150,
    height: 150,
    borderRadius: 20,
  },

  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0AC86C',
    width: 95,
    height: 95,
    borderRadius: 20,
  },

  bigTextIcon: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
  },

  textIcon: {
    fontWeight: 'light',
    fontSize: 15,
    marginTop: 2,
    color: '#fff',
  },


});
