const pool = require('../config/db'); // Conexão com o banco de dados

// Método para adicionar um novo cartão
const adicionarCartao = async (req, res) => {
    const { numero_cartao, data_vencimento, codigo_seguranca, id_usuario } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO cartao (numero_cartao, data_vencimento, codigo_seguranca, id_usuario) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [numero_cartao, data_vencimento, codigo_seguranca, id_usuario]
        );

        res.status(201).json(result.rows[0]); // Retorna o cartão criado
    } catch (err) {
        console.error('Erro ao adicionar cartão:', err);
        res.status(500).send('Erro ao adicionar cartão.');
    }
};

// Método para listar os cartões de um usuário
const listarCartoes = async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM cartao WHERE id_usuario = $1',
            [id_usuario]
        );

        res.status(200).json(result.rows); // Retorna os cartões do usuário
    } catch (err) {
        console.error('Erro ao listar cartões:', err);
        res.status(500).send('Erro ao listar cartões.');
    }
};

// Método para atualizar os dados de um cartão
const atualizarCartao = async (req, res) => {
    const { id_cartao, numero_cartao, data_vencimento, codigo_seguranca } = req.body;

    try {
        const result = await pool.query(
            `UPDATE cartao 
            SET numero_cartao = $1, data_vencimento = $2, codigo_seguranca = $3, updated_at = NOW()
            WHERE id = $4 RETURNING *`,
            [numero_cartao, data_vencimento, codigo_seguranca, id_cartao]
        );

        if (result.rows.length === 0) {
            return res.status(404).send('Cartão não encontrado.');
        }

        res.status(200).json(result.rows[0]); // Retorna o cartão atualizado
    } catch (err) {
        console.error('Erro ao atualizar cartão:', err);
        res.status(500).send('Erro ao atualizar cartão.');
    }
};

// Método para deletar um cartão
const deletarCartao = async (req, res) => {
    const { id_cartao } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM cartao WHERE id = $1 RETURNING *',
            [id_cartao]
        );

        if (result.rows.length === 0) {
            return res.status(404).send('Cartão não encontrado.');
        }

        res.status(200).send('Cartão deletado com sucesso.');
    } catch (err) {
        console.error('Erro ao deletar cartão:', err);
        res.status(500).send('Erro ao deletar cartão.');
    }
};

// Método para criar saldo
const criarSaldo = async (req, res) => {
    try {
        const { id_usuario } = req.body; // Extrai id_usuario como número do corpo da requisição

        if (!id_usuario || isNaN(Number(id_usuario))) {
            return res.status(400).send('O campo id_usuario é inválido ou ausente.');
        }

        const result = await pool.query(
            'INSERT INTO saldo (id_usuario) VALUES ($1) RETURNING *',
            [Number(id_usuario)] // Converte explicitamente para número
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao criar o saldo:', err);
        res.status(500).send('Erro ao criar o saldo: ' + err.message);
    }
};

// Método para criar saldo
const adicionarSaldo = async (req, res) => {
    try {
        const { valor, id_usuario } = req.body; // Extrai valores do corpo da requisição

        if (!id_usuario || isNaN(Number(id_usuario))) {
            return res.status(400).send('O campo id_usuario é inválido ou ausente.');
        }

        if (!valor || isNaN(Number(valor))) {
            return res.status(400).send('O campo valor é inválido ou ausente.');
        }

        const result = await pool.query(
            'UPDATE saldo SET valor = valor + $1 WHERE id_usuario = $2 RETURNING *',
            [Number(valor), Number(id_usuario)] // Passa valores como números
        );

        if (result.rows.length === 0) {
            return res.status(404).send('Usuário não encontrado ou saldo não atualizado.');
        }

        res.status(200).json(result.rows[0]); // Retorna o saldo atualizado
    } catch (err) {
        console.error('Erro ao adicionar o saldo:', err);
        res.status(500).send('Erro ao adicionar o saldo: ' + err.message);
    }
};

const retirarSaldo = async (req, res) => {
    try {
        const { valor, id_usuario } = req.body; // Extrai valores do corpo da requisição

        if (!id_usuario || isNaN(Number(id_usuario))) {
            return res.status(400).send('O campo id_usuario é inválido ou ausente.');
        }

        if (!valor || isNaN(Number(valor)) || Number(valor) <= 0) {
            return res.status(400).send('O campo valor é inválido ou ausente.');
        }

        // Verifica se há saldo suficiente
        const consultaSaldo = await pool.query(
            'SELECT valor FROM saldo WHERE id_usuario = $1',
            [Number(id_usuario)]
        );

        if (consultaSaldo.rows.length === 0) {
            return res.status(404).send('Usuário não encontrado.');
        }

        const saldoAtual = Number(consultaSaldo.rows[0].valor);

        if (saldoAtual < Number(valor)) {
            return res.status(400).send('Saldo insuficiente.');
        }

        // Subtrai o valor do saldo
        const result = await pool.query(
            'UPDATE saldo SET valor = valor = $1 WHERE id_usuario = $2 RETURNING *',
            [Number(valor), Number(id_usuario)]
        );

        res.status(200).json(result.rows[0]); // Retorna o saldo atualizado
    } catch (err) {
        console.error('Erro ao retirar saldo:', err);
        res.status(500).send('Erro ao retirar saldo: ' + err.message);
    }
};



// Método para buscar o saldo do usuário
const buscarSaldo = async (req, res) => {
    const { id_usuario } = req.body; // Extrai id_usuario do corpo da requisição

    if (!id_usuario || isNaN(Number(id_usuario))) {
        return res.status(400).send('O campo id_usuario é inválido ou ausente.');
    }

    try {
        const result = await pool.query(
            'SELECT valor FROM saldo WHERE id_usuario = $1',
            [Number(id_usuario)] // Converte explicitamente para número
        );

        if (result.rows.length === 0) {
            return res.status(404).send('Saldo não encontrado para o ID fornecido.');
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao buscar o saldo:', err);
        res.status(500).send('Erro ao buscar o saldo: ' + err.message);
    }
};




module.exports = { adicionarCartao, listarCartoes, atualizarCartao, deletarCartao, buscarSaldo, criarSaldo, adicionarSaldo, retirarSaldo };