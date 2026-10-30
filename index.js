const express = require("express");
const app = express();
const PORT = 3030; // porta 3030 

// 1. Página inicial – Rota /
app.get("/", (req, res) => {
    res.send(`
        <h1>Catálogo de Heróis</h1>
        <p>Bem-vindo ao sistema de gerenciamento de heróis dos quadrinhos!</p>
        <hr>
        <h2>Universos</h2>
        <ul>
            <li><a href="/marvel">Ir para o Universo Marvel</a></li>
            <li><a href="/dc">Ir para o Universo DC</a></li>
        </ul>
        <h2>Personagens em Destaque</h2>
        <ul>
            <li><a href="/personagem/marvel/Thor">Thor (Marvel)</a></li>
            <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro (Marvel)</a></li>
            <li><a href="/personagem/dc/Batman">Batman (DC)</a></li>
            <li><a href="/personagem/dc/Superman">Superman (DC)</a></li>
        </ul>
    `);
});

// 2. Rotas das empresas
app.get("/marvel", (req, res) => {
    res.send(`
        <h1>Marvel Comics</h1>
        <p>A Marvel é uma editora americana de quadrinhos conhecida por criar heróis icônicos e humanos com grandes dilemas.</p>
        <h2>Personagens da Marvel:</h2>
        <ul>
            <li><a href="/personagem/marvel/Thor">Thor</a></li>
            <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro</a></li>
        </ul>
        <br>
        <a href="/">Voltar à Página Inicial</a>
    `);
});

app.get("/dc", (req, res) => {
    res.send(`
        <h1>DC Comics</h1>
        <p>A DC Comics é uma das maiores editoras de quadrinhos do mundo, famosa por criar lendas divinas e justiceiros urbanos.</p>
        <h2>Personagens da DC:</h2>
        <ul>
            <li><a href="/personagem/dc/Batman">Batman</a></li>
            <li><a href="/personagem/dc/Superman">Superman</a></li>
        </ul>
        <br>
        <a href="/">Voltar à Página Inicial</a>
    `);
});

// 3. Rota com dois parâmetros (nome empresa e personagem)  referência req.params
app.get("/personagem/:empresa/:nome", (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <h1>Detalhes do Personagem</h1>
        <p><strong>Empresa:</strong> ${empresa.toUpperCase()}</p>
        <p><strong>Nome do Personagem:</strong> ${nome}</p>
        <hr>
        <a href="/">Voltar à Página Inicial</a>
    `);
});

// Isso aqui é o que inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});