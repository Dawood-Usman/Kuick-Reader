const jwt = require('jsonwebtoken');
const auth = (req,res,next)=>{
    // check user authenticated or not
    const token = req.cookies.jwtUserAuth;
    if(typeof token == 'undefined'){
        next()
    } 
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Access the data from the decoded token
    const { login, email } = decodedToken;

    if(login == true)
    {
        return res.status(200).json({SuccessMsg: "Login Successfully!" });
    }
    next()
}

module.exports = {auth}