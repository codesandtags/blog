---
title: Fundamentals of Software Architecture Book - Part 3
author: codesandtags
date: 2023-07-26 18:43:27
category: Software Architecture
thumbnail: images/books/cover-fundamentals-software-architecture.png
tags: [software-architecture, books]
excerpt: Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on Architecture styles.
---

## Fundamentals of Software Architecture

### Book Details

- **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- **Author**: Mark Richards, Neal Ford
- **Publication Year**: 2020

### Summary

This book is a great introduction to software architecture, it covers the basics of software architecture, Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on **Architecture styles**.

---

## Chapter 9: Architecture Styles

1. **List the eight fallacies of distributed computing.**

- Falacy #1: The network is reliable.
- Falacy #2: Latency is zero.
- Falacy #3: Bandwidth is infinite.
- Falacy #4: The network is secure.
- Falacy #5: Topology doesn't change.
- Falacy #6: There is only one administrator.
- Falacy #7: Transport cost is zero.
- Falacy #8: The network is homogeneous.

1. **Name three challenges that distributed architectures have that monolithic architectures don’t.**

- Distributed logging
- Distributed transactions
- Contract maintenance and versioning

2. **What is stamp coupling?**

🤓 Stamp coupling occurs when modules share a composite data structure and use only parts of it, possibly different parts (e.g., passing a whole record to a function that needs only one field of it).

3. **What are some ways of addressing stamp coupling?**

- Create private RESTful API endpoints
- Use field selectors in the contract
- Use GraphQL to decouple contracts
- Use value-driven contracts with consumer-driven contracts (CDCs)
- Use internal messaging endpoints

---

## Chapter 10: Layered Architecture Style

What is the difference between an open layer and a closed layer?

🤓 ...

Describe the layers of isolation concept and what the benefits are of this concept.

🤓 ...

What is the architecture sinkhole anti-pattern?

🤓 ...

What are some of the main architecture characteristics that would drive you to use a layered architecture?

🤓 ...

Why isn’t testability well supported in the layered architecture style?

🤓 ...

Why isn’t agility well supported in the layered architecture style?

🤓 ...

---

## Chapter 11: Pipeline Architecture

Can pipes be bidirectional in a pipeline architecture?

🤓 ...

Name the four types of filters and their purpose.

🤓 ...

Can a filter send data out through multiple pipes?

🤓 ...

Is the pipeline architecture style technically partitioned or domain partitioned?

🤓 ...

In what way does the pipeline architecture support modularity?

🤓 ...

Provide two examples of the pipeline architecture style.

🤓 ...

---

## Chapter 12: Microkernel Architecture

What is another name for the microkernel architecture style?

🤓 ...

Under what situations is it OK for plug-in components to be dependent on other plug-in components?

🤓 ...

What are some of the tools and frameworks that can be used to manage plug-ins?

🤓 ...

What would you do if you had a third-party plug-in that didn’t conform to the standard plug-in contract in the core system?

🤓 ...

Provide two examples of the microkernel architecture style.

🤓 ...

Is the microkernel architecture style technically partitioned or domain partitioned?

🤓 ...

🤓 ...

Why is the microkernel architecture always a single architecture quantum?

🤓 ...

What is domain/architecture isomorphism?

🤓 ...

---

## Chapter 13: Service-Based Architecture

How many services are there in a typical service-based architecture?

🤓 ...

Do you have to break apart a database in service-based architecture?

🤓 ...

Under what circumstances might you want to break apart a database?

🤓 ...

What technique can you use to manage database changes within a service-based architecture?

🤓 ...

Do domain services require a container (such as Docker) to run?

🤓 ...

Which architecture characteristics are well supported by the service-based architecture style?

🤓 ...

Why isn’t elasticity well supported in a service-based architecture?

🤓 ...

How can you increase the number of architecture quanta in a service-based architecture?

🤓 ...

---

## Chapter 14: Event-Driven Architecture Style

What are the primary differences between the broker and mediator topologies?

🤓 ...

For better workflow control, would you use the mediator or broker topology?

🤓 ...

Does the broker topology usually leverage a publish-and-subscribe model with topics or a point-to-point model with queues?

🤓 ...

Name two primary advantage of asynchronous communications.

🤓 ...

Give an example of a typical request within the request-based model.

🤓 ...

Give an example of a typical request in an event-based model.

🤓 ...

What is the difference between an initiating event and a processing event in event-driven architecture?

🤓 ...

What are some of the techniques for preventing data loss when sending and receiving messages from a queue?

🤓 ...

What are three main driving architecture characteristics for using event-driven architecture?

🤓 ...

What are some of the architecture characteristics that are not well supported in event-driven architecture?

🤓 ...

---

## Chapter 15: Space-Based Architecture

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

What was the main driving force behind service-oriented architecture?

What are the four primary service types within a service-oriented architecture?

List some of the factors that led to the downfall of service-oriented architecture.

Is service-oriented architecture technically partitioned or domain partitioned?

How is domain reuse addressed in SOA? How is operational reuse addressed?

---

## Chapter 17: Microservices Architecture

Why is the bounded context concept so critical for microservices architecture?

🤓 ...

What are three ways of determining if you have the right level of granularity in a microservice?

🤓 ...

What functionality might be contained within a sidecar?

🤓 ...

What is the difference between orchestration and choreography? Which does microservices support? Is one communication style easier in microservices?

🤓 ...

What is a saga in microservices?

🤓 ...

Why are agility, testability, and deployability so well supported in microservices?

🤓 ...

What are two reasons performance is usually an issue in microservices?

🤓 ...

Is microservices a domain-partitioned architecture or a technically partitioned one?

🤓 ...

Describe a topology where a microservices ecosystem might be only a single quantum.

🤓 ...

How was domain reuse addressed in microservices? How was operational reuse addressed?

🤓 ...

---

## Chapter 18: Choosing the Appropriate Architecture Style

In what way does the data architecture (structure of the logical and physical data models) influence the choice of architecture style?

🤓 ...

How does it influence your choice of architecture style to use?

🤓 ...

Delineate the steps an architect uses to determine style of architecture, data partitioning, and communication styles.

🤓 ...

What factor leads an architect toward a distributed architecture?

🤓 ...
