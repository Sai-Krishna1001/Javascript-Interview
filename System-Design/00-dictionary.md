# System Design Keywords Dictionary

## 1. **Scalability**
**Definition:** The ability of a system to handle increased load or demand by adding resources. It can be **horizontal** (adding more machines) or **vertical** (adding more power to existing machines).

## 2. **Load Balancer**
**Definition:** A component that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving performance and reliability.

## 3. **Microservices**
**Definition:** An architectural style where an application is composed of small, independent services that communicate over a network. Each service is responsible for a specific function and can be developed, deployed, and scaled independently.

## 4. **Database Sharding**
**Definition:** A method of distributing data across multiple database servers (shards) to improve performance and scalability. Each shard holds a subset of the data, reducing the load on any single database.

## 5. **Caching**
**Definition:** The process of storing frequently accessed data in a temporary storage (cache) to speed up data retrieval and reduce load on the primary data source.

## 6. **Latency**
**Definition:** The time delay between a request and the corresponding response. Lower latency means faster response times.

## 7. **Throughput**
**Definition:** The amount of data processed or transmitted by a system within a given period. Higher throughput indicates better performance.

## 8. **High Availability (HA)**
**Definition:** A system design that ensures operational continuity by minimizing downtime. It often involves redundant components and failover mechanisms to keep the system running despite failures.

## 9. **Consistency**
**Definition:** In a distributed system, consistency ensures that all nodes or replicas see the same data at the same time, even in the presence of failures.

## 10. **Availability**
**Definition:** The degree to which a system is operational and accessible when required. High availability means minimal downtime.

## 11. **Partitioning**
**Definition:** The process of dividing a database into smaller, more manageable pieces (partitions) to improve performance, scalability, and maintainability.

## 12. **Replication**
**Definition:** The process of copying data from one database (primary) to one or more other databases (replicas) to ensure data availability and reliability.

## 13. **Fault Tolerance**
**Definition:** The ability of a system to continue operating properly in the event of a failure of some of its components.

## 14. **Load Testing**
**Definition:** The process of simulating a high volume of requests to test a system's performance and identify bottlenecks.

## 15. **Rate Limiting**
**Definition:** A technique used to control the amount of incoming requests to a system to prevent abuse and ensure fair usage among users.

## 16. **API Gateway**
**Definition:** A server that acts as an entry point for all client requests to various microservices. It handles request routing, load balancing, and other cross-cutting concerns.

## 17. **Message Queue**
**Definition:** A communication method where messages are sent between systems or components and stored in a queue until they are processed. It helps decouple producers and consumers.

## 18. **Event Sourcing**
**Definition:** A design pattern where changes to application state are stored as a sequence of events, rather than updating the state directly. This allows for better auditing and recovery.

## 19. **CQRS (Command Query Responsibility Segregation)**
**Definition:** A pattern that separates the handling of read operations (queries) from write operations (commands), often used to improve performance and scalability.

## 20. **Service Discovery**
**Definition:** The process by which services in a distributed system find and communicate with each other. It can be achieved using a central registry or peer-to-peer protocols.

## 21. **Configuration Management**
**Definition:** The process of managing and controlling the configuration settings of a system to ensure consistent and reliable operation.

## 22. **Continuous Integration/Continuous Deployment (CI/CD)**
**Definition:** Practices that involve automatically building, testing, and deploying code changes to ensure that software is always in a deployable state and changes are delivered quickly.

## 23. **Stateless vs. Stateful**
**Definition:**
- **Stateless:** A design where each request from a client to a server is independent and does not rely on any previous requests. The server does not retain any session information.
- **Stateful:** A design where the server retains information about client sessions across multiple requests, allowing for more complex interactions.

## 24. **API Rate Limiting**
**Definition:** A technique used to control the number of API requests a user or application can make within a specified time frame to prevent overloading the server.

## 25. **Horizontal Scaling**
**Definition:** Adding more machines or instances to handle increased load. Also known as scaling out.

