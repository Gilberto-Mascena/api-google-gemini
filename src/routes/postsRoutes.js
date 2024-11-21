import express from "express";
import { listarPosts } from "../controller/postsController.js";

// Function to get all posts from the database
const routes = (app) => {

    // Parse JSON bodies (as sent by API clients)
    app.use(express.json());
    // Parse URL-encoded bodies (as sent by HTML forms)
    app.get("/posts", listarPosts);
};

// Export the routes
export default routes;
     