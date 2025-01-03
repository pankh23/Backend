const express=require('express')
const app=express()

const usermodel=require('./usermodel')
app.get('/', function(req, res){

    res.send("hi")
})

app.get('/create', async function(req, res){

    let createdUser=await usermodel.create({

        name: "Pankh",
        email: "pankhurikhurana23@gmail.com",
        username: "pankh23"
    })//async code

    res.send(createdUser)
    
})
app.listen(3000)