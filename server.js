import express from "express";

const posts = [
  {
    id: 0, descrição: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 1, descrição: "Gato fofo tomando sol",
    imagem: "https://placekitten.com/400/300"
  },
  {
    id: 2, descrição: "Cachorro brincando no parque",
    imagem: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 3, descrição: "Paisagem marítima incrível",
    imagem: "https://loremflickr.com/320/240/sea"
  },
  {
    id: 4, descrição: "Comida deliciosa e colorida",
    imagem: "https://source.unsplash.com/random/300x200/?food"
  },
  {
    id: 5, descrição: "Montanha nevada com vista espetacular",
    imagem: "https://unsplash.com/photos/2c41144153e861e75a1b79d04d167e9c"
  }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});