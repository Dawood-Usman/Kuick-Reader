require("dotenv").config()
require("./config/dbConnection")

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { path: "/", httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 },
    })
);

app.use('/', userRoutes);

app.listen(PORT, (err)=>{
    if(!err) console.log(`Backend Running On Port ${PORT}`);
});