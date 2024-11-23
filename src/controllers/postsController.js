import { getTodosPosts, criarNovoPost } from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res) {

    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarNovoPost(novoPost);
        res.status(200).json(postCriado);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ "error": "Falha na requisição" });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descrição: " ",
        imgUrl: req.file.path,
        alt: " "
    }

    try {
        const postCriado = await criarNovoPost(novoPost);

        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`;
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({ "error": "Falha na requisição" });
    }
}
