const express = require('express');
const router = express.Router();
const { adicionarCartao, listarCartoes, atualizarCartao, deletarCartao } = require('../controllers/cashController');

router.post('/cartao', adicionarCartao); // Rota para adicionar um cartão
router.get('/cartoes/:id_usuario', listarCartoes); // Rota para listar cartões de um usuário
router.put('/cartao', atualizarCartao); // Rota para atualizar um cartão
router.delete('/cartao/:id_cartao', deletarCartao); // Rota para deletar um cartão

module.exports = router;
