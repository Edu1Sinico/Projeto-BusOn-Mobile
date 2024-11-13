import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// Link do site de ícones: https://oblador.github.io/react-native-vector-icons/

export function ModalAlertValidation({ messageAlert, successMessage, handleClose}) {


    return (

        // Campos vazios
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={[styles.titleSection, successMessage && styles.titleSectionSuccess]}>
                    <Icon
                        name={successMessage ? "check" : "alert-triangle"}
                        size={40}
                        color="#fff"
                    />
                    <Text style={styles.title}>{messageAlert}</Text>
                </View>

                {successMessage ? (
                    // Indicador de login no lugar do botão
                    <View style={styles.loadingSection}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                ) : (
                    // Botão padrão de fechar quando não for login bem-sucedido
                    <TouchableOpacity style={styles.confirmButton} onPress={handleClose}>
                        <Text style={styles.confirmTextButton}>Fechar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(25,25,25,0.5)',
        flex: 1,
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        backgroundColor: "#FFF",
        width: '80%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
    },

    titleSection: {
        backgroundColor: 'red',
        width: '100%',
        height: '50%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    titleSectionSuccess: {
        backgroundColor: 'green',
    },

    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
    },
    
    loadingSection: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    confirmButton: {
        padding: 15,
        height: 40,
        width: 100,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    confirmTextButton: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fff',
    }
    
});