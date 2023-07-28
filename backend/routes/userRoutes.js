const express = require("express");
const userRouter = express.Router();

const userMethods = require("../controllers/user.controller");
const { passport, loginSucceed } = require('../controllers/oAuth.controller')
const midlleware = require('../middlewares/auth')

userRouter.get('/home', (req, res) => {
    res.send("Welcome KuickReader!");
})
userRouter.post('/signUp', userMethods.signUp);
userRouter.post('/signIn', userMethods.signIn);
userRouter.post('/verify', userMethods.verifyEmail);


// oAuth API
userRouter.get(
    "/oauth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

userRouter.get(
    "/oauth/google/callback",
    passport.authenticate("google", { failureRedirect: "/signIn" }),
    loginSucceed
);


module.exports = userRouter;