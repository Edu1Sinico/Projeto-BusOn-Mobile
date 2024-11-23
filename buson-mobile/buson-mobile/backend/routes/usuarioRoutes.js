const express = require('express'); // Framework para criar a API para lidar com requisições do app e comunicar com o banco de dados
const { criarUsuario, completarUsuario, buscarUsuario } = require('../controllers/usuarioController'); // busca o método "criarUsuario" do controller
const router = express.Router(); // Cria um roteador para definir as rotas relacionadas a "Usuário"

// Define uma rota que escuta requisições POST no endpoint /usuarios.
// Quando essa rota é acessada, a função criarUsuario é chamada.
router.post('/criarUsuario', criarUsuario); 
router.post('/completarUsuario', completarUsuario );
router.get('/buscarUsuario', buscarUsuario);

module.exports = router; 
// O roteador é exportado para ser usado no servidor principal (index.js).