const express=require('express')
const app=express();
const userModel=require("./models/user")
const postModel=require("./models/post")

app.get('/', (req, res)=>{

    res.send('Hello')
})


app.get('/create', async(req, res)=>{

    let user=await userModel.create({

        username: "pankh",
        email: "pankh@gmail.com",
        age: 12
    })

    res.send(user)
})

app.get('/post/create', async (req, res)=>{

    let post=await postModel.create({
        postdata: "Its the data",
        user: "679b191b29d82d2f4e70d209"
    })

    let user= await userModel.findOne({_id: "679b191b29d82d2f4e70d209"})
    user.posts.push(post._id)

    await user.save()
    res.send({post, user})
})
app.listen(3000)