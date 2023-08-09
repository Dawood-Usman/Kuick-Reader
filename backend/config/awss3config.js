const AWS = require('aws-sdk');

// Configure AWS credentials and region
AWS.config.update({
    region: 'ap-southeast-1', // Adjust to your region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Create an instance of the S3 service
const s3 = new AWS.S3();

// Specify your S3 bucket name
const bucketName = 'pdffiles-s3';

module.exports = {
  s3,
  bucketName,
};
