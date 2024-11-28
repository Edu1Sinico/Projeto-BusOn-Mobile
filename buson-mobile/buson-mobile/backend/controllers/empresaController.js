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

const adicionarFavoritos = async (req, res) => {
    
};

module.exports = { buscarEmpresas }; // Exporta a função para ser usada nas rotas.
