---
title: Fundamentals of Software Architecture Book - Part 3
author: codesandtags
date: 2023-08-02 18:43:27
category: Software Architecture
thumbnail: images/books/cover-fundamentals-software-architecture.png
tags: [software-architecture, books]
excerpt: Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on Architecture styles, starting with the Monolithic Architecture.
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

<img src="images/books/software-architecture-styles.png" alt="Layered Styles" width="100%"/>

1. **List the eight fallacies of distributed computing.**

- Falacy #1: The network is reliable.
- Falacy #2: Latency is zero.
- Falacy #3: Bandwidth is infinite.
- Falacy #4: The network is secure.
- Falacy #5: Topology doesn't change.
- Falacy #6: There is only one administrator.
- Falacy #7: Transport cost is zero.
- Falacy #8: The network is homogeneous.

2. **Name three challenges that distributed architectures have that monolithic architectures don’t.**

- Distributed logging
- Distributed transactions
- Contract maintenance and versioning

3. **What is stamp coupling?**

🤓 Stamp coupling occurs when modules share a composite data structure and use only parts of it, possibly different parts (e.g., passing a whole record to a function that needs only one field of it).

4. **What are some ways of addressing stamp coupling?**

- Create private RESTful API endpoints
- Use field selectors in the contract
- Use GraphQL to decouple contracts
- Use value-driven contracts with consumer-driven contracts (CDCs)
- Use internal messaging endpoints

---

## Chapter 10: Layered Architecture Style

### Layered Architecture Rating

<img src="images/books/software-layered-architecture-rating.png" alt="Layered Architecture Rating" width="60%"/>

1. **What is the difference between an open layer and a closed layer?**

🤓 A closed layer means that as a request moves top-down through the layers, it can only move to the next layer down. An open layer means that as a request moves top-down through the layers, it can move to any layer below it.

2. **Describe the layers of isolation concept and what the benefits are of this concept.**

🤓 The layers of isolation concept means that changes made in one layer of the architecture generally don't impact or affect components in other layers. This concept is important because it allows for the architecture to be more flexible and agile. The benefit is that any layer in the architecture can be changed without impacting other layers.

3. **What is the architecture sinkhole anti-pattern?**

🤓 This anti-pattern occurs when requests move from layer to layer as a simple pass-through. This is a problem because it means that the architecture is not providing any value.

4. **What are some of the main architecture characteristics that would drive you to use a layered architecture?**

🤓 Simplicity, Overall Cost, and Reliability are some of the main architecture characteristics that would drive you to use a layered architecture. It's also a good architecture style to use when you have a small team of developers or very tight budget.

5. **Why isn’t testability well supported in the layered architecture style?**

🤓 Most developers are not going to spend hours executing the entire regression test suite every time they make a change to a single layer, particularly along with dozens of other changes being made to the monolithic applicationi at the same time.

6. **Why isn’t agility well supported in the layered architecture style?**

🤓 Given the monolitic approach of the layered architecture style, it's not easy to make changes to the architecture quickly.

---

## Chapter 11: Pipeline Architecture

### Pipeline Architecture Rating

<img src="images/books/software-pipeline-architecture-rating.png" alt="Layered Architecture Rating" width="60%"/>

1. **Can pipes be bidirectional in a pipeline architecture?**

🤓 No, pipes are unidirectional.

2. **Name the four types of filters and their purpose.**

- **Producer**: The starting point of a process, outbound only, sometimes called the source.

**Transformer**: Accepts input, optionally performs a transformation on some or all of the data, then forwards it to the outbound pipe. Functional advocates will recognize this feature as map.

- **Tester**: Accepts input, tests one or more criteria, then optionally produces output, based on the test. Functional programmers will recognize this as similar to reduce.

- **Consumer**: The termination point for the pipeline flow. Consumers sometimes persist the final result of the pipeline process to a database, or they may display the final results on a user interface screen.

3. **Can a filter send data out through multiple pipes?**

🤓 Filters are self-contained, independent from other filters. Filters should perform one task only. Composite tasks should be handled by a sequence of filters rather than a single one.

4. **Is the pipeline architecture style technically partitioned or domain partitioned?**

🤓 Pipeline architecture is technically partitioned.

5. **In what way does the pipeline architecture support modularity?**

🤓 Pipeline Architecture supports modularity by allowing you to add or remove filters without impacting the rest of the pipeline.

6. **Provide two examples of the pipeline architecture style.**

- Unix pipes and the Java 8 Streams API.
- Apache Kafka Streams
- ETL (Extract, Transform, Load) processes

---

## Chapter 12: Microkernel Architecture

### Microkernel Architecture Rating

<img src="images/books/software-microkernel-architecture-rating.png" alt="Layered Architecture Rating" width="60%"/>

1. **What is another name for the microkernel architecture style?**

🤓 The microkernel architecture style is also known as the plug-in architecture style.

1. **Under what situations is it OK for plug-in components to be dependent on other plug-in components?**

🤓 It's OK for plug-in components to be dependent on other plug-in components when the plug-in components are part of the same architecture quantum.

2. **What are some of the tools and frameworks that can be used to manage plug-ins?**

🤓 Open Service Gateway Initiative (OSGi) for Java, Penrose (Java), Jigsaw (Java), or Prism (.NET).

3. **What would you do if you had a third-party plug-in that didn’t conform to the standard plug-in contract in the core system?**

🤓 You would create an adapter to convert the third-party plug-in to conform to the standard plug-in contract in the core system.

4. **Provide two examples of the microkernel architecture style.**

- Eclipse IDE
- Jira
- Jenkins
- Backstage (Spotify)

5. **Is the microkernel architecture style technically partitioned or domain partitioned?**

🤓 Microkernel architecture can be either technically partitioned or domain partitioned.

1. **Why is the microkernel architecture always a single architecture quantum?**

🤓 The microkernel architecture is always a single architecture quantum because the core system is the only component that is not a plug-in.

7. **What is domain/architecture isomorphism?**

Domain/architecture isomorphism is a concept that compares the shape of a problem domain with the shape of an architecture style, and determines how well they match. It is based on the mathematical term isomorphism, which means equal in form or shape. The idea is that different problems have different shapes, and different architectures have different shapes, and some shapes fit better than others

---
