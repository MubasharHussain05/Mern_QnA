// How do you perform a backup and
// restore in MongoDB?

// MongoDB provides built-in tools for performing backups and restores of databases and collections.
// The following methods can be used to perform backups and restores in MongoDB:
// 1. mongodump and mongorestore:
// The mongodump tool is used to create a binary export of the data in a MongoDB database. It can be used to back up an entire database or a specific collection.


// mongodump --uri="mongodb://<username>:<password>@<host>:<port>/<database>"

// mongodump --uri="mongodb://username:password@localhost:27017/mydatabase" --out=/path/to/backup


// mongorestore --uri="mongodb://<username>:<password>@<host>:<port>/<database>" /path/to/backup
