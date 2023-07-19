---
title: Fundamentals of Software Architecture Book Part 1
date: 2023-07-17 18:50:03
tags: [software-architecture, books]
excerpt: Here I have the relevant points to me of the book Fundamentals of Software Architecture by Mark Richards and Neal Ford.
category: Software Architecture
thumbnail: images/books/cover-fundamentals-software-architecture.png
---

## Fundamentals of Software Architecture

### Book Details

- **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- **Author**: Mark Richards, Neal Ford
- **Publication Year**: 2020

This year **2023** I've started to read more books, and I've decided to write a summary of each book I read. This is the first one, and I hope you enjoy it.

### Summary

This book is a great introduction to software architecture, it covers the basics of software architecture, and it's a great starting point for anyone who wants to learn more about software architecture. Here are some of the topics covered in this book and I want to answer the self-assessment questions for each chapter.

## Chapter 1: Introduction

1. **What are the four dimensions that define software architecture?**

![four dimensions software architecture](images/books/software-architecture-four-dimensions.png)

- **Architecture characteristics**: Define the success criteria of a system, which is generally orthogonal to the functionality of the system. Notice that all of the characteristics listed do not require knowledge of the functionality of the system, yet they are required in order for the system to function properly.
- **Architecture Decisions**: Define the rules for how a system should be constructed. For example, an architect might make an architecture decision that only the business and services layers within a layered architecture can access the database.
- **Structure**: Refers to the type of architecture style (or styles) the system is implemented in (such as microservices, layered, or microkernel)
- Design principles: Define a guideline of principles rather than a hard-and-fast rule.

2. **What is the difference between an architecture decision and a design principle?**

- Architecture decisions form the constraints of the system and direct the development teams on what is and what isn’t allowed.
- Design principles are guidelines that help development teams make decisions about how to implement the system.

3. **List the eight core expectations of a software architect**

- Make architecture decisions
- Continually analyze the architecture
- Keep current with latest trends
- Ensure compliance with decisions
- Diverse exposure and experience
- Have business domain knowledge
- Possess interpersonal skills
- Understand and navigate politics

4. **What is the First Law of Software Architecture?**

> Everything in software architecture is a trade-off. -- First Law of Software Architecture

> Why is more important than how. -- Second Law of Software Architecture

## Chapter 2: Architectural Thinking

1. **Describe the traditional approach of architecture versus development and explain why that approach no longer works.**

2. **List the three levels of knowledge in the knowledge triangle and provide an example of each.**

3. **Why is it more important for an architect to focus on technical breadth rather than technical depth?**

4. **What are some of the ways of maintaining your technical depth and remaining hands-on as an architect?**
