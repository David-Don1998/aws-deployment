const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("HELLO WORLD!!")
})

app.get('/test', (req, res)=>{
    res.send("<h1>Works Fine</h1>")
})

app.listen(3000, ()=>{
    console.log("Server running in port: 3000");
})