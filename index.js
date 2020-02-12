// implement your API here
const express = require("express");
const userRouter = require("./router/users-router")
const server = express();
server.use(express.json());
server.use("/users",userRouter)


const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
