import express from "express";
// const express = require("express");
const app = express();

// app.use(express.static('dist'));

//get a list of 5 jokes
app.get("/api/jokes", (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content:"This is a joke"
        },
        {
            id: 2,
            title: 'Another joke',
            content:"This is another joke"
        },
        {
            id: 3,
            title: 'A third joke',
            content:"This is a joke"
        },
        {
            id: 4,
            title: 'A joke',
            content:"This is a joke"
        },
        {
            id: 5,
            title: 'A joke',
            content:"This is a joke"
        },
    ]
    res.send(jokes);
});

app.get("/", (req,res) => {
    res.send("Server is ready")
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost: ${port}`)
})