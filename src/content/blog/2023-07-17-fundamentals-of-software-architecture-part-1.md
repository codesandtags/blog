---
layout: post
title: Fundamentals of Software Architecture Book - Part 1
date: 2023-07-17 20:15 -0500
author: codesandtags
categories: [Software Architecture]
tags: [books, fundamentals, software]
---

![Cover Fundamentals Software Architecture](/assets/img/posts/cover-fundamentals-software-architecture.png)

Here I have the relevant points to me of the book Fundamentals of Software Architecture by **Mark Richards** and **Neal Ford**. This part is focused on foundations.

## Fundamentals of Software Architecture

### Book Details

- 📖 **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- ✍️ **Author**: Mark Richards, Neal Ford
- 📆 **Publication Year**: 2020

This year **2023** I've started to read more books, and I've decided to write a summary of each book I read. This is the first one, and I hope you enjoy it.

### Summary

This book is a great introduction to software architecture, it covers the basics of software architecture, and it's a great starting point for anyone who wants to learn more about software architecture. Here are some of the topics covered in this book and I want to answer the self-assessment questions for each chapter.

---

## Chapter 1: Introduction

1. **What are the four dimensions that define software architecture?**

![four dimensions software architecture](/assets/img/posts/software-architecture-four-dimensions.png)

- **Architecture characteristics**: Define the success criteria of a system, which is generally orthogonal to the functionality of the system. Notice that all of the characteristics listed do not require knowledge of the functionality of the system, yet they are required in order for the system to function properly.
- **Architecture Decisions**: Define the rules for how a system should be constructed. For example, an architect might make an architecture decision that only the business and services layers within a layered architecture can access the database.
- **Structure**: Refers to the type of architecture style (or styles) the system is implemented in (such as microservices, layered, or microkernel)
- Design principles: Define a guideline of principles rather than a hard-and-fast rule.

2. **What is the difference between an architecture decision and a design principle?**

- Architecture decisions form the constraints of the system and direct the development teams on what is and what isn’t allowed.
- Design principles are guidelines that help development teams make decisions about how to implement the system.

3. **List the eight core expectations of a software architect**

🤓 The eight core expectations of a software architect are:

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

---

## Chapter 2: Architectural Thinking

1. **Describe the traditional approach of architecture versus development and explain why that approach no longer works.**

![Traditional approach architecture vs design](/assets/img/posts/software-architecture-traditional-approach.png)

🤓 The traditional approach implies that architecture is something that is fully defined up front and then merely implemented by developers. However, this approach has been found to have several major drawbacks:

- **Lack of Flexibility**: Once the architecture is defined, it can be very difficult to change. However, software development is often a highly unpredictable process, and changes in requirements or technologies may necessitate changes in the architecture.

- **Communication Breakdown**: Because architects and developers often work in isolation from each other, there can be a lack of understanding and communication between the two groups. Architects may make decisions without fully understanding the implementation implications, and developers may struggle to implement an architecture they had no part in designing.

- **Reality Gap**: Architectural designs often look good on paper but may not work as well when actually implemented. This gap between design and reality can lead to problems and delays.

2. **List the three levels of knowledge in the knowledge triangle and provide an example of each.**

![Knowledge representation](/assets/img/posts/software-architecture-knowledge-representation.png)

🤓 Our knowledge pyramid illustrates how fundamentally different the role of architect compares to developer. Developers spend their whole careers honing expertise, and transitioning to the architect role means a shift in that perspective, which many individuals find difficult. The architect role requires a different set of skills, and the knowledge pyramid illustrates this shift.

3. **Why is it more important for an architect to focus on technical breadth rather than technical depth?**

🤓 Focusing on technical breadth means acquiring a wide-ranging understanding of various technologies, patterns, languages, platforms, and principles. This breadth allows architects to:

- **See the Big Picture**: Understand how different components and technologies fit together and influence each other. This is essential when designing complex systems where decisions in one area can significantly impact other areas.

- **Make Informed Decisions**: Choose the most suitable technologies and designs for the system's requirements. A broad knowledge allows architects to consider a wider range of options and make more informed decisions.

- **Communicate Effectively**: Communicate with different stakeholders, including developers, project managers, business stakeholders, and others. Each group may have different areas of expertise and concerns, and a broad understanding helps architects bridge these gaps.

