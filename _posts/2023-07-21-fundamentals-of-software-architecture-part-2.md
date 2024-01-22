---
layout: post
title: Fundamentals of Software Architecture Book - Part 2
date: 2023-07-21 18:43 -0500
author: codesandtags
categories: [Software Architecture]
tags: [books, fundamentals, software]
---

![Cover Fundamentals Software Architecture](/assets/img/posts/cover-fundamentals-software-architecture.png)

## Fundamentals of Software Architecture

### Book Details

- 📖 **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- ✍️ **Author**: Mark Richards, Neal Ford
- 📆 **Publication Year**: 2020

### Summary

Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on Architecture characteristics and fitness functions.

---

## Chapter 5: Identifying Architecture Characteristics

1. **Give a reason why it is a good practice to limit the number of characteristics (“-ilities”) an architecture should support.**

🤓 It's good practice to limit the number of "-ilities" because each characteristic can introduce complexity into the architecture, potentially affecting its performance, maintainability, and other aspects. Moreover, some characteristics can conflict with others, making it a balancing act to satisfy all needs. Focusing on the most critical characteristics ensures a lean and effective architecture.

2. **True or false: most architecture characteristics come from business requirements and user stories.**

🤓 **False**. While business requirements and user stories do influence the architecture characteristics, they are not the sole sources. Architecture characteristics are often also derived from technical constraints, non-functional requirements, or the strategic direction of the organization.

3. **If a business stakeholder states that time-to-market (i.e., getting new features and bug fixes pushed out to users as fast as possible) is the most important business concern, which architecture characteristics would the architecture need to support?**

![Architectural Characteristics Table](/assets/img/posts/software-architecture-characteristics-table.png)

🤓 The architecture would need to support characteristics such as

- **Agility** (for ease of implementing new features and fixing bugs)
- **Deployability** (for fast and efficient deployment processes)
- **Testability** (to quickly verify new features and bug fixes).

4. **What is the difference between scalability and elasticity?**

🤓 **Scalability** is the ability of a system to handle increased load by adding more resources or using existing resources more efficiently. **Elasticity**, on the other hand, is the ability of a system to dynamically scale up and down based on the demand, often realized through cloud-based infrastructures.

5. **You find out that your company is about to undergo several major acquisitions to significantly increase its customer base. Which architectural characteristics should you be worried about?**

🤓 The significant increase in the customer base would mean you should be particularly concerned about :

- **Scalability** (to handle the increased load)
- **Performance** (to ensure system responsiveness under increased load)
- **Interoperability** (if the acquisitions involve integrating with other systems).

---

## Chapter 6: Measuring and Governing Architecture Characteristics

1. **Why is cyclomatic complexity such an important metric to analyze for architecture?**

🤓 **Cyclomatic complexity is a measure of the number of linearly independent paths through a program's source code**, essentially assessing its complexity. High cyclomatic complexity often indicates that a system might be hard to maintain, understand, and modify. Thus, it can serve as an early warning signal for potential architectural problems, encouraging refactoring or redesign to ensure simplicity and maintainability.

2. **What is an architecture fitness function? How can they be used to analyze an architecture?**

🤓 An architecture fitness function is a way to quantitatively measure an architectural characteristic to determine how well the architecture aligns with the intended design principles. They serve as a guide to developers by enforcing architectural constraints and driving architectural decisions. Fitness functions can be used to continually assess and validate that the evolving architecture remains fit for its purpose throughout its lifecycle.

3. **Provide an example of an architecture fitness function to measure the scalability of an architecture.**

🤓 An example of a fitness function for scalability could be the response time of the system as load increases. You could simulate a certain number of users (for instance, 10,000 users) hitting your system simultaneously, and measure the response time. If the response time stays within acceptable boundaries, your system can be considered scalable to that extent.

4. **What is the most important criteria for an architecture characteristic to allow architects and developers to create fitness functions?**

