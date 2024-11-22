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
const completarCadastro = async (req, res) => {
    const { cpf, data_nascimento, telefone, endereco } = req.body;

    try {
        const result = await pool.query(
            'UPDATE usuario SET cpf=$1, data_nascimento=$2, telefone=$3, endereco=$4 WHERE id=$5 RETURNING *',
            [cpf, data_nascimento, telefone, endereco, req.params.id]
        );
        // Se a resposta for bem-sucedida, retorna o novo usuário
        res.status(201).json(result.rows[0]);
    } catch (err) {
        // Em caso de erro, exibe o erro no console e retorna um status 500 com uma mensagem de erro.
        console.error(err);
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


module.exports = { criarUsuario, completarCadastro, buscarUsuario }; // Exporta a função para ser usada nas rotas.
