import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
    },    

    mainSection: {
        flex: 1,
        width: '100%',
        padding: 5,
        alignItems: 'center',
        flexDirection: 'column',
    },

    cashButton: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        width: '90%',
        height: 100,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Para sombra no Android
    },

    iconCashSection: {
        padding: 15,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textCashSection: {
        padding: 5,
        width: '80%',
        flexDirection: 'column',
    },

    titleCashButton: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    textCashButton: {
        fontSize: 12,
        fontWeight: 'light',
        color: '#696969',
    },

});