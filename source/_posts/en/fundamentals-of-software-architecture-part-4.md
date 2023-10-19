---
title: Fundamentals of Software Architecture Book - Part 4
author: codesandtags
date: 2023-08-07 18:43:27
category: Software Architecture
thumbnail: images/books/cover-fundamentals-software-architecture.png
tags: [software-architecture, books]
excerpt: Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on distributed architecture styles.
---

## Fundamentals of Software Architecture

### Book Details

- **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- **Author**: Mark Richards, Neal Ford
- **Publication Year**: 2020

### Summary

This book is a great introduction to software architecture, it covers the basics of software architecture, Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on the **Distributed Architecture styles**.

<img src="images/books/software-distributed-architectures.png" alt="Distributed Architectures" width="100%"/>

---

## Chapter 13: Service-Based Architecture

<img src="images/books/software-service-based-architecture-rating.png" alt="Service Based Architecture Rating" width="60%"/>

**1. How many services are there in a typical service-based architecture?**

🤓 The number of services within an application context generally range between 4 and 12 services, with the average being about 7 services.

**2. Do you have to break apart a database in service-based architecture?**

🤓 No, it's not mandatory to break apart a database in service-based architecture. However, it's often recommended to have a database per service to achieve data encapsulation and maintain bounded contexts. In these cases it is important to make sure the data in each separate database is not needed by another domain service

**3. Under what circumstances might you want to break apart a database?**

🤓 You might want to break apart a database when:

- Services require independent scaling.
- Different services have different data storage requirements.
- You want to ensure loose coupling and high cohesion.
- There are concerns about data integrity or security that can be mitigated by separating data.

**4. What technique can you use to manage database changes within a service-based architecture?**

🤓 One way to mitigate the impact and risk of database changes is to logically partition the database and manifest the logical partitioning through federated shared libraries.

![Database Logical Partitioning](images/books/software-architecture-database-logical-partitioning.png)

**5. Do domain services require a container (such as Docker) to run?**

🤓 No, domain services don't inherently require a container. However, using containers like Docker can provide benefits in terms of isolation, repeatability, and scalability.

**6. Which architecture characteristics are well supported by the service-based architecture style?**

🤓 The service-based architecture style supports well characteristics like :

- Deployability
- Modularity
- Fault Tolerance
- Overall Cost
- Reliability
- Testability

**7. Why isn’t elasticity well supported in a service-based architecture?**

🤓 Although programmatic scalability and elasticity are certainly possible with this architecture style, more functionality is replicated than with finer-grained services (such as microservices) and as such is not as efficient in terms of machine resources and not as cost-effective. Additionally, if services share resources like databases, it might be harder to scale them independently.

**8. How can you increase the number of architecture quanta in a service-based architecture?**

🤓 You can increase the number of architecture quanta by decomposing larger services into smaller, more granular ones, ensuring each service encapsulates a specific piece of functionality or domain.

---

## Chapter 14: Event-Driven Architecture Style

<img src="images/books/software-event-driven-architecture-rating.png" alt="Event Driven Architecture Rating" width="60%"/>

**1. What are the primary differences between the broker and mediator topologies?**

<img src="images/books/software-tradeoffs-broker-topology.png" alt="Broker Topology Tradeoff" width="60%"/>

- In the **broker topology**, event producers and consumers are directly connected through an event channel, such as a message queue or a topic. The event channel is responsible for routing and delivering events to the consumers, without any central coordination or orchestration. The producers and consumers are loosely coupled and unaware of each other. It uses events.

<img src="images/books/software-tradeoffs-mediator-topology.png" alt="Mediator Topology" width="60%"/>

- In the **mediator topology**, event producers and consumers are indirectly connected through a central mediator, such as an event processor or a stream processor. The mediator is responsible for orchestrating and coordinating the events and the consumers, according to some predefined logic or rules. The producers and consumers are still loosely coupled, but they depend on the mediator for event processing. It uses commands.

**2. For better workflow control, would you use the mediator or broker topology?**

🤓 I would use the mediator topology. The mediator topology allows me to define complex event processing logic, such as filtering, aggregating, transforming, or correlating events, and execute different actions based on the event data and context. The mediator topology also enables me to monitor and manage the event flow and handle errors or exceptions.

**3. Does the broker topology usually leverage a publish-and-subscribe model with topics or a point-to-point model with queues?**

🤓 The broker topology usually leverages a publish-and-subscribe model with topics. A topic is a logical channel that can have multiple subscribers who receive all the events published to that topic. A topic can also have multiple partitions to increase scalability and performance. A publish-and-subscribe model with topics allows me to broadcast events to multiple consumers without knowing who they are or how many there are.

**4. Name two primary advantage of asynchronous communications.**

🤓 Improved **performance and responsiveness**: Asynchronous communications allow the event producers to send events without waiting for a response from the event consumers, which reduces latency and improves throughput. Asynchronous communications also enable the event consumers to react to events as they occur, which increases responsiveness and user satisfaction.

**5. Give an example of a typical request within the request-based model.**

🤓 A user submits an online order form on a website. The website sends a synchronous HTTP request to an order service that validates the order details, calculates the total price, and returns a confirmation message to the website. The website displays the confirmation message to the user.

**6. Give an example of a typical request in an event-based model.**

🤓 A user submits an online order form on a website. The website publishes an OrderPlaced event to a message broker. An order service subscribes to the OrderPlaced event and receives a copy of it. The order service validates the order details, calculates the total price, and publishes an OrderConfirmed event to the message broker. A notification service subscribes to the OrderConfirmed event and receives a copy of it. The notification service sends an email confirmation to the user.

**7. What is the difference between an initiating event and a processing event in event-driven architecture?**

