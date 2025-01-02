// What is an index in MongoDb?
// Indexes in MongoDB are used to improve the performance of queries by allowing the database to quickly locate and retrieve data.
// Indexes are created on specific fields in a collection and can be used to sort, filter, and group data efficiently.
// MongoDB supports various types of indexes, including single-field, compound, and multi-key indexes, to optimize query performance.


db.users.createIndex({ name: 1 }); // Ascending order index on the "name" field


db.posts.createIndex({ content: "text" }); // Text index on the "content" field


db.users.createIndex({ user_id: "hashed" }); // Hashed index on the "user_id" field
