// How does the aggregation framework
// work in MongoDB?
// The aggregation framework in MongoDB allows you to process and transform data from a collection using a pipeline of operations.
// Each operation in the pipeline takes the input from the previous operation, processes it, and passes the result to the next operation.
// The aggregation framework supports a wide range of operations, including filtering, grouping, sorting, projecting, and joining data from multiple collections.
// The pipeline operations are executed in sequence, allowing you to perform complex transformations and computations on the data efficiently.
// The aggregation framework is similar to SQL GROUP BY or JOIN queries but provides more flexibility and power for processing data in MongoDB.

db.sales.aggregate([
    { $match: { product: "Laptop" } }
  ]);

  db.sales.aggregate([
    { $project: { product: 1, totalValue: { $multiply: ["$quantity", "$price"] } } }
  ]);

  db.sales.aggregate([
    { $limit: 5 }
  ]);
  
   