export function inputValidationRegisterPlus(
    cpf,
    dataNascimento,
    telefone,
    cep,
    setMessageAlert,
    setCpfError,
    setDataNascError,
    setTelefoneError,
    setCepError,
    setModalVisible
) {
    let message = "";

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/; // Formatação para o CPF
    const dataNascimentoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/; // Formato DD/MM/AAAA
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/; // Formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    const cepRegex = /^\d{5}-\d{3}$|^\d{8}$/; // Formato 00000-000 ou 00000000

    // Verifica se todos os campos estão vazios
    if (cpf === '' && dataNascimento === '' && telefone === '' && cep === '') {
        message = 'Por favor, preencha todos os campos!';
        setCpfError(true);
        setDataNascError(true);
        setTelefoneError(true);
        setCepError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução aqui
    }

    // Validações para o campo de 'CPF'
    if (cpf === '') {
        setCpfError(true);
        message = 'O campo de CPF não pode ser vazio!';
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else if (!cpfRegex.test(cpf)) {
        message = 'O campo de CPF precisa estar em um formato válido (123.456.789-10)';
        setCpfError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else {
        setCpfError(false);
    }

    // Validações para o campo de 'Data de Nascimento'
    if (dataNascimento === '') {
        setDataNascError(true);
        message = 'O campo de data de nascimento não pode ser vazio!';
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else if (!dataNascimentoRegex.test(dataNascimento)) {
        message = 'O campo de data de nascimento precisa estar no formato DD/MM/AAAA!';
        setDataNascError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else {
        setDataNascError(false);
    }

    // Validações para o campo de 'Telefone'
    if (telefone === '') {
        setTelefoneError(true);
        message = 'O campo de telefone não pode ser vazio!';
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else if (!telefoneRegex.test(telefone)) {
        message = 'O campo de telefone precisa estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX!';
        setTelefoneError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else {
        setTelefoneError(false);
    }

    // Validações para o campo de 'Endereço'
    // Validações para o campo de 'CEP'
    if (cep === '') {
        setCepError(true);
        message = 'O campo de CEP não pode ser vazio!';
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else if (!cepRegex.test(cep)) {
        message = 'O campo de CEP precisa estar no formato 00000-000 ou 00000000!';
        setCepError(true);
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else {
        setCepError(false);
    }

    // Caso todas as validações passem
    message = 'Usuário cadastrado com sucesso!';
    setMessageAlert(message);
    setModalVisible(true);
    return true;
}