🤓 The most important criteria for an architecture characteristic is that it must be **quantifiable** and **measurable**. Fitness functions are objective metrics, so the architectural characteristic they are measuring must be translated into something that can be measured consistently and accurately. **If a characteristic can't be measured, it can't be tracked or evaluated through a fitness function**.

---

## Chapter 7: Scope of Architecture Characteristics

1. **What is an architectural quantum, and why is it important to architecture?**

🤓 An architectural quantum is the smallest independent, deployable unit in an architecture. The quantum often corresponds to a microservice in a microservices architecture. The concept is important because it helps architects design systems that are modular, loosely coupled, and can evolve independently.

2. **Assume a system consisting of a single user interface with four independently deployed services, each containing its own separate database. Would this system have a single quantum or four quanta? Why?**

🤓 This system would have four quanta. Each of the four services is independently deployable and contains its own database, thus each service is an architectural quantum.

3. **Assume a system with an administration portion managing static reference data (such as the product catalog, and warehouse information) and a customer-facing portion managing the placement of orders. How many quanta should this system be and why? If you envision multiple quanta, could the admin quantum and customer-facing quantum share a database? If so, in which quantum would the database need to reside?**

🤓 This system would most likely have two quanta - one for the administration portion and one for the customer-facing portion. Each has distinct responsibilities and could evolve independently. While the two quanta could technically share a database, it would be better for each to have its own to maintain the principle of independent deployability. Sharing a database would introduce a level of coupling that could inhibit the ability to deploy and scale each quantum independently. If they were to share a database, it would reside in neither quantum specifically, but would become a shared resource, which would need to be carefully managed to avoid conflicts and ensure consistency.

---

## Chapter 8: Component-Based Thinking

1. **We define the term component as a building block of an application—something the application does. A component usually consist of a group of classes or source files. How are components typically manifested within an application or service?**

![Architectural Characteristics Table](/assets/img/posts/software-architecture-component-levels.png)

🤓 Components are usually manifested within an application or service as distinct units of functionality. They can be organized as modules, packages, or services, each encapsulating a set of related functionalities. In object-oriented languages, a component can comprise multiple classes, interfaces, or packages. In a microservices architecture, each microservice can be considered a component.

1. **What is the difference between technical partitioning and domain partitioning? Provide an example of each.**

![Architectural Characteristics Table](/assets/img/posts/software-architecture-technical-and-domain-partioning.png)

🤓 **Technical partitioning** organizes components based on their technical role (like UI, business logic, data access), while **domain partitioning** organizes components based on business functionality or domain concepts. An example of technical partitioning could be a **three-tier architecture with separate layers** for presentation, business logic, and data storage. An example of domain partitioning **could be a microservices architecture** where each service corresponds to a specific business capability, like customer management or order processing.

1. **What is the advantage of domain partitioning?**

🤓 **Domain partitioning** aligns the software system with the business domain, making the system easier to understand and modify according to business changes. It facilitates independent development and deployment of different business capabilities, which can improve **speed, scalability, and resilience**.

4. **Under what circumstances would technical partitioning be a better choice over domain partitioning?**

🤓 Technical partitioning might be a better choice when building simple or monolithic applications where business functionality is not complex or diversified enough to justify the overhead of domain partitioning. It might also be preferred when the team's technical expertise significantly outweighs their understanding of the business domain.

5. **What is the entity trap? Why is it not a good approach for component identification?**

🤓 The entity trap is a common mistake made when identifying components based on entities in the business domain, **which often leads to anemic domain models with components that lack meaningful behavior**. This approach is problematic because it encourages a data-centric view of the system rather than focusing on the behavior and responsibilities of components, which can lead to poor encapsulation and high coupling.

6. **When might you choose the workflow approach over the Actor/Actions approach when identifying core components?**

🤓 The **workflow approach** might be preferred when the system's primary purpose is to facilitate a complex series of steps or transactions, where the sequence and interaction of operations are critical. On the other hand, the **Actor/Actions** approach could be better when the system is more centered around user interactions or when you have distinct user roles performing different actions on the system. The best choice depends on the specific context and requirements of the system.
