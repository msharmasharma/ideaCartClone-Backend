const express = require("express");
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("IdeaKart Data");
});

app.get("/products",(req,res)=>{
    res.send(importData);
});
app.get("/products/:id",(req,res)=>{
    const data = importData.find((d) => d.id === req.params.id);
    res.send(data);
});

app.listen(port, ()=>{
    console.log(`Example app is listening on port http://localhost:${port}`);
})