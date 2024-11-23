const { Pool } = require('pg'); // Biblioteca para integrar com o Postgres
const dotenv = require('dotenv'); // Para configurar as variáveis de ambiente

dotenv.config(); // Configurando às variáveis de ambiente
console.log(process.env)

// Puxa as informações do banco de dados
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


// Estabelece uma conexão e exibe se for bem sucedida
pool.on('connect', () => {
    console.log('Conexão com o banco de dados estabelecida!');
});

// Exporta a conexão
module.exports = pool;
