import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    registerSection: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderStyle: "solid",
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    topSection: {
        width: '100%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    userSection: {
        width: 150,
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },


    logo: {
        width: 175,
        height: 165,
    },

    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#166CE2',
    },

    middleSection: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    inputSection: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontSize: 15,
        marginBottom: 3,
    },

    input: {
        width: '65%',
        height: 45,
        backgroundColor: '#fff',
        paddingLeft: 10,
    },

    inputError: {
        borderColor: 'red',
        borderWidth: 2,
    },

    iconInputSection: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
    },

    iconInputError: {
        backgroundColor: 'red',
    },

    touchLink: {
        width: '100%',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    link: {
        color: '#707070',
        fontSize: 14,
    },

    bottomSection: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    registerButton: {
        padding: 15,
        height: 70,
        width: 120,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166CE2',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    registerTextButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

});
