import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0AC86C',
    },

    mainSection: {
        flex: 1,
        width: '100%',
        marginTop: 150,
        backgroundColor: '#fff',
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        padding: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },
    banner: {
        flex: 1,
        width: '100%', // Garante que a imagem cubra toda a largura
        height: '135%', // Garante que a imagem cubra toda a altura
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'center', // Ajusta a imagem para cobrir todo o fundo
      },

    avatarSection: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    userProfileSection: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
    },

    avatarCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        flexDirection: 'column',
    },

    userSection: {
        flexDirection: 'row',
        top: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 130,
    },

    infoSection: {
        width: '100%',
        flex: 1,
        marginTop: 140,
    },

    infoRow: {
        width: '100%',
        marginBottom: 25,
        marginTop: 40 // Espaço entre os campos
    },

    infoTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Separação entre texto e botão
    },

    infoIconTextSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    infoText: {
        fontSize: 20, // Fonte maior
        color: '#000',
        marginLeft: 10,
    },

    editText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'light',
    },

    divider: {
        height: 1, // Espessura da linha
        backgroundColor: '#000', // Cor preta
        marginTop: 10, // Espaço entre o texto e a linha
    },

    buttonSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 55,
        alignItems: 'center',
        marginTop: 90,
    },

    button: {
        padding: 15,
        height: 55,
        width: 210,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#0AB060',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});