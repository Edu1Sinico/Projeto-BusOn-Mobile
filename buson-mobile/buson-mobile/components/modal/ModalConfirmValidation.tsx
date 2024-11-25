import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export function ModalConfirmValidation({ onConfirm, onCancel }) {
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onConfirm(); // Aciona a função passada por prop
        }, 1500);
    };

    const handleCancel = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onCancel(); // Aciona a função passada por prop
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <Icon name="help-circle" size={40} color="#fff" />
                    <Text style={styles.title}>Deseja completar o seu Cadastro?</Text>
                </View>
                {loading ? (
                    <View style={styles.loadingSection}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                ) : (
                    <View style={styles.confirmSection}>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                            <Text style={styles.confirmTextButton}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.confirmButton, styles.cancelButton]} onPress={handleCancel}>
                            <Text style={styles.confirmTextButton}>Não</Text>
                        </TouchableOpacity>
                    </View>
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
        width: '80%',
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
    },

    titleSection: {
        backgroundColor: '#0AC86C',
        width: '100%',
        height: '50%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
    },

    confirmSection: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
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