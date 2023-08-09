const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-southeast-1', // Adjust to your region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const db = new AWS.DynamoDB.DocumentClient();
const Table = 'pdfFilesDD';

module.exports = {
  db,
  Table,
};
