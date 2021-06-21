import express from "express";

const app = express();

app.get("/hello", (request, response) => {
  return response.send("Hello World! [GET]");
});

app.post("/hello-post", (request, response) => {
  return response.send("Hello World! [POST]");
})

app.listen(3333, () => console.log("Estou rodando... 🥰"))