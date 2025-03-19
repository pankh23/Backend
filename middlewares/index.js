const express=require("express");

const app=express();

app.get('/health-checkup', function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    if(username === "admin" && password === "admin"){
        if(kidneyId == 1 || kidneyId == 2){
            res.send("success");
        } else {
            res.status(400).send("failure");
        }
    } else {
        res.status(401).send("Invalid credentials");
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});