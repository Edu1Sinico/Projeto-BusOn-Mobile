const express = require('express');
const router = express.Router();
const { adicionarCartao, listarCartoes, atualizarCartao, deletarCartao } = require('../controllers/cashController');

router.post('/cartao', adicionarCartao); // Rota para adicionar um cartão
router.post('/cartoes', listarCartoes); // Rota para listar cartões de um usuário
router.put('/attcartao', atualizarCartao); // Rota para atualizar um cartão
router.delete('/deletarcartao/:id_cartao', deletarCartao); // Rota para deletar um cartão

module.exports = router;