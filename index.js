// implement your API here
const express = require("express");
const http = require('http');
const db = require("./data/db.js");
const server = express();
server.use(express.json());


const hostname = '127.0.0.1';
const port = 5555;
//Objectives
//Write out the following endpoints
//POST /api/users
//GET /api/users
//GET /api/users/:import { render } from 'react-dom'
//DELETE /api/users/id
//put /api/users/id

//========================\\\\\\
//Get requests

server.get("/api/users", (request, response) => {
    db.find()
      .then(user => {
        response.status(200).json(user);
      })
      .catch(err => {
        response.status(500).json({ success: false, err });
      });
  });








  server.listen(port, () => console.log('//===========RESTFUL API UP============//'));