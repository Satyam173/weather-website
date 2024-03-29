const express = require('express');
const app = express();
const path = require('path');
const port = 3000; //during deployment we use process.env.PORT || 3000
const hbs = require('hbs');
// public static path
const static_path = path.join(__dirname,"../public");
const temp_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',temp_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error");
})

app.listen(port,()=>{
    console.log(`Listing to post ${port}`);
})