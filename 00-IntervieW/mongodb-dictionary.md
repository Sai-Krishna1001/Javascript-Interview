# MongoDB Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **MongoDB**             | A NoSQL database that stores data in JSON-like documents with dynamic schemas, making it highly flexible and scalable. |
| **Document**            | A record in MongoDB, stored in BSON format (a binary representation of JSON), containing fields and values. Each document is analogous to a row in a relational database. |
| **Collection**          | A group of MongoDB documents, similar to a table in a relational database. Collections do not enforce a schema, allowing documents within a collection to have different structures. |
| **Database**            | A container for collections in MongoDB. A single MongoDB instance can host multiple databases, each having its own collections and documents. |
| **BSON (Binary JSON)**  | A binary representation of JSON-like documents, used internally by MongoDB to store data. BSON supports more data types than JSON, such as dates and binary data. |
| **Replica Set**         | A group of MongoDB instances that maintain the same data set, providing redundancy and high availability. One node in the replica set is the primary node, which receives all write operations. |
| **Sharding**            | A method for distributing data across multiple machines in MongoDB to handle large data sets and high-throughput operations. Sharding improves scalability by horizontally partitioning data. |
| **Primary Node**        | The node in a replica set that receives all write operations. The primary node replicates data to the secondary nodes. |
| **Secondary Node**      | A node in a replica set that replicates data from the primary node. Secondary nodes can serve read operations and provide redundancy in case the primary node fails. |
| **Arbiter**             | A node in a MongoDB replica set that does not store data but participates in elections to choose a new primary node when necessary. Arbiters are used to maintain an odd number of voting members in a replica set. |
| **Index**               | A data structure that improves the speed of data retrieval operations on a collection. Indexes in MongoDB can be created on fields within documents and support various indexing strategies. |
| **Query**               | A request to retrieve data from a MongoDB database. Queries in MongoDB are expressed using JSON-like syntax and can filter, sort, and project data from collections. |
| **Aggregation**         | A framework for performing data processing and transformation operations on collections. Aggregations in MongoDB allow for complex data manipulations like filtering, grouping, and calculating aggregates. |
| **Pipeline**            | A sequence of stages in an aggregation operation, where each stage transforms the input data and passes the result to the next stage. Common stages include `$match`, `$group`, `$sort`, and `$project`. |
| **Atlas**               | A fully managed cloud database service provided by MongoDB, offering automated backups, scaling, and monitoring features. MongoDB Atlas supports deployment on AWS, Google Cloud, and Azure. |
| **Schema**              | The structure of a document in MongoDB, defining fields, their types, and constraints. MongoDB is schema-less, meaning documents within a collection can have different schemas. |
| **ObjectId**            | A 12-byte unique identifier for documents in MongoDB. ObjectId is the default value for the `_id` field in MongoDB documents and consists of a timestamp, machine identifier, process ID, and a counter. |
| **CRUD Operations**     | The basic operations performed on a MongoDB database: Create, Read, Update, and Delete. These operations allow for managing documents within collections. |
| **$match**              | An aggregation stage that filters documents based on specified criteria, similar to the `find()` operation in MongoDB queries. |
| **$group**              | An aggregation stage that groups documents by a specified field and performs operations like summing, averaging, or counting on the grouped data. |
| **$project**            | An aggregation stage that reshapes the documents in the pipeline, allowing you to include, exclude, or rename fields. |
| **$lookup**             | An aggregation stage that performs a left outer join to another collection in the same database, allowing you to combine related data from different collections. |
| **$sort**               | An aggregation stage that orders the documents in the pipeline based on the specified sort criteria. |
| **$unwind**             | An aggregation stage that deconstructs an array field from the input documents to output a document for each element in the array. |
| **$limit**              | An aggregation stage that restricts the number of documents passed to the next stage in the pipeline to a specified number. |
| **$skip**               | An aggregation stage that skips over a specified number of documents in the pipeline before passing the remaining documents to the next stage. |
| **Geospatial Index**    | A specialized index in MongoDB that supports efficient queries on spatial data, such as finding points within a certain distance of a location. |
| **TTL Index**           | A type of index that automatically removes documents from a collection after a specified period, useful for managing time-sensitive data like session information. |
| **Compound Index**      | An index that includes multiple fields from the documents in a collection, allowing for more efficient queries that filter or sort by multiple criteria. |
| **Text Index**          | An index that supports text search queries in MongoDB, enabling full-text search capabilities within collections. Text indexes allow searching for words and phrases in specified fields. |
| **Aggregation Framework** | A powerful tool in MongoDB for performing data processing tasks on collections, allowing for complex transformations and computations on the data. |
| **Change Streams**      | A feature in MongoDB that allows you to subscribe to real-time notifications of changes to documents in a collection, useful for building reactive applications. |
| **GridFS**              | A specification for storing and retrieving large files in MongoDB. GridFS divides files into smaller chunks and stores them as documents in a collection. |
| **MapReduce**           | A data processing paradigm supported by MongoDB for performing large-scale data processing tasks by mapping operations to each document and then reducing the results. |
| **Field**               | A key-value pair in a MongoDB document, analogous to a column in a relational database. Fields in MongoDB can store values of various types, including arrays and nested documents. |
| **Embedded Document**   | A document nested within another document in MongoDB, allowing for complex data structures and reducing the need for joins. |
| **Array**               | A field in a MongoDB document that can store multiple values, similar to an array in programming languages. Arrays in MongoDB can be queried and manipulated using various operators. |
| **Operator**            | A symbol or keyword used in MongoDB queries, updates, or aggregations to perform operations on data, such as `$eq`, `$gt`, `$set`, and `$push`. |
| **$set**                | An update operator used to modify the value of a field in a document. If the field does not exist, `$set` will create it. |
| **$inc**                | An update operator used to increment the value of a numeric field in a document by a specified amount. |
| **$push**               | An update operator used to append a value to an array field in a document. If the field does not exist, `$push` will create it as an array. |
| **$pull**               | An update operator used to remove all instances of a value from an array field in a document. |
| **$addToSet**           | An update operator used to add a value to an array field only if the value does not already exist in the array. |
| **Mongo Shell**         | An interactive JavaScript interface for MongoDB, allowing users to perform administrative tasks, run queries, and interact with the database directly from the command line. |
| **Mongoose**            | A popular Node.js library for MongoDB that provides a schema-based solution to model your data, offering built-in type validation, query building, and middleware. |
| **Aggregation Pipeline**| A sequence of stages in MongoDB's aggregation framework where each stage processes documents and passes them to the next stage, enabling powerful data transformations and analysis. |
| **Atlas Search**        | A feature in MongoDB Atlas that allows for sophisticated text search capabilities within MongoDB, including relevance-based search, autocomplete, and faceted search. |
| **Atlas Data Lake**     | A fully managed storage solution for analyzing data across multiple formats and sources, integrated with MongoDB Atlas to enable complex queries on large-scale data sets. |
| **Atlas Triggers**      | A feature in MongoDB Atlas that allows you to automatically run server-side logic in response to database changes, enabling reactive and event-driven applications. |
| **MongoDB Compass**     | A GUI tool provided by MongoDB for visualizing, querying, and analyzing data in a MongoDB database, offering a user-friendly interface for managing your data. |
| **Explain Plan**        | A tool in MongoDB that provides insights into how queries are executed, helping users optimize query performance by showing the execution plan and indexing strategies used. |
| **Transactions**        | A feature in MongoDB that allows for multi-document ACID transactions, ensuring that a series of operations either fully succeed or fully fail, providing consistency and reliability. |
| **Write Concern**       | A setting in MongoDB that specifies the level of acknowledgment required from the database before considering a write operation successful, ranging from no acknowledgment to acknowledgment by the majority of nodes. |
| **Read Preference**     | A setting in MongoDB that determines which replica set members to read from, allowing for control over read operations, including options like primary, secondary, nearest, and custom settings. |
| **Connection String**   | A URI format used to specify the connection details for a MongoDB instance, including hostname, port, database name, authentication credentials, and various connection options. |
| **mongod**              | The MongoDB server daemon that handles data requests, manages data access, and performs background management operations. Running `mongod` starts the MongoDB server. |
| **mongos**              | The routing service for sharding in MongoDB, responsible for directing queries to the appropriate shard and aggregating the results. Multiple `mongos` instances can be deployed for high availability. |
| **oplog (Operations Log)** | A special capped collection in MongoDB that records all operations that modify data in the database, used by replica sets for data synchronization. The oplog can also be used for change data capture and real-time analytics. |
