export function inputValidationRegisterPlus(
    cpf,
    dataNascimento,
    telefone,
    endereco,
    setMessageAlert,
    setCpfError,
    setDataNascError,
    setTelefoneError,
    setEnderecoError,
    setModalVisible
) {
    let message = "";

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/; // Formatação para o CPF
    const dataNascimentoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/; // Formato DD/MM/AAAA
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/; // Formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX

    // Verifica se todos os campos estão vazios
    if (cpf === '' && dataNascimento === '' && telefone === '' && endereco === '') {
        message = 'Por favor, preencha todos os campos!';
        setCpfError(true);
        setDataNascError(true);
        setTelefoneError(true);
        setEnderecoError(true);
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
    if (endereco === '') {
        setEnderecoError(true);
        message = 'O campo de endereço não pode ser vazio!';
        setMessageAlert(message);
        setModalVisible(true);
        return false;
    } else {
        setEnderecoError(false);
    }

    // Caso todas as validações passem
    message = 'Usuário cadastrado com sucesso!';
    setMessageAlert(message);
    setModalVisible(true);
    return true;
}
