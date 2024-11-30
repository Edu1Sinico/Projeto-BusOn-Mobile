const BASE_URL = 'http://localhost:3000/api';

export const autenticarUsuario = async (user, email, password, setMessageAlert, setModalVisible) => {
    try {
        const response = await fetch(`${BASE_URL}/autenticarUsuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: user,
                email: email,
                senha: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data.id_usuario; // Retorna o ID do usuário autenticado
        } else {
            setMessageAlert('Credenciais inválidas, tente novamente.');
            setModalVisible(true);
            return null;
        }
    } catch (err) {
        console.error('Erro ao realizar login:', err);
        setMessageAlert('Erro ao conectar ao servidor.');
        setModalVisible(true);
        return null;
    }
};

export const handleLogin = async (
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
) => {
    const { inputValidationLogin } = await import('@/app/scripts/login_register/validationLogin');

    if (inputValidationLogin(user, email, password, setMessageAlert, setUserError, setEmailError, setPasswordError, setModalVisible)) {
        const id = await autenticarUsuario(user, email, password, setMessageAlert, setModalVisible);
        console.log('ID recebido: ' + id);

        if (id) {
            setSuccessLogin(true);
            setTimeout(() => {
                linkTo(`/MainHome?id=${id}`);
                setModalVisible(false);
            }, 2000);
        }
    }
};
