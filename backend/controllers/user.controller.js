const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require("../models/user.model");
const transporter = require("../config/transporter");

const signIn = async (req, res) => {

    let { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ ErrorMsg: 'User Not Found!' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ ErrorMsg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({ Token: token, SuccessMsg: "Login Successfully!" });

    } catch (error) {
        res.status(500).json({ err: error.message });
    }

}

const signUp = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const isUserExist = await User.findOne({ email });
        if (isUserExist) return res.status(404).json({ ErrorMsg: "User Already Exist!" });
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const verificationCode = sendVerificationCode(email);
        const newUser = {
            fullName: fullName,
            email: email,
            password: passwordHash,
            code: verificationCode
        }

        const userJWT = jwt.sign(newUser, process.env.JWT_SECRET);

        res.status(200).json({code: verificationCode, email: email, userJWT: userJWT});
        // it should now redirect back to login page.
        
    } catch (error) {
        res.status(500).json({ err: error.message });
    }

}

const sendVerificationCode = (email)=>{
    const code = crypto.randomBytes(3).toString('hex');
    let mail = transporter.sendMail({
        from: '"Dawood Usman" <dawoodusman370@gmail.com>',
        to: `${email}`,
        subject: "Verification Code",
        text: "Hello world?",
        html: `<h1>KuickReader Verification Code!</h1>
               <p><b>Your Code is : ${code}</b></p>`
    });

    return code;
}

const verifyEmail = async (req, res)=>{
    const { userCode, userJWT } = req.body;

    const jwtData = jwt.verify(userJWT, process.env.JWT_SECRET);
    
    const userData = {
        fullName: jwtData.fullName,
        email: jwtData.email,
        password: jwtData.password,
    }
    const actualCode = jwtData.code;

    if (userCode == actualCode) {
        const newUser =  new User(userData);
        const saveUser = await newUser.save();
        if (!saveUser) return res.status(404).json({ ErrorMsg: "User Registration Failed!" });
        res.status(200).json({ SuccessMsg: "User Registered Sussessfully!" });
    }
    else {
        res.status(404).json({ ErrorMsg: "Wrong Verification Code, Try To SignUp Again..." });
    }
}


// const getTokenInfo = async (req, res) => {
//     const [Bearer, token] = req.headers.authorization.split(' ');
//     const verify = jwt.verify(token, process.env.ID);
//     if (!verify) res.status(400).json({ ErrorMsg: "Invalid Token!" });
//     // const getUser = await User.findOne({ _id: verify.id });
//     res.status(200).json(verify);
// }

const { OAuth2Client } = require('google-auth-library');

const getTokenInfo = async (req, res)=>{
    // (client_id, jwtToken) 

    const client_id = process.env.ID;
    const [Bearer, jwtToken] = req.headers.authorization.split(' ');

    const client = new OAuth2Client(client_id);
    // Call the verifyIdToken to
    // varify and decode it
    const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: client_id,
    });
    // Get the JSON with all the user info
    const payload = ticket.getPayload();
    // This is a JSON object that contains
    // all the user info
    return res.status(200).json({decodedData: payload});
}

module.exports = { signUp, signIn, getTokenInfo, verifyEmail };