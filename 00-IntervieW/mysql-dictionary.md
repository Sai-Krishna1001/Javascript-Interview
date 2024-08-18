# MySQL Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **MySQL**               | An open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing and querying data. |
| **Database**            | A collection of related tables that store data in a structured format. Each database can contain multiple tables, views, and other database objects. |
| **Table**               | A collection of rows and columns that stores data in a database. Each table is defined by a schema that specifies the columns and their data types. |
| **Row**                 | A single record in a table, consisting of values for each column in the table. Also known as a tuple or record. |
| **Column**              | A field in a table that defines the type of data stored in that field. Each column has a name and a data type. |
| **Primary Key**         | A unique identifier for each row in a table. The primary key ensures that each record is unique and can be used to establish relationships between tables. |
| **Foreign Key**         | A field in a table that uniquely identifies a row in another table. Foreign keys are used to enforce referential integrity between related tables. |
| **Index**               | A data structure that improves the speed of data retrieval operations on a table. Indexes can be created on one or more columns to optimize query performance. |
| **SQL (Structured Query Language)** | A standardized language used to communicate with relational databases. SQL is used for querying, updating, inserting, and deleting data. |
| **Query**               | A request to retrieve or manipulate data in a MySQL database. Queries are written using SQL syntax and can include operations like SELECT, INSERT, UPDATE, and DELETE. |
| **SELECT**              | An SQL statement used to retrieve data from one or more tables. The SELECT statement can include clauses such as WHERE, JOIN, GROUP BY, and ORDER BY. |
| **INSERT**              | An SQL statement used to add new rows of data to a table. The INSERT statement specifies the table and the values to be inserted into the columns. |
| **UPDATE**              | An SQL statement used to modify existing rows in a table. The UPDATE statement specifies the table, the columns to be updated, and the new values. |
| **DELETE**              | An SQL statement used to remove rows from a table. The DELETE statement specifies the table and the conditions for which rows should be deleted. |
| **JOIN**                | An SQL operation that combines rows from two or more tables based on a related column. Common types of joins include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN. |
| **INNER JOIN**          | A type of join that returns only the rows that have matching values in both tables being joined. Rows with no matching values are excluded from the result. |
| **LEFT JOIN (LEFT OUTER JOIN)** | A type of join that returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for the right table columns. |
| **RIGHT JOIN (RIGHT OUTER JOIN)** | A type of join that returns all rows from the right table and the matched rows from the left table. If there is no match, NULL values are returned for the left table columns. |
| **FULL JOIN (FULL OUTER JOIN)** | A type of join that returns all rows when there is a match in one of the tables. If there is no match, NULL values are returned for the columns of the table without a match. |
| **GROUP BY**            | An SQL clause used to group rows that have the same values in specified columns into aggregated data, such as sums, counts, or averages. The GROUP BY clause is often used with aggregate functions. |
| **HAVING**              | An SQL clause used to filter the results of a GROUP BY query based on aggregate functions. The HAVING clause is used to specify conditions for groups of rows. |
| **ORDER BY**            | An SQL clause used to sort the result set of a query by one or more columns in ascending or descending order. |
| **WHERE**               | An SQL clause used to specify conditions for filtering rows in a query. The WHERE clause is used to include only the rows that meet the specified criteria. |
| **LIMIT**               | An SQL clause used to restrict the number of rows returned by a query. The LIMIT clause is often used for pagination or to limit the result set to a specific number of rows. |
| **AUTO_INCREMENT**      | An attribute used with integer columns in MySQL to automatically generate a unique value for each new row. Commonly used for primary key columns. |
| **NULL**                | A special marker used in SQL to indicate that a value is absent or unknown. NULL is not equivalent to zero or an empty string; it represents the lack of a value. |
| **View**                | A virtual table in MySQL created by a query that retrieves data from one or more tables. Views can simplify complex queries and provide a way to present data in a specific format. |
| **Stored Procedure**    | A precompiled collection of SQL statements that can be executed as a single unit. Stored procedures are used to encapsulate repetitive tasks and business logic within the database. |
| **Trigger**             | A set of SQL statements that are automatically executed or fired when certain events occur in a table, such as INSERT, UPDATE, or DELETE operations. |
| **Function**            | A stored program in MySQL that performs a specific task and returns a value. Functions can be used in SQL queries to perform calculations or manipulate data. |
| **Transaction**         | A sequence of one or more SQL operations that are executed as a single unit of work. Transactions ensure data integrity and consistency by following the ACID properties (Atomicity, Consistency, Isolation, Durability). |
| **Commit**              | An SQL statement that permanently saves all changes made during the current transaction. A COMMIT operation completes the transaction and makes the changes visible to other users. |
| **Rollback**            | An SQL statement that undoes all changes made during the current transaction. A ROLLBACK operation reverts the database to its previous state in case of an error or cancellation. |
| **ACID Properties**     | A set of properties that ensure reliable transaction processing: Atomicity (all-or-nothing), Consistency (valid state), Isolation (independent transactions), and Durability (persistent changes). |
| **Normalization**       | The process of organizing data in a database to reduce redundancy and improve data integrity. Normalization involves dividing tables into related tables and defining relationships between them. |
| **Denormalization**     | The process of combining tables or adding redundant data to improve query performance and reduce the complexity of data retrieval operations. Denormalization is often used to optimize read-heavy databases. |
| **Schema**              | The structure of a database, including the tables, columns, data types, and relationships between tables. The schema defines the organization and constraints of the data stored in the database. |
| **Data Type**           | The attribute of a column that defines the type of data it can hold, such as INTEGER, VARCHAR, DATE, or FLOAT. Data types determine the storage format and constraints for the column's values. |
| **VARCHAR**             | A variable-length character data type used to store strings of varying length. VARCHAR columns can hold text with a maximum length defined at the time of table creation. |
| **INT**                 | A data type used to store integer values. INT columns can hold whole numbers without decimal places. |
| **DATE**                | A data type used to store date values in the format 'YYYY-MM-DD'. DATE columns are used for storing calendar dates. |
| **FLOAT**               | A data type used to store floating-point numbers with decimal places. FLOAT columns are used for storing numerical values that require precision. |
| **CHAR**                | A fixed-length character data type used to store strings of a specific length. CHAR columns always use the specified number of characters, padding with spaces if necessary. |
| **CLOB (Character Large Object)** | A data type used to store large amounts of text data. CLOB columns are used for storing long text documents or large textual data. |
| **BLOB (Binary Large Object)** | A data type used to store large amounts of binary data, such as images, audio, or files. BLOB columns are used for storing binary data in a database. |
| **JOIN Table**          | A table created to establish a many-to-many relationship between two tables. JOIN tables contain foreign keys from each related table and are used to link records across tables. |
| **Normalization Forms** | A series of rules for organizing data in a database to reduce redundancy and improve data integrity. Common normalization forms include First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF). |
| **Composite Key**       | A primary key that consists of multiple columns in a table. Composite keys are used to uniquely identify records when a single column is not sufficient. |
| **Self-Join**           | A join operation where a table is joined with itself. Self-joins are used to find relationships within a single table, such as hierarchical data. |
| **Subquery**            | A query nested inside another query. Subqueries can be used in SELECT, INSERT, UPDATE, or DELETE statements to perform complex operations and retrieve data based on conditions. |
| **Indexing**            | The process of creating and managing indexes on database columns to improve the performance of query operations. Indexes speed up data retrieval but may impact write performance. |
| **Data Integrity**      | The accuracy and consistency of data in a database. Data integrity is maintained through constraints, such as primary keys, foreign keys, and unique constraints, to ensure valid data. |
| **User**                | An entity that interacts with the MySQL database, either as a database administrator or as an application user. Users can have different privileges and roles to access and manipulate data. |
| **Privilege**           | A set of permissions granted to users or roles that define what actions they can perform on the database, such as SELECT, INSERT, UPDATE, DELETE, and CREATE. |
| **Role**                | A collection of privileges that can be assigned to users or other roles. Roles simplify the management of permissions by grouping related privileges together. |
| **Stored Function**     | A user-defined function in MySQL that can be called from SQL statements to perform calculations or return specific values based on input parameters. |
| **Stored Procedure**    | A set of SQL statements that perform a specific task and can be executed as a single unit. Stored procedures are used to encapsulate business logic and simplify repetitive operations. |
| **Event**               | A scheduled task that is automatically executed at specified intervals or times. Events are used to perform periodic maintenance or data processing tasks. |
| **Database Migration**  | The process of transferring or updating database schema and data from one version or environment to another. Migrations are used for database upgrades, schema changes, or moving between database systems. |
| **Backup**              | A copy of the database data and schema created for the purpose of recovery in case of data loss or corruption. Backups can be full, incremental, or differential. |
| **Restore**             | The process of recovering data from a backup to restore the database to a previous state. Restore operations are used to recover from data loss or corruption. |
| **Replication**         | The process of copying data from one MySQL server to another to ensure data availability and redundancy. Replication can be used for load balancing and backup purposes. |
| **Partitioning**        | A method of dividing a large table into smaller, more manageable pieces, called partitions. Partitioning improves performance and manageability by splitting data based on specified criteria. |
| **Connection Pooling**  | A technique used to manage and reuse database connections efficiently. Connection pooling reduces the overhead of establishing new connections by maintaining a pool of reusable connections. |
