require("dotenv").config()
require("./config/dbConnection")

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const cors = require("cors");
const passport = require('passport');

const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 8000;

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { path: "/", httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 },
    })
    );
    
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRoutes);

app.listen(PORT, (err)=>{
    if(!err) console.log(`Backend Running On Port ${PORT}`);
});
