import React, { useState } from 'react';
import { View, Text, Modal, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import styles from '@/app/styles/login_register/LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ModalAlertValidation } from '@/components/modal/ModalAlertValidation';
import { handleLogin } from '@/app/scripts/login_register/loginConnection';

const background = require("@/assets/images/background/bus_background.png");

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const linkTo = useLinkTo();

    const [userError, setUserError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [successLogin, setSuccessLogin] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="repeat" style={styles.backgroundImage}>
                <View style={styles.loginSection}>
                    <View style={styles.topSection}>
                        <View style={styles.userSection}>
                            <Icon name="user" size={110} color="#0AC86C" />
                        </View>
                        <Text style={styles.title}>Login</Text>
                    </View>

                    <View style={styles.middleSection}>
                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, userError && styles.iconInputError]}>
                                <Icon name="user" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, userError && styles.inputError]}
                                placeholder="Usuário"
                                placeholderTextColor="#C7C7C7"
                                value={user}
                                onChangeText={setUser}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, emailError && styles.iconInputError]}>
                                <Icon name="at" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, emailError && styles.inputError]}
                                placeholder="E-mail"
                                placeholderTextColor="#C7C7C7"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View style={styles.inputSection}>
                            <View style={[styles.iconInputSection, passwordError && styles.iconInputError]}>
                                <Icon name="lock" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={[styles.input, passwordError && styles.inputError]}
                                placeholder="Senha"
                                placeholderTextColor="#C7C7C7"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <TouchableOpacity style={styles.touchLink}>
                            <Text style={styles.link}>Esqueceu a senha? Clique aqui!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomSection}>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() =>
                                handleLogin(
                                    user,
                                    email,
                                    password,
                                    linkTo,
                                    setMessageAlert,
                                    setUserError,
                                    setEmailError,
                                    setPasswordError,
                                    setModalVisible,
                                    setSuccessLogin
                                )
                            }
                        >
                            <Text style={styles.loginTextButton}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchLink} onPress={() => linkTo('/Register')}>
                            <Text style={styles.link}>Não possuí uma conta? Registra-se!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <Modal animationType="fade" transparent visible={modalVisible}>
                <ModalAlertValidation
                    messageAlert={messageAlert}
                    successMessage={successLogin}
                    handleClose={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
}
