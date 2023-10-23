// built in

const fs = require("fs");
// this is file system

// console.log("START of file read");

// fs.readFile("test.txt", { enconding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log(`Error: ${err}`);
//     return;
//   }
//   console.log("Data: ", data);
// });

// console.log("End of file read");

// console.log("START of file read");

// const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
// console.log("Data: ", data);

// console.log("End of file read");

//fs.writeFile
// 1.filiin zamiig awna.
//2. datgaa ugnu: string baij bolno callback
// appendfile ni umnu baisan utga deeer nemje bichne.
// harin write file ni ugsun utgiig shuud shineer awch, umnuh utgiig ustgadag.

// fs.writeFile("test.txt", "hello Pinecone FS Writer". (err) => {
//     if{}
// })

console.log("START of file read");

const data = fs.readFileSync("test.txt", { enconding: "utf8" });
console.log("niit usgiin too: ", data.length);

const parsedData = data.split;
console.log("Data: ", data);
console.log("Word", data.length);
