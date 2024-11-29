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

module.exports = { adicionarCartao, listarCartoes, atualizarCartao, deletarCartao };
