// What is replication in MongoDB?
// Replication in MongoDB is the process of synchronizing data across multiple servers to ensure redundancy, fault tolerance, and high availability. 
// It involves creating multiple copies of the data on different servers, known as replica sets, to provide data redundancy and automatic failover in case of server failures. 
// Replication in MongoDB can be configured with primary and secondary nodes, where the primary node receives all write operations and replicates the data to the secondary nodes
// for backup and fault tolerance.


rs.initiate();

rs.add("hostname:port"); // Example: rs.add("mongodb2.example.com:27017")

rs.status(); // Displays the status of the replica set and its members

