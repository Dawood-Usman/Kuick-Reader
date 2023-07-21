const express = require("express");
const userRouter = express.Router();

const userMethods = require("../controllers/user.controller");

userRouter.get('/home', (req, res)=>{
    res.send("Welcome KuickReader!");
})
userRouter.post('/signUp', userMethods.signUp);
userRouter.post('/signIn', userMethods.signIn);
userRouter.post('/verify', userMethods.verifyEmail);

module.exports = userRouter;