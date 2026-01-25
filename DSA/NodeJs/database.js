const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://sainaths_db_user:root@nmastenodejs.2tnxwip.mongodb.net/";

const client = new MongoClient(url);

const dbName = "MyProject";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  const data = {
    name: "Sainath",
    age: 20,
    email: "sainath@gmail.com",
    password: "123456",
  };

  //   const insertResult = await collection.insertOne(data);
  //   console.log("Inserted document =>", insertResult);

  // const filteredDocs = await collection.updateOne(
  //   { name: "Sainath" },
  //   { $set: { age: 21 } }
  // );
  // console.log("Updated document =>", filteredDocs);

  // const findeFilteredDocs = await collection
  //   .find({ name: "Sainath" }, { age: 21 })
  //   .toArray();
  // console.log(
  //   "Found documents filtered by { name: 'Sainath', age: 21 } =>",
  //   findeFilteredDocs
  // );

  const count = await collection.countDocuments({ name: "Sainath" });
  console.log("Count of documents =>", count);
  //   const filteredDocs = await collection.deleteOne({ name: "Sainath" });
  //   console.log("Deleted document =>", filteredDocs);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// connectToDatabase();
