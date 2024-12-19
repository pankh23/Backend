// // const { log } = require('console');
// const fs = require('fs');

// fs.appendFile("hi.txt", " I'm fine", function(err){

//     if(err) console.log("err");
//     else console.log("done");
// })

// fs.rename("hi.txt", "hello.txt", function(err){

//     if(err) console.log("err");
//     else console.log("done");
// })


const http=require('http')

const server=http.createServer(function(req, res){
     
    res.end("Hello")
})

server.listen(3000)