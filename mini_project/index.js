const express=require('express')
const app=express()
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", function(req, res){

    res.render('index')
});

app.get("/profile/:username", function(req, res){

    res.send(`Welcome, ${req.params.username}`)
});//Dynamic rounting done by adding ':' befo re the dynamic part of the route 


app.get("/about/:username/:age", function(req, res){

    res.send(`Hi ${req.params.username}, your age is ${req.params.age}`)
})
app.listen(3000, function(){
    console.log("working successfully");
})