## 26. **Vertical Scaling**
**Definition:** Adding more resources (CPU, RAM) to a single machine to handle increased load. Also known as scaling up.

## 27. **Service-Oriented Architecture (SOA)**
**Definition:** An architectural style where applications are designed as a collection of services that communicate over a network. It promotes reusability and scalability.

## 28. **Distributed Systems**
**Definition:** Systems where components are located on different networked computers, which communicate and coordinate their actions by passing messages.

## 29. **Consistency Models**
**Definition:** The different approaches to ensuring consistency in distributed systems, including **strong consistency**, **eventual consistency**, and **causal consistency**.

## 30. **Backup and Recovery**
**Definition:** Processes and strategies to create copies of data and restore it in case of data loss or corruption.

## 31. **Session Management**
**Definition:** The process of handling user sessions, including storing session data and maintaining user state across multiple interactions.

## 32. **Service Mesh**
**Definition:** An infrastructure layer that manages communication between microservices, providing features like load balancing, service discovery, and security.

## 33. **Containerization**
**Definition:** The practice of packaging software and its dependencies into containers to ensure consistent behavior across different environments.

## 34. **Orchestration**
**Definition:** The automated management and coordination of containerized applications and services, often using tools like Kubernetes.

## 35. **Edge Computing**
**Definition:** A computing paradigm that brings computation and data storage closer to the location where it is needed, reducing latency and improving performance.

## 36. **API Throttling**
**Definition:** A technique used to limit the number of API requests a client can make in a given time period to protect the server from excessive load.

## 37. **Data Pipeline**
**Definition:** A series of data processing steps that include extracting, transforming, and loading (ETL) data from various sources to a destination.

## 38. **Immutable Data**
**Definition:** Data that cannot be changed after it is created. Modifications result in the creation of new data structures.

## 39. **Service Orchestration**
**Definition:** The coordination of multiple services to achieve a desired outcome, often involving complex workflows and interactions.

## 40. **API Documentation**
**Definition:** Detailed information about how to use an API, including endpoints, request/response formats, and authentication methods.

## 41. **Retry Mechanism**
**Definition:** A strategy for retrying failed operations automatically, often with exponential backoff, to improve reliability in distributed systems.

## 42. **Proxy Server**
**Definition:** A server that acts as an intermediary between clients and other servers, handling requests and responses to provide features like caching and load balancing.

## 43. **Data Consistency**
**Definition:** The concept that data should be consistent and accurate across different systems and components.

## 44. **Logging**
**Definition:** The process of recording events, errors, and information about system behavior for monitoring and debugging purposes.

## 45. **Monitoring**
**Definition:** The continuous observation of system performance and health to ensure proper operation and to detect issues early.

## 46. **Tracing**
**Definition:** The process of tracking the flow of requests and interactions through a system to diagnose performance issues and understand dependencies.

## 47. **Serverless Architecture**
**Definition:** A cloud computing model where the cloud provider manages the infrastructure, and developers only need to deploy code. It abstracts server management and automatically scales based on demand.

## 48. **Concurrency**
**Definition:** The ability of a system to handle multiple tasks or processes simultaneously. It can be achieved through multi-threading, asynchronous programming, or parallel processing.

## 49. **Fault Isolation**
**Definition:** Techniques used to isolate faults or failures within a system to prevent them from affecting other parts of the system.

## 50. **Application Layer**
**Definition:** The layer in the network stack responsible for providing services and applications to end-users, such as web browsers or email clients.

## 51. **Replication Factor**
**Definition:** The number of copies of data kept across different nodes in a distributed system to ensure data availability and fault tolerance.

## 52. **Event-Driven Architecture**
**Definition:** An architectural pattern where the flow of the application is determined by events, such as user actions or system events, allowing for asynchronous communication and better scalability.

