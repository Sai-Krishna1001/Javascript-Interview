# Node.js Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **Node.js**             | A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to run JavaScript code on the server side. |
| **Event Loop**          | A core mechanism in Node.js that handles asynchronous operations, allowing non-blocking I/O by offloading operations and executing callbacks when tasks are complete. |
| **Non-blocking I/O**    | A key feature of Node.js where I/O operations (like reading files or querying a database) are executed asynchronously, allowing the server to handle other tasks while waiting for I/O operations to complete. |
| **Callback**            | A function passed as an argument to another function, to be executed once the operation is completed. Widely used in asynchronous programming in Node.js. |
| **Promise**             | An object representing the eventual completion or failure of an asynchronous operation. Promises help to avoid callback hell by chaining `.then()` and `.catch()` methods. |
| **Async/Await**         | Syntactic sugar built on Promises that allows asynchronous code to be written in a more synchronous-looking style, using `async` functions and `await` expressions. |
| **Module**              | A reusable block of code in Node.js, encapsulated in a file. Modules can be exported and imported using `module.exports` and `require()`. |
| **CommonJS**            | The module system used by Node.js, allowing developers to organize code into modules using `require()` for importing and `module.exports` for exporting. |
| **NPM (Node Package Manager)** | The default package manager for Node.js, used to install, share, and manage JavaScript packages (modules). NPM also manages the package's dependencies. |
| **Package.json**        | A JSON file that contains metadata about a Node.js project, including dependencies, scripts, and other project-specific information. It is essential for managing and running a Node.js project. |
| **Express.js**          | A minimal and flexible web application framework for Node.js, providing a robust set of features for building web and mobile applications. |
| **Middleware**          | Functions that have access to the request and response objects in Express.js applications, used for processing requests before they reach the route handlers. |
| **Routing**             | The process of defining endpoints (routes) in a Node.js application that respond to client requests. Express.js provides an easy way to handle different HTTP methods and URL patterns. |
| **HTTP Server**         | A core component in Node.js, created using the `http` module, which listens for and responds to HTTP requests. |
| **REPL (Read-Eval-Print Loop)** | An interactive shell provided by Node.js that allows developers to execute JavaScript code and see the results immediately. Useful for quick testing and debugging. |
| **EventEmitter**        | A class in Node.js that allows objects to emit named events and have listeners (callback functions) that respond to those events. It's the basis for handling events in Node.js. |
| **Streams**             | Objects in Node.js that allow for reading or writing data piece by piece (chunks), making it efficient to handle large files or data sets. Streams can be readable, writable, or both (duplex). |
| **Buffer**              | A temporary holding spot for a chunk of data being transferred from one place to another, used in Node.js to handle binary data streams. |
| **File System (fs)**    | A core module in Node.js that allows interaction with the file system, enabling operations like reading, writing, and deleting files. |
| **Path**                | A core module in Node.js that provides utilities for working with file and directory paths, enabling manipulation of paths in a cross-platform way. |
| **Cluster**             | A module in Node.js that allows for the creation of child processes that share the same server port, enabling multi-core systems to handle parallel tasks efficiently. |
| **Child Processes**     | Processes spawned by a Node.js application to handle tasks concurrently. Child processes can be created using the `child_process` module. |
| **Environment Variables** | Variables that are set outside of the application and provide runtime configuration. In Node.js, these can be accessed using `process.env`. |
| **Process**             | An object in Node.js that provides information about and control over the current Node.js process, including properties like `process.env` and methods like `process.exit()`. |
| **Global Object**       | An object in Node.js that provides global variables and functions that are available everywhere in the application, such as `console`, `setTimeout`, and `require()`. |
| **Error Handling**      | The process of managing errors in Node.js applications, typically using `try-catch` blocks, error-first callbacks, or the `.catch()` method in Promises. |
| **Node Inspector**      | A built-in debugging tool in Node.js that allows developers to inspect running Node.js applications, set breakpoints, and step through code. |
| **TCP Socket**          | A connection endpoint for sending and receiving data between devices over a TCP network, used in Node.js for network communication. |
| **WebSocket**           | A protocol providing full-duplex communication channels over a single TCP connection, used in Node.js for real-time communication between clients and servers. |
| **JWT (JSON Web Token)** | A compact and self-contained way of securely transmitting information between parties as a JSON object, often used for authentication in Node.js applications. |
| **CORS (Cross-Origin Resource Sharing)** | A security feature that allows or restricts resources on a web page to be requested from another domain outside the domain from which the resource originated, configured in Node.js applications. |
| **Sessions**            | A mechanism to store user information on the server to be used across multiple requests in a Node.js application, typically implemented using session middleware. |
| **MongoDB**             | A NoSQL database often used with Node.js for storing data in a flexible, JSON-like format. MongoDB is popular for its scalability and performance. |
| **Mongoose**            | An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution to model data and enforce structure. |
| **API (Application Programming Interface)** | A set of rules that allow different software entities to communicate with each other, often used in Node.js applications to interact with databases, services, or other systems. |
| **RESTful API**         | An architectural style for designing networked applications, using HTTP requests to perform CRUD operations. Node.js is often used to build RESTful APIs. |
| **JSON (JavaScript Object Notation)** | A lightweight data interchange format used in Node.js for exchanging data between a server and a client. JSON is easy to read and write and is supported by most programming languages. |
| **Authentication**      | The process of verifying the identity of a user or system. In Node.js applications, authentication is often implemented using JWT, OAuth, or session-based mechanisms. |
| **Authorization**       | The process of determining whether a user has permission to access a resource. In Node.js, authorization typically follows authentication and checks user roles or permissions. |
| **Middleware Stack**    | The sequence of middleware functions that handle incoming requests in a Node.js application, particularly in frameworks like Express.js. |
| **Passport.js**         | A popular middleware for authentication in Node.js applications, supporting strategies like local authentication, OAuth, and JWT. |
| **Socket.io**           | A library that enables real-time, bidirectional communication between web clients and servers, commonly used in Node.js for building chat applications, live feeds, and multiplayer games. |
| **HTTP Methods**        | Standardized request methods like GET, POST, PUT, DELETE, and PATCH used in Node.js to define routes and handle client requests in RESTful APIs. |
| **Template Engines**    | Tools that allow embedding JavaScript code inside HTML, enabling dynamic content generation on the server side. Common examples include EJS, Pug, and Handlebars. |
| **Helmet.js**           | A collection of middleware functions that set various HTTP headers to enhance security in Node.js applications. |
| **Rate Limiting**       | A technique used to control the rate of incoming requests in a Node.js application, preventing abuse by limiting the number of requests a user can make within a time frame. |
| **PM2**                 | A production process manager for Node.js applications, allowing for easy monitoring, restarting, and load balancing of applications. |
| **Load Balancing**      | The process of distributing incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, often implemented in Node.js using the Cluster module or external tools like Nginx. |
| **SSL/TLS**             | Protocols for securing data transferred over the internet using encryption, commonly implemented in Node.js applications for secure communication. |
| **Web Scraping**        | The process of extracting data from websites, often implemented in Node.js using libraries like Cheerio or Puppeteer. |
| **Unit Testing**        | A testing method where individual units or components of a Node.js application are tested in isolation. Tools like Mocha, Chai, and Jest are commonly used. |
| **Integration Testing** | Testing the interaction between different modules or services in a Node.js application to ensure they work together correctly. |
| **API Rate Limiting**   | A technique used to control the rate at which an API is accessed in Node.js, often to prevent abuse and ensure fair usage across users. |
| **JWT Authentication**  | A method of securing Node.js APIs by generating, sending, and verifying JSON Web Tokens, commonly used
