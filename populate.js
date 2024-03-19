// import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://upadhyaykapish:12345@cluster0.aphmbey.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);

const dbName = 'carsystem';

// const connectDB = new Promise(async function () {
//     // Use connect method to connect to the server
//     await client.connect();
//     // the following code examples can be pasted here...
// })



async function run() {
    try {
        // Connect to the "insertDB" database and access its "haiku" collection
        const database = client.db(dbName);
        const haiku = database.collection("user");

        // Create a document to insert
        for (let i = 0; i < 10; i++) {
            const putuser = {
                dealership_email: faker.internet.email(),
                dealership_id: faker.string.uuid(),
                dealership_name: faker.person.fullName(),
                dealership_location: faker.location.city(),
                password: faker.internet.password(),
                dealership_info: 'userinfo',
            }
            const result = await haiku.insertOne(putuser);
        }
        // Insert the defined document into the "haiku" collection

        // Print the ID of the inserted document
        console.log(`A document was inserted with the _id: ${result.user_id}`);
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}

run().catch(console.error);