## 53. **Service-Level Agreement (SLA)**
**Definition:** A contract that defines the expected performance and reliability levels of a service, including metrics like uptime, response time, and support availability.

## 54. **Load Testing**
**Definition:** Testing technique to evaluate the performance of a system under a specific load or volume of requests to identify bottlenecks and ensure the system can handle anticipated traffic.

## 55. **Capacity Planning**
**Definition:** The process of determining the resources needed to meet future demands, ensuring that the system can handle expected workloads without performance degradation.

## 56. **Data Model**
**Definition:** The structure and organization of data within a system, including how data is stored, related, and accessed, typically represented through schemas or diagrams.

## 57. **Domain-Driven Design (DDD)**
**Definition:** A design approach that emphasizes collaboration between domain experts and developers to create a shared understanding of the domain and design systems that closely align with business needs.

## 58. **Container Orchestration**
**Definition:** The automated management of containerized applications, including deployment, scaling, and networking, often using tools like Kubernetes or Docker Swarm.

## 59. **State Management**
**Definition:** Techniques and patterns used to handle and synchronize the state of an application, ensuring consistent behavior across different components and user interactions.

## 60. **API Gateway Pattern**
**Definition:** A design pattern where a single entry point (API gateway) handles all incoming requests, routing them to the appropriate services, managing authentication, and aggregating results.

## 61. **Service Registry**
**Definition:** A centralized database that maintains information about available services, including their locations and metadata, allowing services to discover and communicate with each other.

## 62. **Circuit Breaker Pattern**
**Definition:** A design pattern used to detect and handle failures in a system by preventing operations from being executed if a certain threshold of failures is reached, allowing the system to recover gracefully.

## 63. **Rate Limiting**
**Definition:** A strategy to control the rate at which requests are processed by a service to prevent abuse and ensure fair usage, typically by enforcing quotas or throttling.

## 64. **Event Streaming**
**Definition:** The continuous flow of data or events from sources to processing systems, allowing real-time analytics and decision-making based on the latest information.

## 65. **Service Mesh**
**Definition:** An infrastructure layer that provides features such as load balancing, service discovery, and security for microservices communication, often using sidecar proxies.

## 66. **Immutable Infrastructure**
**Definition:** An approach where infrastructure components are not modified after deployment. Instead, any changes involve deploying new versions, ensuring consistency and reliability.

## 67. **Distributed Ledger Technology**
**Definition:** A decentralized database that records transactions across multiple nodes, ensuring data integrity and security without a central authority, commonly used in blockchain.

## 68. **Data Warehousing**
**Definition:** The process of collecting, storing, and managing large volumes of data from multiple sources in a central repository for analysis and reporting.

## 69. **Data Lake**
**Definition:** A centralized repository that stores raw, unstructured data from various sources, allowing for flexible and scalable data processing and analytics.

## 70. **Eventual Consistency**
**Definition:** A consistency model where data changes are propagated to all nodes eventually, allowing for temporary inconsistencies but ensuring that all nodes will converge to the same state over time.

## 71. **Service Decomposition**
**Definition:** The process of breaking down a monolithic application into smaller, more manageable services or microservices, improving modularity and scalability.

## 72. **Dependency Injection**
**Definition:** A design pattern where dependencies are provided to an object from the outside, rather than the object creating them, promoting loose coupling and easier testing.

## 73. **Backpressure**
**Definition:** A mechanism used to handle situations where a system is overwhelmed with too many requests or tasks, applying flow control to prevent system overload.

## 74. **Data Consistency**
**Definition:** Ensuring that data remains accurate and consistent across different systems and components, especially in distributed environments.

## 75. **Proxies**
**Definition:** Intermediate servers that handle requests on behalf of clients or other servers, providing features like caching, load balancing, and security.

## 76. **Service Orchestration**
**Definition:** The coordination of multiple services to achieve a specific goal, managing their interactions and workflows to ensure proper execution.

