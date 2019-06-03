const express = require('express');
const db = require("./data/accounts-model")
const server = express();

// your code here
server.use(express.json())
server.post("/api/budgets", (req, res) => {
    const budget = req.body;
    console.log(budget)
    db.add(budget)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the account to the database"
        });
      });
  });


server.get("/api/budgets", (req, res) => {
    db.find()
    .then(budget =>{
        res.status(200).json(budget);
    })
    .catch(err => {
        res.status(500).json({err: "cannot get the data"})
    })
})






module.exports = server;