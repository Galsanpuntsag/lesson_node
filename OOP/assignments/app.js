const repeat = require("repeat");

//==================
console.log("Stars to read of file");
//==================

const data = repeat.readFileSync("test.txt", { enconding: "utf8" });
const repeatword = data.filter;

//==
console.log("RWord", repeatword);
//==
//==================
console.log("End to read of file");
//==================
