export function inputValidationCard(
    cardNumber,
    expiryDate,
    securityCode,
    setMessageAlert,
    setCardNumberError,
    setExpiryDateError,
    setSecurityCodeError,
    setSuccessMessage,
    setModalVisible
) {
    let message = "";

    // Regex para validar o formato MM/AAAA
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;

    // Verificar campos vazios
    if (!cardNumber || !expiryDate || !securityCode) {
        if (!cardNumber) setCardNumberError(true);
        if (!expiryDate) setExpiryDateError(true);
        if (!securityCode) setSecurityCodeError(true);

        setSuccessMessage(false);
        message = "Por favor, preencha todos os campos!";
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução
    }

    // Limpar estados de erro após validação de campos vazios
    setCardNumberError(false);
    setExpiryDateError(false);
    setSecurityCodeError(false);

    // Validação do Número do Cartão
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        setCardNumberError(true);
        setSuccessMessage(false);
        message = "O número do cartão deve conter exatamente 16 dígitos numéricos!";
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução
    }

    // Validação da Data de Vencimento
    if (!expiryDateRegex.test(expiryDate)) {
        setExpiryDateError(true);
        setSuccessMessage(false);
        message = "A data de vencimento deve estar no formato MM/AAAA!";
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução
    } else {
        const [month, year] = expiryDate.split("/").map(Number);
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Meses de 0 a 11
        const currentYear = currentDate.getFullYear();

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            setExpiryDateError(true);
            setSuccessMessage(false);
            message = "A data de vencimento não pode ser no passado!";
            setMessageAlert(message);
            setModalVisible(true);
            return false; // Interrompe a execução
        }
    }

    // Validação do Código de Segurança
    if (securityCode.length !== 3 || isNaN(securityCode)) {
        setSecurityCodeError(true);
        setSuccessMessage(false);
        message = "O código de segurança deve conter exatamente 3 dígitos numéricos!";
        setMessageAlert(message);
        setModalVisible(true);
        return false; // Interrompe a execução
    }

    // Se todos os campos forem válidos
    message = "Cartão cadastrado com sucesso!";
    setMessageAlert(message);
    setSuccessMessage(true);
    setModalVisible(true);
    return true;
}
