const pool = require('../config/db'); // Estabele conexão com o banco de dados

// Método de buscar empresas
const buscarEmpresas = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM empresa'); // Busca todos os registros
        res.json(result.rows); // Retorna todos os registros como um array
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar as empresas.');
    }
};

const buscarEmpresaID = async (req, res) => {
    const { id_empresas } = req.body; // Recebe um array de IDs
    if (!Array.isArray(id_empresas)) {
        return res.status(400).send('id_empresas deve ser um array.');
    }

    try {
        const result = await pool.query(
            'SELECT * FROM empresa WHERE id_empresa = ANY($1)',
            [id_empresas]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar as empresas específicas.');
    }
};

// Método para adicionar aos favoritos
const adicionarFavoritos = async (req, res) => {
    const { id_usuario, id_empresa } = req.body;

    try {
        const result = await pool.query('INSERT INTO favoritos (id_usuario, id_empresa) VALUES ($1, $2) RETURNING *',
            [id_usuario, id_empresa]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar os favoritos');
    }
};

const removerFavoritos = async (req, res) => {
    const { id_usuario, id_empresa } = req.body;

    try {
        // Verifica se o favorito existe antes de tentar remover
        const exists = await pool.query(
            'SELECT * FROM favoritos WHERE id_usuario = $1 AND id_empresa = $2',
            [id_usuario, id_empresa]
        );

        if (exists.rows.length === 0) {
            return res.status(404).send('Favorito não encontrado.');
        }

        // Remove o favorito da tabela
        await pool.query(
            'DELETE FROM favoritos WHERE id_usuario = $1 AND id_empresa = $2',
            [id_usuario, id_empresa]
        );

        res.status(200).send('Favorito removido com sucesso.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao remover o favorito.');
    }
};


// Método para listar todos os favoritos do usuário
const buscarFavoritos = async (req, res) => {
    const { id_usuario } = req.body;
    try {
        const result = await pool.query(
            'SELECT id_empresa FROM favoritos WHERE id_usuario=$1',
            [id_usuario]
        );
        res.json(result.rows.map(row => row.id_empresa)); // Retorna um array com os IDs das empresas
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar os favoritos do usuário.');
    }
};

// Método para atualizar o código de pagamento da empresa
const atualizarCodigoPagamento = async (req, res) => {
    const { id_empresa, codigo_pagamento } = req.body;

    try {
        const result = await pool.query(
            'UPDATE empresa SET codigo_pagamento = $1 WHERE id_empresa = $2',
            [codigo_pagamento, id_empresa]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar o código de pagamento: ' + err);
    }
};

// Método para buscar código de pagamento da empresa
const buscarCodigoPagamento = async (req, res) => {
    const { id_empresas } = req.body; // Recebe um array de IDs

    try {
        const result = await pool.query(
            'SELECT codigo_pagamento FROM empresa WHERE id_empresa = $1',
            [id_empresas]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar o código de pagamento: ' + err);
    }
};

module.exports = { buscarEmpresas, buscarEmpresaID, adicionarFavoritos, removerFavoritos, buscarFavoritos, atualizarCodigoPagamento, buscarCodigoPagamento }; // Exporta a função para ser usada nas rotas.
