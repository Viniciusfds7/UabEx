
const express = require("express")
const app = express()
const PORT = 3000

//cada um é uma rota
app.get("/", (req,res)=>{
    res.send("oi node.<br>Para navegar entre os universos escolha.<br>Digite '/marvel' para viajar no universo da MARVEL.<br> ou digite '/dc' para navegar no universo da DC.")

})

app.get("/marvel", (req,res)=>{
    res.send("Este é o universo de heróis da Marvel.")

})

app.get("/dc", (req,res)=>{
    res.send("Este é o universo de heróis da DC.")

})


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

console.log("oi node")