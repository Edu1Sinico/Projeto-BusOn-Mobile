import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    mainSection: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
  
    mainTopSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
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
        flex: 1,
        marginTop: 15,
    },

    // Estilo para o card de empresa
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    },

    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },

    cardContent: {
        flex: 1,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    cardSubtitle: {
        fontSize: 14,
        color: '#666',
    },

    cardButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    favoriteButton: {
        marginRight: 10,
    },

    selectButton: {
        backgroundColor: '#0AC86C',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
    },

    selectButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      mainSection: {
        flex: 1, // Permite que a seção ocupe todo o espaço disponível
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      cardList: {
        paddingBottom: 16, // Espaçamento inferior para melhor visualização
      },
      
});
