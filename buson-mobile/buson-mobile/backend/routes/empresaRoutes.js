const express = require('express'); // Framework para criar a API para lidar com requisições do app e comunicar com o banco de dados
const { buscarEmpresas, adicionarFavoritos, removerFavoritos, buscarFavoritos, buscarEmpresaID, atualizarCodigoPagamento, buscarCodigoPagamento } = require('../controllers/empresaController'); // busca o método "criarUsuario" do controller
const router = express.Router(); // Cria um roteador para definir as rotas relacionadas a "Empresa"

// Define uma rota que escuta requisições POST no endpoint /empresas.
// Quando essa rota é acessada, a função buscarEmpresas é chamada.
router.get('/buscarEmpresas', buscarEmpresas);
router.post('/buscarEmpresaID', buscarEmpresaID);
router.post('/adicionarFavoritos', adicionarFavoritos);
router.post('/removerFavoritos', removerFavoritos);
router.post('/buscarFavoritos', buscarFavoritos);
router.put('/atualizarCodigoPagamento', atualizarCodigoPagamento);
router.post('/buscarCodigoPagamento', buscarCodigoPagamento);

module.exports = router;
// O roteador é exportado para ser usado no servidor principal (index.js).