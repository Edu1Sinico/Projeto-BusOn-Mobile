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

// const { Pool } = require('pg'); // Biblioteca para integrar com o Postgres
// const dotenv = require('dotenv'); // Para configurar as variáveis de ambiente

// dotenv.config(); // Configurando as variáveis de ambiente

// // Puxa as informações do banco de dados
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false, // Necessário para conexões seguras (SSL) no Render
//     },
// });

// // Estabelece uma conexão e exibe se for bem sucedida
// pool.on('connect', () => {
//     console.log('Conexão com o banco de dados estabelecida!');
// });

// // Gerencia erros de conexão
// pool.on('error', (err) => {
//     console.error('Erro inesperado no banco de dados:', err);
//     process.exit(-1);
// });

// // Exporta a conexão
// module.exports = pool;
