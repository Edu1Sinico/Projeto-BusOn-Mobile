import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';

// Importando os ícones
import Icon from 'react-native-vector-icons/AntDesign';

export function ModalCompanyValidation({ companyName, companyId, code, handleClose }) {
    const [loadingCopy, setLoadingCopy] = useState(false);
    const [copiedSuccess, setCopiedSuccess] = useState(false); // Novo estado para o feedback de cópia

    async function handleCopyCode() {
        await Clipboard.setStringAsync(code);
        setLoadingCopy(true);
        setTimeout(async () => {
            setLoadingCopy(false);
            setCopiedSuccess(true); // Exibe a tela de sucesso
            await atualizarCodigoPagamento();
            setTimeout(() => {
                handleClose(); // Fecha o modal após o sucesso
            }, 1500);
        }, 1000);
    }

    // Método para atualizar o codigo de pagamento
    const atualizarCodigoPagamento = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/atualizarCodigoPagamento', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_empresa: companyId,
                    codigo_pagamento: code,
                }),
            });

            if (response.ok) {
                console.log("Código de pagamento adicionado com sucesso!");
            } else {
                const errorText = await response.text();
                console.error('Erro ao adicionar o código:', errorText);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {copiedSuccess ? (
                    <View style={styles.successSection}>
                        <Icon name="smileo" size={200} color="#00ff00" />
                        <Text style={styles.successText}>Código copiado com sucesso!</Text>
                    </View>
                ) : loadingCopy ? (
                    <View style={styles.loadingSection}>
                        <ActivityIndicator size={50} color="#00ff00" />
                        <Text style={styles.loadingText}>Copiando...</Text>
                    </View>
                ) : (
                    <>
                        <View style={styles.contentTopSection}>
                            <View style={styles.titleSection}>
                                <Text style={styles.title}>{companyName}</Text>
                            </View>
                            <View style={styles.qrCodeSection}>
                                {/* Trocar para um gerador de QR Code depois */}
                                <Icon name="qrcode" size={350} color="#000" />
                            </View>

                            <View style={styles.codeSection}>
                                <Pressable style={styles.innerCode} onLongPress={handleCopyCode}>
                                    <Text style={styles.textCode}>
                                        {code}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={styles.contentBottomSection}>
                            <View style={styles.textInfoSection}>
                                <Text style={styles.text}>
                                    Utilize o código da empresa {companyName} para realizar o pagamento de R$ 5,00.
                                </Text>
                            </View>
                            <View style={styles.buttonSection}>
                                <TouchableOpacity style={[styles.confirmButton, styles.cancelButton]} onPress={handleClose}>
                                    <Text style={styles.confirmTextButton}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.confirmButton} onPress={handleCopyCode}>
                                    <Text style={styles.confirmTextButton}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )}
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
    },
    loadingSection: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: 20,
        margin: 15,
    },
    successSection: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    successText: {
        fontSize: 30,
        margin: 15,
        fontWeight: 'bold',
        color: "#00ff00",
        textAlign: 'center',
    },
});
