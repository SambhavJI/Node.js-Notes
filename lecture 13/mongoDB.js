const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url); // Note: Capital M in MongoClient

const dbName = "crudDb"; // dbName must be a string

async function main() {
    await client.connect();
    console.log("Connected successfully");
    
    const db = client.db(dbName);
    const collection = db.collection("sigma");

    const data = {
        name: 'deepika',
    marks: 40,
    assingments: 2,
    fees: 200000,
    projects: 12
    }
    await collection.insertMany([data]);

    const findAll = await collection.find().toArray();
    console.log(findAll);
    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());