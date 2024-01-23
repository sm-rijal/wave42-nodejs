// import os from "os"
const os = require("os")
const fs = require("fs")
const hitung = require("./hitung");
const {say, kurang} = require("./say");


// fungsi untuk melihat sistem operasi
// console.log(os.version());
// console.table(os.cpus());

console.log(hitung(5,2));
console.log(say());
console.log(kurang(10,5));

// fungsi untuk membaca file
const readFile = fs.readFileSync("say.js")
console.log(readFile.toString());