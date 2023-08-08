const { v4: uuidv4 } = require('uuid');
const { db, Table } = require('../config/awsDynanamoDBconfig');

// Store the email and S3File Link in DynomoDB
const storeFileLink = (email, fileLink, callback)=>{
  const id = uuidv4(); // Generate a unique identifier
  const item = {
    id,
    email,
    fileLink,
  };

  const params = {
    TableName: Table,
    Item: item,
  };

  db.put(params, (err, data) => {
    if (err) {
      console.error('Error storing item in DynamoDB:', err);
      callback(err);
    } else {
      console.log('Item stored successfully in Dynamo DB');
      callback(null, data);
    }
  });
}



// get the links of files of ser email
const getFileLinksByEmail = (req,res)=>{
  // const token = req.cookies.jwtUserAuth;
    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    //  Access the data from the decoded token
    // const email = decodedToken.email
    // if (typeof email == 'undefined') email = 'ranaadil571@gmail.com'
    const email = 'ranaadil571@gmail.com'
    getFileLinks(email, (err, fileLinks) => {
        if (err) {
            console.error('Error:', err);
            res.status(400).json({err})
        } else {
            res.status(200).json({fileLinks})
        }
    });
}


const getFileLinks = (email, callback)=>{
  const params = {
    TableName: Table,
    IndexName: 'email', // Assuming you have created an index on the 'email' attribute
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
  };

  db.query(params, (err, data) => {
    if (err) {
      console.error('Error querying DynamoDB:', err);
      callback(err);
    } else {
      const fileLinks = data.Items.map(item => ({
        id: item.id,
        fileLink: item.fileLink,
      }));
      callback(null, fileLinks);
    }
  });
}


module.exports = {storeFileLink,getFileLinksByEmail};
