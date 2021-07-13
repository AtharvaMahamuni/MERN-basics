
//Module wrap function it will bydefault done by node
// (function(exports, requrie, module, __filename, __dirname){
// Here I want to access data in index.js
atharva = {
    name: "Atharva",
    favNum: 5,
    developer: true
}

// })

// console.log(exports, require, module, __filename, __dirname);

module.exports = atharva;