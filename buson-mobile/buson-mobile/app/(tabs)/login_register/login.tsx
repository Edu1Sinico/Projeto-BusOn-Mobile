import { useState } from 'react';
import { View, Text, Modal, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
// Importando a estilização
import styles from '@/app/styles/login_register/LoginStyle';

import Icon from 'react-native-vector-icons/FontAwesome';
// Importando a tela de aviso do campo vazio
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
import { inputValidationLogin } from '@/app/scripts/login_register/validationLogin';
import React from 'react';

const background = require("@/assets/images/background/bus_background.png");

export default function LoginScreen() {
    const [email, setEmail] = useState('');  // Estado para armazenar o valor do campo de texto
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const linkTo = useLinkTo(); // Sistema de links do react navigator

    // Estados de erro para campos individuais
    const [userError, setUserError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Estado para mensagem de sucesso
    const [successLogin, setSuccessLogin] = useState(false);

    // Mensagem de alerta
    const [messageAlert, setMessageAlert] = useState("");


    const handleLogin = () => {
        if (inputValidationLogin(user, email, password, setMessageAlert, setUserError, setEmailError, setPasswordError, setModalVisible)) {
            setSuccessLogin(true);
            setTimeout(() => {
                linkTo('/Home');
                setModalVisible(false)
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode='repeat' style={styles.backgroundImage}>
                <View style={styles.loginSection}>

                    <View style={styles.topSection}>
                        <View style={styles.userSection}>
                            <Icon name="user" size={110} color="#0AC86C" />
                        </View>

                        <Text style={styles.title}>Login</Text>
                    </View>

                    <View style={styles.middleSection}>

                        {/* Campo de Usuário */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, userError && styles.iconInputError]}>
                                <Icon name="user" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, userError && styles.inputError]} // Aplica o estilo de erro se userError for true
                                placeholder="Usuário"
                                placeholderTextColor={'#C7C7C7'}
                                value={user}
                                onChangeText={setUser}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Campo do Email */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, emailError && styles.iconInputError]}>
                                <Icon name="at" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, emailError && styles.inputError]} // Aplica o estilo de erro se emailError for true
                                placeholder="E-mail"
                                placeholderTextColor={'#C7C7C7'}
                                value={email}
                                onChangeText={setEmail} // Atualiza o estado com o texto digitado
                                keyboardType="email-address" // Define o tipo de teclado como email
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Campo de Senha */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, passwordError && styles.iconInputError]}>
                                <Icon name="lock" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, passwordError && styles.inputError]} // Aplica o estilo de erro se passwordError for true
                                placeholder="Senha"
                                placeholderTextColor={'#C7C7C7'}
                                secureTextEntry={true} // Oculta o texto
                                value={password}
                                onChangeText={setPassword} // Atualiza o estado com o texto digitado
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <TouchableOpacity style={styles.touchLink}>
                            <Text style={styles.link}>Esqueceu a senha? Clique aqui!</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bottomSection}>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginTextButton}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchLink} onPress={() => linkTo('/Register')}>
                            <Text style={styles.link}>Não possuí uma conta? Registra-se!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >

            {/* Modal de alerta */}
            < Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
            >
                <ModalAlertValidation messageAlert={messageAlert} successMessage={successLogin} handleClose={() => setModalVisible(false)} />
            </Modal >
        </View >
    );
}