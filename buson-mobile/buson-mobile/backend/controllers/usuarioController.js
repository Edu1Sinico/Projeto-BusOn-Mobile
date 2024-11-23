const pool = require('../config/db'); // Estabele conexão com o banco de dados

// Método de criação do usuário
// Recebe os dados enviados no corpo da requisição HTTP (req.body) - nome, email e senha
const criarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try { // Utiliza do método query() para adicionar os valores do banco de dados
        const result = await pool.query(
            'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        // Se a resposta for bem-sucedida, retorna o novo usuário
        res.status(201).json(result.rows[0]);
    } catch (err) {
        // Em caso de erro, exibe o erro no console e retorna um status 500 com uma mensagem de erro.
        console.error(err);
        res.status(500).send('Erro ao criar usuário.');
    }

};

//Método de completar cadastro 
const completarUsuario = async (req, res) => {
    const { cpf, data_nascimento, telefone, endereco, tipo_usuario, id_usuario } = req.body;

    if (!id_usuario) {
        return res.status(400).send('ID do usuário é obrigatório.');
    }

    try {
        const result = await pool.query(
            'UPDATE usuario SET cpf=$1, data_nascimento=$2, telefone=$3, endereco=$4, tipo_usuario=$5 WHERE id_usuario=$6 RETURNING *',
            [cpf, data_nascimento, telefone, endereco, tipo_usuario, id_usuario]
        );

        if (result.rows.length === 0) {
            return res.status(404).send('Usuário não encontrado.');
        }

        // Retorna o usuário atualizado
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao completar cadastro:', err);
        res.status(500).send('Erro ao completar cadastro.');
    }
};

// Método de buscar um usuário pelo ID
const buscarUsuario = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM usuario WHERE id=$1',
            [req.params.id]
        );
        // Se a resposta for bem-sucedida, retorna o usuário
        res.json(result.rows[0]);
    } catch (err) {
        // Em caso de erro, exibe o erro no console e retorna um status 500 com uma mensagem de erro.
        console.error(err);
        res.status(500).send('Erro ao buscar usuário.');
    }
};

// Método para autenticar o usuário
const autenticarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).send('Usuário, email e senha são obrigatórios.');
    }

    try {
        const result = await pool.query(
            'SELECT * FROM usuario WHERE nome=$1 AND email=$2 AND senha=$3',
            [nome, email, senha]
        );

        if (result.rows.length === 0) {
            return res.status(401).send('Credenciais inválidas.');
        }

        // Retorna os dados do usuário (pode-se adicionar um token JWT aqui)
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao autenticar usuário:', err);
        res.status(500).send('Erro ao autenticar usuário.');
    }
};



module.exports = { criarUsuario, completarUsuario, buscarUsuario, autenticarUsuario }; // Exporta a função para ser usada nas rotas.
