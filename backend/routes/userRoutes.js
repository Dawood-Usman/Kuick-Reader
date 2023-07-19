const express = require("express");
const userRouter = express.Router();

const userMethods = require("../controllers/user.controller");

userRouter.post('/signUp', userMethods.signUp);
userRouter.post('/signIn', userMethods.signIn);
userRouter.post('/verify', userMethods.verifyEmail);

module.exports = userRouter;