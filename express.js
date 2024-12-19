const express=require('express')
const app=express();

app.use(function(req, res, next){

    console.log('middleware');
    next();
    
})

app.get('/', function(req, res){

    res.send('Hello')
})

app.get('/profile', function(req, res, next){

    return next(new Error("Not implemented"))
})//for the console

app.use((err, req, res, next)=>{

    console.log(err.stack);
    res.status(500).send('Some issue is there')
    
})//for the frontend 

app.listen(3000)