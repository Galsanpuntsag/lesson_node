const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { stringify } = require("querystring");

const port = 8008;

const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json({ message: "Succes GET method" });
});

app.post("/api/users", (req, res) => {
  console.log("REQ", req.body);

  console.log("Create New User");
  const newUser = { id: uuidv4(), ...req.body };

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { enconding: "utf-8" })
  );

  users.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    enconding: "utf-8",
  });
  res.status(201).json({ message: "Succes POST method" });
});
//============
app.put("/api/users/:id", (req, res) => {
  res.status(200).json({ message: "Succes PUT method" }); //{users; []}
});
app.delete("/api/users/:id", (req, res) => {
  res.status(200).json({ message: "Succes DELETE method" });
});

app.listen(port, () => console.log(`Server running at http:localhost:${port}`));
