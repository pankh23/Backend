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

app.get('/read', async (req, res)=>{

    let users=await usermodel.find()
    res.send(users)
})

app.get('/update', async (req, res)=>{

    let updatedUser=await usermodel.findOneAndUpdate({username: "pankh23"}, {name: "Pankhuri"}, {new: true})

    res.send(updatedUser)
})


app.get('/delete', async(req, res)=>{

    let users=await usermodel.findOneAndDelete({username: 'pankh23'})
    res.send(users)
})
app.listen(3000)