const express=require('express')
const app=express();

app.use(function(req, res, next){

    console.log('middleware');
    next();
    
})

app.get('/', function(req, res){

    res.send('Hello')
})


app.listen(3000)