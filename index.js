import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello Guys</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>Just A full stack Developer</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Finley-0746551652</h1>");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});