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

    titleSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    mainTopSection: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    paymentButtonsSection: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconButton: {
        width: 190,
        height: 190,
        borderRadius: 10,
        backgroundColor: '#0AC86C',
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
        marginTop: 15,
        color: '#fff',
    },

});
