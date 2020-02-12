const router = require('express').Router();
const db = require("../data/db");


router.get("/", (request, response) => {
    db.find()
      .then(user => {
        response.status(200).json(user);
      })
      .catch(err => {
        response.status(500).json({ success: false, err });
      });
  });
//========Post new user
router.post("/",(req,res)=> {
  const post = req.body
  if(req.body.bio && req.body.name){
    db.insert(post)
    .then(cb => {
      res.status(200).json(cb)
    }).catch(err => {
      res.status(500).json({message:err})
    })
  }else{
      console.log("please include an object in the format of {'name':'some name','bio':'crash' ")
      res.status(500).json({error_message:"please include an object in the format of {'name':'some name','bio':'crash'} "})
  }

})
//========Update user==========
router.put("/:id",(req,res) => {
  const id = req.params.id;
  const update = req.body;
  db.update(id,update)
  .then(cb => {
    res.status(201).json(cb)
  }).catch(err => {
    res.status(500).json({message:"yikes its broken"})
  })
})
//=======Delete User by ID========//
router.delete("/:id",(req,res) => {
    const {id} = req.params;
    db.remove(id)
    .then(cb => {
        res.status(202).json(cb)
    })
    .catch(err => {
        res.status(500).json({message:"DELELET FAILED"})
    })
})
//======Get user by ID===========//
router.get("/:id",(req,res) => {
    const id = req.params.id
    db.findById(id)
    .then(cb  => {
        res.status(200).json(cb)
    }).catch(err => {
        res.status(500).json({message:"failed to get user by id"})
    })
})

module.exports = router