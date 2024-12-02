import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

// Importando os ícones
import Icon from 'react-native-vector-icons/AntDesign';

export function ModalCompanyValidation({ companyName, code }) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contentTopSection}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>{companyName}</Text>
                    </View>
                    <View style={styles.qrCodeSection}>
                        {/* Trocar para um gerador de QR Code depois */}
                        <Icon name="qrcode" size={350} color="#000" />
                    </View>
                    <View style={styles.codeSection}>
                        <Pressable style={styles.innerCode}>
                            <Text style={styles.textCode}>
                                {code}
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.contentBottomSection}>
                    <View style={styles.textInfoSection}>
                        <Text style={styles.text}>Utilize o código da empresa {companyName} para realizar o pagamento.</Text>
                    </View>
                    <View style={styles.buttonSection}>
                        <TouchableOpacity style={styles.confirmButton}>
                            <Text style={styles.confirmTextButton}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.confirmButton, styles.cancelButton]}>
                            <Text style={styles.confirmTextButton}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
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
        width: '75%',
        height: 750,
        padding: 50,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
    },

    contentTopSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    titleSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    qrCodeSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    codeSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textCode: {
        color: "#FFF",
        fontSize: 23,
        fontWeight: '600',
        textAlign: "center",
    },

    innerCode: {
        backgroundColor: "#0E0E0E",
        width: "90%",
        padding: 15,
        borderRadius: 8,
    },

    contentBottomSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 15,
    },

    textInfoSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
    },

    buttonSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
    },

    confirmButton: {
        padding: 15,
        height: 50,
        width: 150,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0AC86C',
    },

    cancelButton: {
        backgroundColor: 'red',
    },

    confirmTextButton: {
        fontSize: 15,
        fontWeight: 500,
        color: '#fff',
    }

});

