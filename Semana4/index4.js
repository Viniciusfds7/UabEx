import express from 'express';
import Instrumento from './models/Instrumento.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rota GET para exibir o formulário de cadastro[cite: 8]
app.get('/instrumento/add', (req, res) => {
  res.render('instrumento/add');
});

// Rota POST para receber e gravar os dados no MongoDB[cite: 8]
app.post('/instrumento/add/ok', async (req, res) => {
  try {
    const { nome, fabricante, preco, tipo } = req.body;
    await Instrumento.create({ nome, fabricante, preco, tipo });
    res.render("instrumento/addok", { nome });
  } catch (error) {
    console.error("Erro ao gravar instrumento:", error.message);
    res.send("Erro ao cadastrar o instrumento. Verifique os dados.");
  }
});

// Rota GET para consultar e listar os instrumentos cadastrados[cite: 7, 8]
app.get('/instrumento/lst', async (req, res) => {
  try {
    const instrumentos = await Instrumento.find();
    res.render("instrumento/lst", { instrumentos });
  } catch (error) {
    console.error("Erro ao buscar instrumentos:", error.message);
    res.render("instrumento/lst", { instrumentos: [] });
  }
});

// COMANDO OBRIGATÓRIO PARA MANTER O SERVIDOR LIGADO (Apenas uma chamada no final do arquivo)
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});