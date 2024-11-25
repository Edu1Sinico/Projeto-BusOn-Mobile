const express = require('express');
const { obterEmpresas } = require('../controllers/empresaController');
const router = express.Router();

// Definição da rota GET para listar as empresas
router.get('/obterEmpresas', obterEmpresas);

module.exports = router;
