import express from "express"
const app = express()

// Configura o EJS como motor de views
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views");

const PORT = 3000


//código Node - com as rotas e tudo mais
//cada um é uma rota
app.get("/", (req,res)=>{
    const nome = "Vinícius"
    res.render("index3", {nome})
})

app.get("/brinquedo", (req,res)=>{
    const brinquedos = ["IOIO", "Boneco", "PS5", "Carrinho"]
    res.render("brinquedo", {brinquedos})
})


// Isso aqui é o que inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});