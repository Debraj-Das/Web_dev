function input() {
  const fs = require("fs");
  return fs.readFileSync("Input.txt", "utf-8");
}
main();

function main() {
  for (var i = 0; i < 10; i++) console.log(Math.floor(Math.random() * 1000));
  
}
