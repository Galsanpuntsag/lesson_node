// const express = require("express");
// const port = 8008;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello FROM express server");
// });

// app.get("/about", (req, res) => {
//   //   res.status(200).send("Hello  FROM about express server");
//   res.status(200).json({
//     name: "Naraa",
//     age: 21,
//     isverfied: true,
//     score: [100, 102],
//     addres: { no: 100 },
//   });
// });

// app.listen(port, console.log(`Server running at http:/localhost:${port}`));

// textiin urtiig olloo

// const express = require("express");
// const fs = require("fs");
// const app = express();

// app.get("/wordcount", (req, res) => {
//   const content = fs.readFileSync("test.txt", { enconding: "utf8" });
//   const count = content.split("").length;
//   res.send(Count + count);
// });

// app.get("word", (req, res) => {
//   //   res.status(200).send("Hello  FROM about express server");
//   res.status(200).json({
//     name: "Naraa",
//     age: 21,
//     isverfied: true,
//     score: [100, 102],
//     addres: { no: 100 },
//   });
// });

// app.listen(8008, console.log("Server is litening at 8008 port"));

// get and post ashigllaa

const express = require("express");
const fs = require("fs");
const port = 8008;

const app = express();

app.use(express.json()); //middleware

const users = [
  { id: 1, username: "Naraa", password: "password" },
  { id: 2, username: "Saraa", password: "password1" },
  { id: 3, username: "Haraa", password: "password2" },
  { id: 4, username: "Sharaa", password: "password3" },
];

app.get("/wordCount", (req, res) => {
  const content = fs.readFileSync("test.txt", { encoding: "utf-8" });
  const count = content.split("").length;

  res.send("Count - " + count);
});

app.get("/user/:userid", (req, res) => {
  const { iserId } = req.params;
  console.log("Query", req.params);
  console.log("UI", userId);
  const findUser = users.filter((user, i) => user.id === Number(userId));
  console.log("FINDuser", findUser);

  if (findUser.lenght === 0) {
    res.status(404).json({ message: "Not Found" });
  } else {
    res.status(200).json({ messages: "User is found", user: findUser[0] });
  }
});

app.listen(port, () => console.log(`Server running at http:localhost:${port}`));
