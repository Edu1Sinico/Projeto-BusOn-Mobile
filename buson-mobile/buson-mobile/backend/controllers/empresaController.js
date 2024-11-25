const pool = require('../config/db');

const obterEmpresas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM empresa'); // Verifique a consulta no banco de dados
    res.status(200).json(result.rows); // Retorna os dados das empresas
  } catch (err) {
    console.error("Erro ao obter empresas:", err);
    res.status(500).send('Erro ao obter as empresas.');
  }
};

module.exports = { obterEmpresas };
