import conectarAoBanco from "../config/dbConfig.js";

const conecxao = await conectarAoBanco(process.env.STRING_CONNECTION);

export async function getTodosPosts() {
    const db = conecxao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
};

export async function criarNovoPost(novoPost) {
    const db = conecxao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}