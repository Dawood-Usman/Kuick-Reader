const express = require("express");
const userRouter = express.Router();
const multer = require('multer');



const userMethods = require("../controllers/user.controller");
const { passport, loginSucceed } = require('../controllers/oAuth.controller')
const midlleware = require('../middlewares/auth')
const {storeFileLink,getFileLinksByEmail}= require('../controllers/uploadAndGetFileLink.contoller');
const uploadPdfToS3 = require('../controllers/uploadFile.controller');

userRouter.get('/home', (req, res) => {
    res.send("Welcome KuickReader!");
})
userRouter.post('/signUp', userMethods.signUp);
userRouter.post('/signIn', userMethods.signIn);
userRouter.post('/verify', userMethods.verifyEmail);
userRouter.get('/userInfo', userMethods.getTokenInfo);

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
      // Specify the directory where uploaded files will be stored
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Use the original filename for the uploaded file
      const originalFileName = file.originalname.replace(/\s/g, '_'); // Replace spaces with underscores
      const fileName = originalFileName;
      req.session.fileName = fileName;
      cb(null, fileName);
    }
  });
  
  
const upload = multer({ storage });

  
// Handle the file upload endpoint
userRouter.post('/upload', upload.single('file'), uploadPdfToS3);


// Get File Links of User
userRouter.get('/getlinks',getFileLinksByEmail);

module.exports = userRouter;