import 'dotenv/config';
import { ObjectId } from "mongodb";
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

export async function atualizarPost(id, novoPost) {
    const db = conecxao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objId) }, { $set: novoPost });
}