## 77. **Job Scheduling**
**Definition:** The process of managing and executing tasks or jobs at specified times or intervals, often used for batch processing or routine maintenance.

## 78. **Transactional Consistency**
**Definition:** Ensuring that a sequence of operations in a transaction are completed successfully or not at all, maintaining data integrity and consistency.

## 79. **Compensation Transaction**
**Definition:** A transaction that is used to reverse or compensate for a previously completed transaction, typically used in distributed systems to handle failures.

## 80. **Application Programming Interface (API)**
**Definition:** A set of protocols and tools that allow different software applications to communicate and interact with each other, providing defined methods for accessing and manipulating data.

## 81. **Service Level Objective (SLO)**
**Definition:** A specific target or goal for a service's performance or reliability, often defined within a Service Level Agreement (SLA), such as uptime percentage or response time.

## 82. **Message Broker**
**Definition:** A software component that manages the communication between different services or applications by routing messages, ensuring reliability and decoupling.

## 83. **Object Storage**
**Definition:** A storage architecture that manages data as objects, each with a unique identifier, metadata, and the data itself, often used for large-scale data storage.

## 84. **Query Optimization**
**Definition:** Techniques and strategies used to improve the performance and efficiency of database queries, reducing execution time and resource usage.

## 85. **Dependency Graph**
**Definition:** A diagram or structure that shows the dependencies between different components or services, helping to understand and manage their interactions.

## 86. **Data Partitioning**
**Definition:** The process of dividing a database into smaller, more manageable pieces (partitions) to improve performance and scalability, often based on data distribution or access patterns.

## 87. **Rolling Deployment**
**Definition:** A deployment strategy where new versions of an application are gradually rolled out to a subset of servers, reducing the risk of widespread failures and allowing for smoother updates.

## 88. **Feature Toggle**
**Definition:** A technique that allows features to be enabled or disabled at runtime without deploying new code, often used for testing, gradual rollouts, or conditional functionality.

## 89. **Service Decomposition**
**Definition:** The process of breaking down a monolithic application into smaller, more manageable services, often used to improve modularity, scalability, and maintainability.

## 90. **Blue-Green Deployment**
**Definition:** A deployment strategy where two identical environments (blue and green) are used to switch between the current and new versions of an application, minimizing downtime and allowing for easy rollback.

## 91. **Chaos Engineering**
**Definition:** The practice of intentionally introducing failures and disruptions into a system to test its resilience and ability to recover, helping to identify and address weaknesses.

## 92. **Zero-Downtime Deployment**
**Definition:** A deployment approach that ensures the application remains operational and accessible to users during the deployment process, avoiding any service interruptions.

## 93. **Hot and Cold Data**
**Definition:**
- **Hot Data:** Frequently accessed or updated data that requires fast access and high performance.
- **Cold Data:** Infrequently accessed or archival data that can be stored on slower or cheaper storage media.

## 94. **Request/Response Cycle**
**Definition:** The process of a client sending a request to a server and the server responding with the requested information or an appropriate status message.

## 95. **Service Contract**
**Definition:** A formal agreement between services defining the interface and interactions, including the request and response formats, protocols, and expected behavior.

## 96. **Concurrency Control**
**Definition:** Mechanisms used to manage access to shared resources in a concurrent system, ensuring data integrity and avoiding conflicts or corruption.

## 97. **Data Normalization**
**Definition:** The process of organizing data in a database to reduce redundancy and improve data integrity, typically through the use of normalization forms.

## 98. **WebSockets**
**Definition:** A protocol that enables bidirectional, real-time communication between a client and server over a single, long-lived connection, allowing for interactive and dynamic applications.

## 99. **Content Delivery Network (CDN)**
**Definition:** A network of distributed servers that deliver web content and resources to users based on their geographic location, improving load times and reliability.

## 100. **Cross-Site Scripting (XSS)**
**Definition:** A security vulnerability where an attacker injects malicious scripts into web pages viewed by other users, potentially compromising data and user security.
