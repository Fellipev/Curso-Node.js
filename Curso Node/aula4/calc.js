var somaFunc = require("./somar");
var subFunc = require("./subtrair");
var multFunc = require("./multiplicar");
var divFunc = require("./dividir");
var potFunc = require("./potencia");

console.log(`3 + 2: ${somaFunc(3,2)}`);   
console.log(`Potencia 3^2: ${potFunc(3,2)}`);
console.log(`3 x 2: ${multFunc(3,2)}`);
console.log(`3 - 2: ${subFunc(3,2)}`);
console.log(`3 / 2: ${divFunc(3,2)}`);