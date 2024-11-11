export function inputValidationLogin(user, email, password, setMessageAlert, setUserError, setEmailError, setPasswordError, setModalVisible) {
    let message = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //Formatação para o Email

    // Verifica se todos os campos estão vazios
    if (!(user === '' && email === '' && password === '')) {

        // Validações para o campo de 'Usuário'
        if (user === '') {
            setUserError(true);
            message = 'O campo de usuário não pode ser vazio!';
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else {
            setUserError(false);
        }

        // Validação para Email
        if (email === '') {
            message = 'O campo de e-mail não pode ser vazio!';
            setEmailError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else if (!emailRegex.test(email) || !email.endsWith('.com')) {
            message = 'O campo de e-mail precisa estar em um formato válido (exemplo@dominio.com)';
            setEmailError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else {
            setEmailError(false);
        }

        // Validação do Campo de senha
        if (password === '') {
            message = 'O campo de senha não pode ser vazio!';
            setPasswordError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else if (password.length < 8) {
            message = 'O campo de senha precisar ser maior que 8 caracteres!';
            setPasswordError(true);
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução aqui
        }
        else {
            setPasswordError(false);
        }

    }
    else {
        // Se todos os campos estiverem vazios
        message = 'Por favor, preenche todos os campos!';
        setUserError(true);
        setEmailError(true);
        setPasswordError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    }

    message = 'Login efetuado com sucesso!';
    setMessageAlert(message);
    setModalVisible(true);
    return true; // Se todas as validações passarem
}

