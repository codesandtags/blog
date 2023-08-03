---
title: Fundamentals of Software Architecture Book - Part 4
author: codesandtags
date: 2023-07-24 18:43:27
category: Software Architecture
thumbnail: images/books/cover-fundamentals-software-architecture.png
tags: [software-architecture, books]
excerpt: Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford. This part is focused on Architecture decisions.
---

## Fundamentals of Software Architecture

### Book Details

- **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- **Author**: Mark Richards, Neal Ford
- **Publication Year**: 2020

### Summary

This book is a great introduction to software architecture, it covers the basics of software architecture, and it's a great starting point for anyone who wants to learn more about software architecture. Here are some of the topics covered in this book and I want to answer the self-assessment questions for each chapter.

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

## Chapter 19: Architecture Decisions

What is the covering your assets anti-pattern?

What are some techniques for avoiding the email-driven architecture anti-pattern?

What are the five factors Michael Nygard defines for identifying something as architecturally significant?

What are the five basic sections of an architecture decision record?

In which section of an ADR do you typically add the justification for an architecture decision?

Assuming you don’t need a separate Alternatives section, in which section of an ADR would you list the alternatives to your proposed solution?

What are three basic criteria in which you would mark the status of an ADR as Proposed?

---

## Chapter 20: Analyzing Architecture Risk

What are the two dimensions of the risk assessment matrix?

What are some ways to show direction of particular risk within a risk assessment? Can you think of other ways to indicate whether risk is getting better or worse?

Why is it necessary for risk storming to be a collaborative exercise?

Why is it necessary for the identification activity within risk storming to be an individual activity and not a collaborative one?

What would you do if three participants identified risk as high (6) for a particular area of the architecture, but another participant identified it as only medium (3)?

What risk rating (1-9) would you assign to unproven or unknown technologies?

---

## Chapter 21: Diagramming and Presenting Architecture

What is irrational artifact attachment, and why is it significant with respect to documenting and diagramming architecture?

What do the 4 C’s refer to in the C4 modeling technique?

When diagramming architecture, what do dotted lines between components mean?

What is the bullet-riddled corpse anti-pattern? How can you avoid this anti-pattern when creating presentations?

What are the two primary information channels a presenter has when giving a presentation?

---

## Chapter 22: Making Teams Effective

What are three types of architecture personalities? What type of boundary does each personality create?

What are the five factors that go into determining the level of control you should exhibit on the team?

What are three warning signs you can look at to determine if your team is getting too big?

List three basic checklists that would be good for a development team.

---

## Chapter 23: Negotiation and Leadership Skills

Why is negotiation so important as an architect?

Name some negotiation techniques when a business stakeholder insists on five nines of availability, but only three nines are really needed.

What can you derive from a business stakeholder telling you “I needed it yesterday”?

Why is it important to save a discussion about time and cost for last in a negotiation?

What is the divide-and-conquer rule? How can it be applied when negotiating architecture characteristics with a business stakeholder? Provide an example.

List the 4 C’s of architecture.

Explain why it is important for an architect to be both pragmatic and visionary.

What are some techniques for managing and reducing the number of meetings you are invited to?

---

## Chapter 24: Developing a Career Path

What is the 20-minute rule, and when is it best to apply it?

What are the four rings in the ThoughtWorks technology radar, and what do they mean? How can they be applied to your radar?

Describe the difference between depth and breadth of knowledge as it applies to software architects. Which should architects aspire to maximize?
