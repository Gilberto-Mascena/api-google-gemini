import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

// Multer configuration to upload files to Windows
// On Windows, create a folder named "uploads" in the root of the project
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// Multer configuration to upload files to Windows
// const upload = multer({ dest: "uploads/", storage });

// Multer configuration to upload files to Linux or MacOS
const upload = multer({ dest: "uploads/" });

// Function to get all posts from the database
const routes = (app) => {
    // Parse JSON bodies (as sent by API clients)
    app.use(express.json());
    app.use(cors(corsOptions));
    // Parse URL-encoded bodies (as sent by HTML forms)
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost);
};

// Export the routes
export default routes;
