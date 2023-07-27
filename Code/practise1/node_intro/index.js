//jshint esversion:6

// console.log('Hello World');
// console.log("nice to meet all of you");
// console.log("I'm a new programmer");

// const fs = require("fs");   // fs = file system and import the fs module

// file = fs.readFileSync("input.txt", "utf8"); // read the file

// console.log(file);

// fs.copyFileSync("input.txt", "output.txt"); // copy file

// fs.renameSync("output.txt", "newOutput.txt"); // rename file

// fs.rmSync("newOutput.txt"); // remove file

const superhereos = require("superheroes"); // import superheroes module
const supervillains = require("supervillains"); // import supervillains module

for (var i = 0; i < 10; i++)
  console.log(i + 1, ") ","Hero: ", superhereos.random(),"\n\tsupervillan: ", supervillains.random()); // print random superhero name
