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

app.delete("/api/users/:userId", (req, res) => {
  console.log("Deltete user by ID");

  const { userId } = req.params;

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  ); // {users: []}

  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй` });
  } else {
    users.splice(index, 1);
    fs.writeFileSync("./users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });

    res.status(200).json({ message: `${userId} тай хэрэглэгч устгалаа` });
  }
});

//<Delete end/>

//<Put>

app.put("/api/users/:userId", (req, res) => {
  console.log("Update user by ID");

  const { userId } = req.params;

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );

  const index = users.findIndex((el) => el === el.key);
  if (index === index) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч хадаглагдсан` });
  } else {
    users.map(index, 1);
    fs.writeFileSync("./users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });

    res.status(200).json({ message: `${userId} тай хэрэглэгч шинчлэгдлээ.` });
  }
});

//<Put>

app.listen(port, () => console.log(`Server running at http:localhost:${port}`));
