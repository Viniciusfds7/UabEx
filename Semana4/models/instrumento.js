import conexao from "../config/conexao.js";

const InstrumentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  fabricante: String,
  preco: Number,
  tipo: String
});

const Instrumento = conexao.model("Instrumento", InstrumentoSchema);

export default Instrumento;