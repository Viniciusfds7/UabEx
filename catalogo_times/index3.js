import express from 'express';

const app = express();
const PORT = 3000;

// Configurar o EJS como motor de visualização (view engine)
app.set('view engine', 'ejs');

// Array com pelo menos três times conforme solicitado
const times = [
    { id: 1, nome: "Grêmio", estadio: "Arena do Grêmio", cidade: "Porto Alegre" },
    { id: 2, nome: "Internacional", estadio: "Beira-Rio", cidade: "Porto Alegre" },
    { id: 3, nome: "Juventude", estadio: "Alfredo Jaconi", cidade: "Caxias do Sul" }
];

// Rota GET /: Renderizar index.ejs com mensagem de boas-vindas
app.get('/', (req, res) => {
    res.render('index', { mensagem: 'Bem-vindo ao Catálogo de Times Esportivos!' });
});

// Rota GET /times: Renderizar times.ejs passando o array de times
app.get('/times', (req, res) => {
    res.render('times', { times });
});

// Rota GET /times/:id: Encontrar o time pelo ID e renderizar detalhe.ejs
app.get('/times/:id', (req, res) => {
    const timeId = parseInt(req.params.id); // Converte o parâmetro de texto para número
    const time = times.find(t => t.id === timeId);

    // Se o time não existir, exibe mensagem de não encontrado
    if (!time) {
        return res.status(404).send('Time não encontrado.');
    }

    res.render('detalhe', { time });
});

// Iniciar servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});