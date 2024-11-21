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
        fontSize: 20,
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    
    mainBottomSection: {
        width: '100%',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    paymentCodeCard: {
        width: '75%',
        height: 125,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },

    paymentCodeTopSection: {
        width: '100%',
        height: '35%',
        padding: 15,
    },

    paymentCodeBottomSection: {
        width: '100%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    paymentCodeTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    input: {
        backgroundColor: '#EDEDED',
        height: 45,
        width: 250,
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 5,
        marginBottom: 10,
    }

});
