const express = require("express");
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");

const port = 8008;

const app = express();

app.use(express.json());

//<Get start>

// app.get("/api/users", (req, res) => {
//   console.log("Get all users");
//   res.status(200).json({ message: "Succes GET method" });
// });

//<Get end/>
//<Post start>

app.post("/api/users", (req, res) => {
  console.log("Create new user");
  const newUser = { id: uuidv4(), ...req.body };

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  ); // {users: []}

  users.push(newUser);

  fs.writeFileSync("./users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(201).json({ message: "success" });
});

//<Post end/>
//<Delete start>

app.delete("/api/users/:id", (req, res) => {
  res.status(200).json({ message: "Succes DELETE method" });
});

//<Delete end/>

app.put("/api/users/:id", (req, res) => {
  res.status(200).json({ message: "Succes PUT method" }); //{users; []}
});

app.listen(port, () => console.log(`Server running at http:localhost:${port}`));
