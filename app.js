const express = require('express');
const app = express();
require('dotenv').config();
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'


//const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const router = require('./routes/main');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.use(express.json());
app.use('/api/v1', router);
// Connection URL
const url = 'mongodb+srv://upadhyaykapish:12345@cluster0.aphmbey.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
const port = process.env.PORT || 3000;
// Database Name
const dbName = 'myProject';









const connectDB = new Promise(async function () {
    // Use connect method to connect to the server
    await client.connect();
    // the following code examples can be pasted here...
})

const start = new Promise(async function () {
    connectDB.then(console.log('db connected')).catch(console.error).finally(() => client.close());
    app.listen(port, () => {
        console.log(`Server listening to port ${port}`);
    });

});

start.then(console.log).catch(console.error);