🤓 An **initiating event** is an event that triggers a new business process or workflow. It usually originates from an external source, such as a user action or a sensor input. For example, an OrderPlaced event is an initiating event that starts an order processing workflow.

A **processing event** is an event that occurs as part of an existing business process or workflow. It usually originates from an internal source, such as another service or component. For example, an OrderConfirmed event is a processing event that continues an order processing workflow.

**8. What are some of the techniques for preventing data loss when sending and receiving messages from a queue?**

- **Synchronouse send**: Using durable queues that persist messages until they are consumed or expired.
- **Client Acknowledge mode**: Using acknowledgements that confirm when a message is successfully received or processed by a consumer.
- **Last Participant Support**: Using transactions that ensure atomicity and consistency of message operations.
- Using retries and dead-letter queues that handle failed or poisoned messages.

**9 What are three main driving architecture characteristics for using event-driven architecture?**

<img src="images/books/software-tradeoffs-event-driven-architecture.png" alt="Event Driven Architecture Tradeoffs" width="60%"/>

- **Real-time processing**: Event-driven architecture enables near real-time processing of events as they occur, which supports scenarios such as IoT, streaming analytics, fraud detection, etc.
- **Loose coupling**: Event-driven architecture enables loose coupling between event producers and consumers, which supports scenarios such as microservices, cloud-native applications, integration platforms, etc.
- **High scalability**: Event-driven architecture enables high scalability of event producers and consumers, which supports scenarios such as big data, social media, e-commerce, etc.

**10. What are some of the architecture characteristics that are not well supported in event-driven architecture?**

- Simplicity
- Testability
- Overall cost
- Deployability

Other characteristics to consider are:

- **Synchronous communication**: Event-driven architecture relies on asynchronous communication between event producers and consumers, which does not support scenarios that require immediate feedback or confirmation from another service or component.
- **Complex transactions**: Event-driven architecture does not support complex transactions that span multiple services or components, which require coordination, consistency, and rollback mechanisms.
- **Querying data**: Event-driven architecture does not support querying data across multiple services or components, which require aggregation, joining, filtering, and sorting mechanisms.

---

## Chapter 15: Space-Based Architecture

<img src="images/books/software-space-based-architecture-rating.png" alt="Layered Architecture Rating" width="60%"/>

Where does space-based architecture get its name from?

What is a primary aspect of space-based architecture that differentiates it from other architecture styles?

Name the four components that make up the virtualized middleware within a space-based architecture.

What is the role of the messaging grid?

What is the role of a data writer in space-based architecture?

Under what conditions would a service need to access data through the data reader?

Does a small cache size increase or decrease the chances for a data collision?

What is the difference between a replicated cache and a distributed cache? Which one is typically used in space-based architecture?

List three of the most strongly supported architecture characteristics in space-based architecture.

Why does testability rate so low for space-based architecture?

---

## Chapter 16: Orchestration-Driven Service-Oriented Architecture

<img src="images/books/software-orchestration-driven-service-oriented-architecture-rating.png" alt="Layered Architecture Rating" width="60%"/>

**What was the main driving force behind service-oriented architecture?**

- The main driving force behind service-oriented architecture was the need to integrate disparate systems and applications and reuse existing functionality, given the costs and complexities of building and maintaining monolithic applications.

**What are the four primary service types within a service-oriented architecture?**

- **Business Services**: It provides the entry point into the service-oriented architecture and is responsible for exposing the business functionality to the outside world.
- **Entprise Services**: It provides the core business functionality and is responsible for implementing the business logic.
- **Application Services**: It provides the application-specific functionality and is responsible for implementing the application logic.
- **Infrastructure Services**: It provides the infrastructure-specific functionality and is responsible for implementing the infrastructure logic, monitoring, logging or authentication.

**List some of the factors that led to the downfall of service-oriented architecture.**

- **Complexity**: Service-oriented architecture is inherently complex, which makes it difficult to design, develop, and maintain.
- **Performance**: Service-oriented architecture is inherently slow, which makes it difficult to achieve high performance.
- **Scalability**: Service-oriented architecture is inherently inefficient, which makes it difficult to scale.
- **Coupling**: Service-oriented architecture is inherently tightly coupled, which makes it difficult to achieve loose coupling.

**Is service-oriented architecture technically partitioned or domain partitioned?**

- Service-oriented architecture is technically partitioned because it is based on the technical capabilities of the underlying infrastructure, such as messaging, transactions, or security.

**How is domain reuse addressed in SOA? How is operational reuse addressed?**

- Domain reuse is addressed in SOA by implementing the business logic as enterprise services that can be reused across multiple applications.

---

## Chapter 17: Microservices Architecture

<img src="images/books/software-microservices-architecture-rating.png" alt="Layered Architecture Rating" width="60%"/>

**1. Why is the bounded context concept so critical for microservices architecture?**

🤓 ...

**2. What are three ways of determining if you have the right level of granularity in a microservice?**

🤓 ...

**3. What functionality might be contained within a sidecar?**

🤓 ...

**4. What is the difference between orchestration and choreography? Which does microservices support? Is one communication style easier in microservices?**

🤓 ...

**5. What is a saga in microservices?**

🤓 ...

**6. Why are agility, testability, and deployability so well supported in microservices?**

🤓 ...

**7. What are two reasons performance is usually an issue in microservices?**

🤓 ...

**8. Is microservices a domain-partitioned architecture or a technically partitioned one?**

🤓 ...

**9. Describe a topology where a microservices ecosystem might be only a single quantum.**

🤓 ...

**10. How was domain reuse addressed in microservices? How was operational reuse addressed?**

🤓 ...
