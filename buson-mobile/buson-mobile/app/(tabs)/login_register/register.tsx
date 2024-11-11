import { useState } from 'react';
import { View, Text, Modal, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
// Importando a estilização
import styles from '@/app/styles/login_register/RegisterStyle';
import { useLinkTo } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
// Importando a tela de aviso do campo vazio
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
import { inputValidationRegister } from '@/app/scripts/login_register/validationRegister';
import React from 'react';

const background = require("@/assets/images/background/bus_background.png");



export default function RegisterScreen() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const linkTo = useLinkTo(); // Sistema de links do react navigator

    // Estados de erro para campos individuais
    const [userError, setUserError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    // Mensagem de alerta
    const [messageAlert, setMessageAlert] = useState("");

    // Estado para mensagem de sucesso
    const [successRegister, setSuccessRegister] = useState(false);


    const handleRegister = () => {
        if (inputValidationRegister(user, email, password, confirmPassword, setMessageAlert, setUserError, setEmailError, setPasswordError, setConfirmPasswordError, setModalVisible)) {
            setSuccessRegister(true);
            setTimeout(() => {
                linkTo('/Home');
                setModalVisible(false)
            }, 1500);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode='repeat' style={styles.backgroundImage}>
                <View style={styles.registerSection}>

                    <View style={styles.topSection}>
                        <View style={styles.userSection}>
                            <Icon name="user" size={110} color="#166CE2" />
                        </View>

                        <Text style={styles.title}>Cadastrar-se</Text>
                    </View>
                    <View style={styles.middleSection}>

                        {/* Campo de usuário */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, userError && styles.iconInputError]}>
                                <Icon name="user" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, userError && styles.inputError]}
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
                                style={[styles.input, emailError && styles.inputError]}
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
                                style={[styles.input, passwordError && styles.inputError]}
                                placeholder="Senha"
                                placeholderTextColor={'#C7C7C7'}
                                secureTextEntry={true} // Oculta o texto
                                value={password}
                                onChangeText={setPassword} // Atualiza o estado com o texto digitado
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        {/* Campo para confirmar Senha */}
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, confirmPasswordError && styles.iconInputError]}>
                                <Icon name="unlock-alt" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, confirmPasswordError && styles.inputError]}
                                placeholder="Confirmar Senha"
                                placeholderTextColor={'#C7C7C7'}
                                secureTextEntry={true} // Oculta o texto
                                value={confirmPassword}
                                onChangeText={setConfirmPassword} // Atualiza o estado com o texto digitado
                                underlineColorAndroid="transparent"
                            />
                        </View>

                    </View>

                    <View style={styles.bottomSection}>
                        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                            <Text style={styles.registerTextButton}>Registrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchLink} onPress={() => linkTo('/Login')}>
                            <Text style={styles.link}>Já possuí uma conta? Realize o seu Login!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >

            {/* Modal de alerta */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
            >
                <ModalAlertValidation messageAlert={messageAlert} successMessage={successRegister} handleClose={() => setModalVisible(false)} />
            </Modal>
        </View >


    );
}