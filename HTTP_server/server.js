const http = require("http");
const port = 8008;

const server = http.createServer((req, res) => {
  console.log("REQ", req);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end("<h1>Hello first nodemon, succesfully</h1>");
});

server.listen(port, () => {
  console.log(`Server running at http:/localhost:${port}/`);
});
