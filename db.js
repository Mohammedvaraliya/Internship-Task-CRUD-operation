// const mongoose = require('mongoose');

// const server = '127.0.0.1:27017';
// const database = 'MongoNodeProject';

// const mongoURI = `mongodb://${server}/${database}?directConnection=true&readPreference=primary`;

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log('Connected to MongoDB successfully');
//   } catch (error) {
//     console.log('Failed to connect to MongoDB', error);
//   }
// };

// module.exports = connectToMongo;

const { MongoClient, ServerApiVersion } = require('mongodb');

const username = 'admin';
const password = 'admin';
const clusterName = 'cluster0';
const databaseName = 'MongoNodeProject';

const mongoURI = `mongodb+srv://${username}:${password}@${clusterName}.54kc2ka.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const connectToMongo = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas successfully');
  } catch (error) {
    console.log('Failed to connect to MongoDB Atlas', error);
  }
};

module.exports = connectToMongo;
