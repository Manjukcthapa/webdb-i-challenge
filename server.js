const express = require('express');
const db = require("./data/accounts-model")
const server = express();

// your code here
server.use(express.json())


server.post("/api/budgets", (req, res) => {
    const budget = req.body;
    db.add(budget)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error in  database"
        });
      });
  });


server.get("/api/budgets", (req, res) => {
    db.find()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({err: "cannot get the data"})
    })
})

server.get("/api/budgets/:id", (req, res) => {
    const id = req.params.id;
  
    db.findById(id)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while retrieving"
        });
      });
  });


  server.delete("/api/budgets/:id", (req, res) => {
    const id = req.params.id;
  
    db.remove(id)
      .then(removeid => {
        res.status(200).json(removeid);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while removing the account from the database"
        });
      });
  });

  server.put("/api/budgets/:id", (req, res) => {
    const id = req.params.id;
    const updates = req.body;
  
    db.update(id, updates)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error"
        });
      });
  });







module.exports = server;