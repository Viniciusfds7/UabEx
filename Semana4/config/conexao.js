import mongoose from "mongoose";

const url = "mongodb+srv://20251PL.TSIAD0024:219421@ifsul.fify4.mongodb.net/?appName=IFSUL";
const conexao = await mongoose.connect(url);

export default conexao;