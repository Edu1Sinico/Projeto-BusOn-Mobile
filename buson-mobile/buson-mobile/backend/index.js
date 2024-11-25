// Configuração do servidor principal 
const express = require('express'); // API que interliga o React Native com o Backend
const bodyParser = require('body-parser'); // Lida com JSON nas requisições.
const cors = require('cors'); // Permite que seu frontend se comunique com o backend.
const usuarioRoutes = require('./routes/usuarioRoutes');
const empresaRoutes = require('./routes/empresaRoutes');

const app = express(); // Cria uma instância do servidor Express.
// Define a porta onde o servidor vai rodar (PORT), utilizando uma variável de ambiente ou a porta 3000 como padrão.
const PORT = process.env.PORT || 3000;

app.use(cors()); // Permite que o frontend se comunique com o backend.
app.use(bodyParser.json()); //  Lê dados JSON no corpo das requisições.

// Rotas
app.use('/api', usuarioRoutes); // Todas as rotas relacionadas ao "Usuário" estarão disponíveis no endpoint /api/usuarios.
app.use('/api',empresaRoutes);

// O servidor começa a escutar na porta especificada e exibe uma mensagem no console.
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
