const mongoose= require('mongoose');
const MONGODB_URL=process.env.mongodb;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

module.exports = mongoose;