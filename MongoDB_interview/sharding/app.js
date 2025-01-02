// What is sharding in MongoDB?
// Sharding in MongoDB is the process of distributing data across multiple servers to improve scalability and performance. 
// It involves splitting a collection into smaller chunks called shards and distributing these chunks across different servers known as shard servers. 
// Sharding allows MongoDB to handle large amounts of data and high write loads by distributing the data and query load evenly across multiple servers.

sh.enableSharding("mydatabase");

sh.shardCollection("mydatabase.users", { user_id: 1 });

