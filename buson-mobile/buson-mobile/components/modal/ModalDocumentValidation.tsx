import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ModalDocumentValidation() {

    return (
        <View style={styles.container}>
            <View style={styles.content}>

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
        height: 750,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8,
    },

});