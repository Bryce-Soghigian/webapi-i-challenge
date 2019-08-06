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
//GET /api/users/:id
//DELETE /api/users/id
//put /api/users/id

//========================\\
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
//   function findById(id) {
//     return db('users')
//       .where({ id: Number(id) })
//       .first();
//   }
server.get("/api/users/:id", (req,res) => {
const {id} = req.params;
console.log(id)
    db.findById(id)
        .then(user => {
         if(user){
             res.status(200).json({user});
         }else {
            res
              .status(400)
              .json({ error: "The id:"+`${id}`+ "  does not exist." });
          }
        })
        .catch(err => {
            response
              .status(500)
              .json({ error: "An error occured getting the user info" });
          });


})
//=====================================//

//Post Requests

server.post("/api/users", (req, res) => {
    const { name, bio } = req.body;
    if (!name || !bio) {
      return res
        .status(400)
        .json({ error: "YO BRO , run me that name or bio" });
    }
    db.insert({ name, bio })
      .then(res => {
        const { id } = res;
        db.findById(id).then(user => {
          res.status(200).json(user);
        });
      })
      .catch(err => {
        res
          .status(400)
          .json({ errorMessage: "Whats your name cutie ;)" });
      });
  });

//============================//
// function update(id, user) {
//     return db('users')
//       .where('id', Number(id))
//       .update(user);
//   }
  server.put('api/users/:id', (req,res) => {
    const {id, user} = req.body;
    db.update({id, user}).then(user => {
        //some code
    }

    ).catch(res => {
        res.json({errorMessage:"Hey you failure"})
    });

  })
//===========================//
//Delete-from solution
server.delete('/api/users/:id', (req, res) => {
    Users.remove(req.params.id)
      .then(count => {
        if (count && count > 0) {
          res.status(200).json({
            message: 'Bye Bye',
          });
        } else {
          res
            .status(404)
            .json({ message: 'Doesnt believe' });
        }
      })
      .catch(() => {
        res.status(500).json({ errorMessage: 'The user could not be removed' });
      });
  });
  








  server.listen(port, () => console.log('//===========RESTFUL API UP============//'));