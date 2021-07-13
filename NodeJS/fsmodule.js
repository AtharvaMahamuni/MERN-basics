const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{ // file which is exist
//     console.log(err, data); //This is the file
// })

const a = fs.readFileSync('file.txt')
console.log(a); //<Buffer 54 68 69 73 20 69 73 20 74 68 65 20 66 69 6c 65>
console.log(a.toString()); //This is the file

// This will print first before the above call back function in readFile function
// but it will run after log of readFileSync function
console.log('finished reading file');

// fs.readFile('nfile.txt', 'utf8', (err, data)=>{ // file which is not exitst
//     console.log(err, data);
// })


const b = fs.writeFileSync('file2.txt', "This is a data2");
console.log(b);
console.log("Finished reading file");