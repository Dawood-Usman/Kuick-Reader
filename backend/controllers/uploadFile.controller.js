const fs = require('fs');
const { s3, bucketName } = require('../config/awss3config');
const runPythonScript = require('../controllers/fileModifyPyScriptRunner.controller');
const {storeFileLink} = require('../controllers/uploadAndGetFileLink.contoller');
const path = require('path');
const jwt = require('jsonwebtoken');

const uploadPdfToS3 = (req,res)=>{
  // The uploaded file is available in req.file
  runPythonScript(req.session.fileName, req.session.fileName, () => {
    // Send the modified PDF file as a response

    // const token = req.cookies.jwtUserAuth;
    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // Access the data from the decoded token
    // const email = decodedToken.email
    // if (typeof email == 'undefined') email = 'ranaadil571@gmail.com'
    const email = 'ranaadil571@gmail.com'
    const outputPath = path.join(__dirname, `../uploads/${req.session.fileName}`);

    const s3FileName = req.session.fileName;

    // Store File and Link

    uploadPdf(outputPath, s3FileName, (err, s3Url) => {
    if (err) {
        res.json({err})
    } else {
        storeFileLink(email, req.session.fileName, s3Url.publicLink, (storeErr, data) => {
            if (storeErr) {
              console.error('Error storing PDF data in DynamoDB:', storeErr);
              res.status(400).json({storeErr})
            } else {
              console.log('PDF Link data stored in DynamoDB');
              res.status(200).json({fileName : req.session.fileName,fileLink : s3Url.publicLink})
            }
          });
        }
    });
  });
}




const uploadPdf = (pdfFilePath, s3FileName, callback)=>{
  const fileContent = fs.readFileSync(pdfFilePath);

  const params = {
    Bucket: bucketName,
    Key: s3FileName,
    Body: fileContent,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading file to S3:', err);
      res.status(200).json({err})
      callback(err);
    } else {
      console.log('File uploaded to S3 at:', data.Location);

      // Generate a publicly accessible link for the uploaded file
      const signedUrl = s3.getSignedUrl('getObject', {
        Bucket: bucketName,
        Key: s3FileName,
        Expires: 3600 * 24 * 30, // Link expiration time in seconds (1 hour)
      });

      console.log('Publicly accessible link:', signedUrl);
      callback(null, { s3Location: data.Location, publicLink: signedUrl });
    }
  });
}

module.exports = uploadPdfToS3;
