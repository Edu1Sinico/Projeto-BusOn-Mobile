const express = require('express');
const router = express.Router();
const { adicionarCartao, listarCartoes, atualizarCartao, deletarCartao, buscarSaldo, criarSaldo, adicionarSaldo, retirarSaldo } = require('../controllers/cashController');

router.post('/cartao', adicionarCartao); // Rota para adicionar um cartão
router.post('/cartoes', listarCartoes); // Rota para listar cartões de um usuário
router.put('/attcartao', atualizarCartao); // Rota para atualizar um cartão
router.post('/deletarcartao', deletarCartao); // Rota para deletar um cartão
router.post('/buscarSaldo', buscarSaldo);
router.post('/criarSaldo', criarSaldo);
router.put('/adicionarSaldo', adicionarSaldo);
router.put('/retirarSaldo', retirarSaldo);


module.exports = router;