- **Adapt to Change**: Stay adaptable and resilient in the face of changing requirements, technologies, and business environments. A wide knowledge base allows architects to learn and adopt new technologies more easily.

For example, as an architect, it is more beneficial to know that five solutions exist for a particular problem than to have singular expertise in only one.

4. **What are some of the ways of maintaining your technical depth and remaining hands-on as an architect?**

- 🤓 **Coding**: Try to spend some of your time coding. This could be writing prototypes, creating proofs of concept, fixing bugs, or contributing to critical parts of the system. This not only helps maintain your coding skills but also gives you firsthand experience with the technologies you're using.

- **Education**: Continually educate yourself about new technologies, languages, and methodologies. This can involve reading books, articles, or research papers, attending conferences or webinars, or taking online courses.

- **Personal Projects**: Work on personal projects outside of your day-to-day work. This can be a great way to learn new technologies, experiment with different architectures, or just keep your coding skills sharp.

- **Code Reviews**: Participate in code reviews. This gives you a chance to see how the architecture is being implemented, spot potential issues, and provide valuable feedback to developers.

- **Pair Programming**: Occasionally pair program with developers. This is another great way to stay familiar with the codebase and the challenges that developers face.

- **Prototyping**: When considering a new technology or architectural approach, create a small prototype. This can provide valuable insights that you wouldn't get from reading about it alone.

- **Stay Connected with the Developer Community**: Participate in tech meetups, online forums, open-source projects, and other communities. This can keep you updated on new technologies and best practices, and provide opportunities to learn from others.

By staying hands-on and maintaining technical depth, you'll be a more effective architect. You'll understand the challenges that developers face, make better architectural decisions, and be able to communicate more effectively with your team.

---

## Chapter 3 - Modularity

1. What is meant by the term connascence?

🤓 **Connascence** is a metric used to describe the coupling or the degree of interdependence between two or more parts of a software system.

2. What is the difference between static and dynamic connascence?

🤓 **Static connascence** is coupling that can be determined by examining the source code, while **dynamic connascence** is coupling that can only be determined when the code is running.

3. What does connascence of type mean? Is it static or dynamic connascence?

🤓 **Connascence of type** is when multiple parts of a program must agree on the type of an entity. It is a form of static connascence.

4. What is the strongest form of connascence?

🤓 **Connascence of Identity** is the strongest form of connascence. It refers to when multiple parts of the system depend on a mutable entity's identity.

5. What is the weakest form of connascence?

🤓 **Connascence of Name**, where multiple parts of the system must agree on the name of an entity, is considered the weakest form of connascence.

6. Which is preferred within a code base—static or dynamic connascence?

🤓 **Static connascence** is generally preferred within a code base as it is easier to identify and manage than dynamic connascence.

---

## Chapter 4 - Modularity

![Architecture Characteristics](/assets/img/posts/software-architecture-characteristics.png)

**1. What three criteria must an attribute meet to be considered an architecture characteristic?**

🤓 An attribute must be testable, contribute to the architecture of the system, and provide a way to measure and quantify it.

**2. What is the difference between an implicit characteristic and an explicit one? Provide an example of each.**

![Architecture Characteristics](/assets/img/posts/software-architecture-explicit-implicit-characteristics.png)

🤓 An implicit characteristic is one that is required or assumed but not explicitly stated, like usability. An explicit characteristic is one that is directly stated and designed for, such as response time.

**3. Provide an example of an operational characteristic**

🤓 An example of an operational characteristic is availability, which refers to the system's ability to be in a state to perform its designated function during operation.

**4. Provide an example of a structural characteristic.**

🤓 An example of a structural characteristic is modularity, referring to the degree to which a system's components may be separated and recombined.

**5. Provide an example of a cross-cutting characteristic.**

🤓 An example of a cross-cutting characteristic is security, which is the system's ability to resist unauthorized attempts at usage or behavior modification, affecting multiple components of the system.

**6. Which architecture characteristic is more important to strive for—availability or performance?**

🤓 The importance of availability versus performance **depends on the specific needs of the system being developed**. For a critical system where downtime could be costly, availability may be more important. For a system where speed is crucial for user satisfaction, performance may be more important. The context and requirements of the system dictate which characteristic is more important to strive for.
