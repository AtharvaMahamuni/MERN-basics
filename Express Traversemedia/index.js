const express = require("express");
const path = require("path");
const members = require("./Members");

const app = express();

//CREATING ROUTE
// app.get('/', (req, res) => {
//     // res.send("<h1>Hello World!!!</h1>");
//     res.sendFile(path.join(__dirname,'template', 'index.html'));
// });

//MIDDLEWARE
const midle = (req, res, next) => {
    console.log("Hello I am middleware");
    next();
};
app.use(midle);

app.get('/api/members', (req, res) => res.json(members));

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'template')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,  () => {
    console.log("Server started at Port 5000.");
});

