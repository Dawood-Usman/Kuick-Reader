const express = require("express");
const userRouter = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const userMethods = require("../controllers/user.controller");
const { passport, loginSucceed } = require('../controllers/oAuth.controller')
const midlleware = require('../middlewares/auth')
const { storeFileLink, getFileLinksByEmail } = require('../controllers/uploadAndGetFileLink.contoller');
const uploadPdfToS3 = require('../controllers/uploadFile.controller');

userRouter.get('/home', (req, res) => {
  res.send("Welcome KuickReader!");
})
userRouter.post('/signUp', userMethods.signUp);
userRouter.post('/signIn', userMethods.signIn);
userRouter.post('/verify', userMethods.verifyEmail);
userRouter.get('/userInfo', userMethods.getTokenInfo);
userRouter.get('/jwtInfo', userMethods.getJwtInfo);

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


// get file and update the file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    console.log("This is file: ", file);
    const originalFileName = file.originalname.replace(/\s/g, '_');
    const fileName = originalFileName;
    req.session.fileName = fileName;

    const stream = fs.createWriteStream(path.join('uploads', fileName));
    file.stream.pipe(stream);

    cb(null, fileName);
  },
});


const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 }
}).single('file');


// Handle the file upload endpoint
userRouter.post('/upload', upload, uploadPdfToS3);


// Get File Links of User
userRouter.get('/getlinks', getFileLinksByEmail);

module.exports = userRouter;