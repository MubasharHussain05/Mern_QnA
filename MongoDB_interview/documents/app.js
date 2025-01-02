// What is a document in MongoDB?
// Documents in MongoDB are similar to JSON objects and are stored in collections. 
// Each document represents a single record in the database and can have a different structure, 
// allowing for flexibility in data modeling. Documents can contain key-value pairs, arrays, and 
// nested documents, making them suitable for storing complex data structures.


//Insert Document:
db.users.insertOne({
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    tags: ["developer", "mongodb"]
  });

  //Find Document:
  db.users.find({ name: "Alice" });


  //Update Document:

  db.users.updateOne({ name: "Alice" }, { $set: { age: 31 } });


  //Delete Document:
  db.users.deleteOne({ name: "Alice" });

    // In this example, we are inserting a document into the "users" collection with fields for name, age, email, and tags.  