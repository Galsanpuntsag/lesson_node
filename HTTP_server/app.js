// const express = require("express");

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

// app.listen(8008, console.log("Server is litening at 8008 port"));

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

const app = express();

const users = [
  { id: 1, username: "Naraa", password: "password" },
  { id: 2, username: "Saraa", password: "password1" },
  { id: 3, username: "Haraa", password: "password2" },
  { id: 4, username: "Sharaa", password: "password3" },
];

app.get("/", (req, res) => {
  const content = fs.readFileSync("test.text", { encoding: "utf8" });
  const count = content.split("").length;
  res.send("Count-" + count);
});

app.get("/user/:userid", (req, res) => {
  const findUser = { name: "Oogii" };
  res.json(findUser);
});
