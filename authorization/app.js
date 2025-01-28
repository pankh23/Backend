const cookieParser = require('cookie-parser');
const express=require('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const app=express();

app.use(cookieParser())
app.get('/', (req, res)=>{

    // bcrypt.compare("pankhuri", "$2b$10$I3mGenciltlKYB5sKnakcuLjwphKh8fcGC65ESlONWwUnM3y9Y2o2", function(err, result){
    //     console.log(result);
        
    // })

    let token=jwt.sign({email: "pankhuri@gmail.com"}, "secret")
    console.log(token);
    
})

app.listen(3000)