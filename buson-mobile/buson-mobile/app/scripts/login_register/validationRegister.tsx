export function inputValidationRegister(user, email, password, confirmPassword, setMessageAlert, setUserError, setEmailError, setPasswordError, setConfirmPasswordError, setModalVisible) {
    let message = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //Formatação para o Email

    // Verifica se todos os campos estão vazios
    if (user === '' && email === '' && password === '' && confirmPassword === '') {
        // Insere a mensagem de validação
        message = 'Por favor, preencha todos os campos!';
        setUserError(true);
        setEmailError(true);
        setPasswordError(true);
        setConfirmPasswordError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    }

    // Validações para o campo de 'Usuário'
    if (user === '') {
        setUserError(true);
        message = 'O campo de usuário não pode ser vazio!';
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    } else {
        setUserError(false);
    }

    // Validação para Email
    if (email === '') {
        message = 'O campo de e-mail não pode ser vazio!';
        setEmailError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    } else if (!emailRegex.test(email) || !email.endsWith('.com')) {
        message = 'O campo de e-mail precisa estar em um formato válido (exemplo@dominio.com)';
        setEmailError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    } else {
        setEmailError(false);
    }

    // Validação do Campo de senha
    if (password === '') {
        message = 'O campo de senha não pode ser vazio!';
        setPasswordError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    } else if (password.length < 8) {
        message = 'O campo de senha precisar ser maior que 8 caracteres!';
        setPasswordError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    } else if (password !== confirmPassword) {
        message = 'O campo de "senha" e "confirmar senha" precisam ser iguais!';
        setPasswordError(true);
        setConfirmPasswordError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    } else {
        setPasswordError(false);
        setConfirmPasswordError(false);
    }

    message = 'Usuário cadastrado com sucesso!';
    setMessageAlert(message);
    setModalVisible(true);
    return true; // Se todas as validações passarem
};