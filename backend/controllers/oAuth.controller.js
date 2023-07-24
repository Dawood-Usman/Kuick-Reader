const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.ID,
        clientSecret: process.env.SECRET,
        callbackURL: "http://localhost:8000/oauth/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        // Save the Users email in database
        // email
        // console.log(profile.emails[0].value);
        
        cb(null, profile);
      }
    )
  );

// store profile in session
passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

// retrieve profile from session
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

const loginSucceed = (req, res)=> {
    // console.log(req.user);
    // User Data : req.user
    const token = jwt.sign({ login: true, email: req.user.emails[0].value }, process.env.JWT_SECRET, { expiresIn: '24h' });
  
    // Set the JWT token as a cookie
    res.cookie('jwtUserAuth', token, { maxAge: 24 * 60 * 60 * 1000 });

    res.send("Login Successfull .....");
}

module.exports = { passport , loginSucceed };