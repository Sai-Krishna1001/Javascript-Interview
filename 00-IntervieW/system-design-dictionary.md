# System Design Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **System Design**       | The process of defining the architecture, components, and interfaces of a system to meet specified requirements and ensure scalability, reliability, and performance. |
| **Architecture**        | The high-level structure of a system, including its components, their interactions, and how they are organized to achieve system goals. |
| **Scalability**         | The ability of a system to handle increased load or demand by adding resources or optimizing performance without compromising functionality. |
| **Load Balancing**      | The distribution of incoming network traffic across multiple servers to ensure no single server is overwhelmed and to improve reliability and performance. |
| **Microservices**       | An architectural style where an application is composed of loosely coupled, independently deployable services that communicate through APIs. |
| **Monolithic Architecture** | A traditional design where an application is built as a single, unified unit, often leading to tight coupling between components. |
| **Service-Oriented Architecture (SOA)** | An architectural design where services are provided to other components via a communication protocol over a network. SOA focuses on the use of services for application development. |
| **RESTful API**         | An architectural style for designing networked applications, using HTTP requests to access and manipulate resources represented as JSON or XML. |
| **GraphQL**             | A query language for APIs and a runtime for executing those queries by providing a more efficient and flexible alternative to RESTful APIs. |
| **Caching**             | The practice of storing frequently accessed data in a temporary storage area to reduce latency and improve performance. |
| **Database Sharding**   | The process of dividing a database into smaller, more manageable pieces called shards, which are distributed across multiple servers to improve performance and scalability. |
| **Replication**         | The process of copying data from one database server to another to ensure data redundancy, availability, and fault tolerance. |
| **Consistency**         | The property of a distributed system ensuring that all nodes or replicas have the same data at any given time. Consistency is often balanced with availability and partition tolerance (CAP theorem). |
| **Availability**        | The ability of a system to remain operational and accessible, even in the presence of failures or maintenance. Availability is part of the CAP theorem. |
| **Partition Tolerance** | The ability of a system to continue functioning despite network partitions or communication failures between nodes. Partition tolerance is part of the CAP theorem. |
| **CAP Theorem**         | A principle that states that in a distributed system, it is impossible to simultaneously achieve Consistency, Availability, and Partition Tolerance. Systems must choose a trade-off between these properties. |
| **Load Testing**        | The process of evaluating a system's performance under a specific load or stress to determine its capacity and identify potential bottlenecks. |
| **Fault Tolerance**     | The ability of a system to continue operating correctly even in the presence of hardware or software failures. Fault tolerance is achieved through redundancy and error handling. |
| **Failover**            | The automatic switching to a standby system or server in the event of a failure or malfunction of the primary system. Failover ensures continuity and reduces downtime. |
| **Redundancy**          | The practice of having duplicate components or systems in place to provide backup and ensure continued operation in case of failures. |
| **Elasticity**          | The ability of a system to dynamically scale resources up or down based on demand, ensuring efficient resource utilization and cost management. |
| **High Availability**   | A design approach that ensures a system remains operational and accessible with minimal downtime, often achieved through redundancy and failover mechanisms. |
| **Latency**             | The time it takes for a system to respond to a request or perform an action. Low latency is crucial for real-time applications and user experience. |
| **Throughput**          | The amount of data or number of requests a system can handle in a given time period. High throughput indicates a system's capacity to process large volumes of data efficiently. |
| **Horizontal Scaling**  | The practice of adding more servers or instances to distribute the load and increase capacity. Horizontal scaling improves scalability and fault tolerance. |
| **Vertical Scaling**    | The practice of increasing the resources (CPU, RAM) of a single server or instance to handle more load. Vertical scaling has limits and may lead to single points of failure. |
| **API Gateway**         | A server that acts as an entry point for requests to microservices. It handles routing, load balancing, authentication, and other cross-cutting concerns. |
| **Message Queue**       | A component that facilitates asynchronous communication between different parts of a system by sending and receiving messages or events. |
| **Event-Driven Architecture** | An architectural style where components react to events or changes in the system state, enabling decoupling and responsiveness to events. |
| **Data Modeling**       | The process of designing the structure of data and its relationships within a database or storage system, including schemas and data types. |
| **Normalization**       | The process of organizing data in a database to reduce redundancy and improve data integrity by dividing data into related tables. |
| **Denormalization**     | The process of combining tables to reduce the complexity of queries and improve read performance at the cost of data redundancy. |
| **Distributed System**  | A system that consists of multiple interconnected components or nodes that work together to achieve a common goal, often spread across different locations. |
| **Concurrency**         | The ability of a system to handle multiple tasks or processes simultaneously, ensuring efficient resource utilization and responsiveness. |
| **Backup and Recovery** | The process of creating copies of data and restoring it in case of data loss or corruption. Backups are essential for data protection and disaster recovery. |
| **Versioning**          | The practice of managing different versions of data, APIs, or software components to track changes and ensure compatibility across versions. |
| **Service Registry**    | A directory that maintains a list of available services and their locations, enabling service discovery and dynamic communication between services in a microservices architecture. |
| **Service Discovery**   | The process of automatically locating and connecting to services in a distributed system, often facilitated by a service registry. |
| **Infrastructure as Code (IaC)** | The practice of managing and provisioning infrastructure through code and automation tools, allowing for consistent and repeatable deployments. |
| **Containerization**    | The practice of packaging applications and their dependencies into containers, which provide a consistent runtime environment and facilitate deployment across different environments. |
| **Orchestration**       | The process of managing and coordinating containers, services, and deployments, often using tools like Kubernetes to automate scaling, deployment, and monitoring. |
| **DevOps**              | A set of practices and cultural philosophies that aim to improve collaboration between development and operations teams, focusing on continuous integration, continuous delivery, and automation. |
