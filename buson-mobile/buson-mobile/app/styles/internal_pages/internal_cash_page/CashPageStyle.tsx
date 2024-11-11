import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#D6D6D6',
    },

    mainSection: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
    },

    balanceSection: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Para sombra no Android
    },

    balanceLeftSection: {},

    balanceTextSection: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    balanceValueSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    balanceText: {
        color: '#6A6A6A',
        fontSize: 17,
        fontWeight: 'bold',
    },

    realIcon: {
        color: '#A3A3A3',
        fontSize: 15,
        fontWeight: 'bold',
    },

    valueText: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    balanceRightSection: {
        width: '12%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonSection: {
        marginTop: 10,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    cashButtonsSection: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconButton: {
        width: 190,
        height: 190,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Para sombra no Android
    },

    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#166CE2',
    },

});