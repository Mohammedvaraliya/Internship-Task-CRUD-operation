const mongoose = require('mongoose');

const username = 'admin';
const password = 'admin';
const clusterName = 'cluster0';
const databaseName = 'MongoNodeProject';

const mongoURI = `mongodb+srv://${username}:${password}@${clusterName}.54kc2ka.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const connectToMongo = async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    };
    const mongooseConnection = await mongoose.connect(mongoURI, mongooseOptions);
    console.log('Connected to MongoDB Atlas successfully');
    return mongooseConnection;
  } catch (error) {
    console.log('Failed to connect to MongoDB Atlas', error);
    process.exit(1);
  }
};

module.exports = connectToMongo;

