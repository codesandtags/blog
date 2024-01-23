---
layout: post
title: ADR for Evolutionary Architectures
date: 2024-01-22 17:21 -0500
author: codesandtags
categories: [Software Architecture]
tags: [adr, patterns]
---

How many times the **proposed architecture** changes over time and these changes are not **documented** or **reflected**?. This is a common problem in software development, and it's not a bad thing, it's a natural thing, because the **software is evolving**, and the **architecture** should evolve too.

![ADR - Architecture Decision Records example](/assets/img/posts/adrs-example.png)

## A little bit of context

> One of the **hardest things** to track during the life of a project is the motivation behhind certain decisions.

In 2011, [Michael Nygard](https://cognitect.com/authors/MichaelNygard.html) wrote an artcile called [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) where he proposed a simple template to document architecture decisions, this template was called **ADR** (Architecture Decision Record).

## Why should we use ADRs?

ADRs help the team and stakeholders to:

- **Understand** the **rationale** behind the decisions.
- Provide a historical record of how and why the architecture has evolved over time, which can help to **avoid** the **same mistakes** in the future.
- Foster collaboration and aligment among the team members and stakeholders, as well as transparency and accountability for the decision making process.

## What should we include in ADRs?

- **Title** and of the decision
- The **context of problem** that motivates the decision
- **Available options** or **alternatives** that were considered
- The **decision** or choise that was made
- The **consequences** or implications of the decision
- **Status** or **state** of the decision (proposed, accepted, deprecated, superseded, etc.)
  - **Proposed**: This status is used when the ADR is initially drafted and is still under discussion.
  - **Accepted**:Once a decision has been discussed and agreed upon, the status is updated to 'Accepted'.
  - **Rejected**: If the decision is ultimately not chosen, the status is set to 'Rejected'.
  - **Deprecated**: Over time, as the project evolves, previously accepted decisions may become outdated or no longer optimal. In such cases, the status is changed to 'Deprecated'.
  - **Superseded**: This status is similar to 'Deprecated' but is used when a new ADR explicitly replaces an older one.
- The **owner** or author of the decision
- The **references** or sources of information

## How should we use ADRs?

To start using ADRs, I suggest to follow these steps:

1. Create a folder called `adr` in the root of your project. The idea is to have all the ADRs in the same place and close to your code.
2. Create a file called `adr-0001.md` (or `adr-0001.txt`) and use the ADR template to document the first decision. The number `0001` is the **ID** of the ADR, and it should be incremented for each new ADR.
3. The ADR should be reviewed by the team, and if it's approved, it should be committed to the repository.
4. When there are new decisions, you can refer to the previous ADRs, or you can create new ADRs, this will help to keep the ADRs short and focused on a single decision.

## Some examples

### Example 1: Adoption of Microservices Architecture

```markdown
Title: ADR-001: Adoption of Microservices Architecture
Date: YYYY-MM-DD
Status: Accepted

Context:

Our current monolithic architecture is becoming increasingly complex and difficult to scale and maintain. As our application grows, the need for better scalability, flexibility, and faster deployment cycles has become apparent.

Decision:

We will adopt a microservices architecture. This approach involves decomposing the application into smaller, independently deployable services, each responsible for a specific business function. This decision is driven by the need for greater scalability, improved resilience, and faster development and deployment cycles.

Consequences:

Positive: Improved scalability, as services can be scaled independently based on demand. Enhanced agility and faster deployment cycles, enabling quicker responses to market changes. Better fault isolation, as issues in one service do not directly impact others.
Negative: Increased complexity in deployment and operations, requiring robust service orchestration and monitoring. Potential for increased network latency and communication overhead between services.

Alternatives Considered:

Continuing with Monolithic Architecture: Rejected due to scalability and maintainability concerns.

Serverless Architecture: Considered, but rejected due to the early stage of serverless technologies and concerns over vendor lock-in.
```

### Example 2: Choosing a Database Technology

```markdown
Title: ADR-002: Choosing PostgreSQL as the Primary Database Technology
Date: YYYY-MM-DD
Status: Accepted

Context:

Our application requires a reliable and scalable database to handle a mix of transactional and analytical workloads. The choice of database technology is crucial for ensuring data integrity, performance, and scalability.

Decision:

We have decided to use PostgreSQL as our primary database technology. PostgreSQL is an open-source, object-relational database system known for its robustness, feature richness, and strong community support. It offers advanced features like complex queries, foreign keys, triggers, and transactional integrity, which are essential for our application’s needs.

Consequences:

Positive: PostgreSQL's support for complex data types and sophisticated query capabilities will allow for efficient data processing and analytics. Its strong consistency model and reliability are well-suited for our transactional data requirements. The open-source nature ensures no vendor lock-in and community-driven innovation.

Negative: Requires upskilling the team to be proficient in PostgreSQL, as our previous experience was primarily with NoSQL databases. Potentially higher operational costs compared to lightweight database solutions.

Alternatives Considered:

- NoSQL Database (e.g., MongoDB): Rejected due to the need for stronger transactional integrity and complex querying capabilities.
- MySQL: Considered, but PostgreSQL was preferred for its advanced features and performance benefits in handling complex queries and larger datasets.
```

## What is the relationship with RFCs?

**RFCs (Request for Comments)** are a series of documents that describe the Internet protocols, systems, and technologies. They are the result of a collaborative process, and they are used to propose new features, protocols, or systems. ADRs are similar to RFCs, but they are used to document architecture decisions.

ADRs are used to document and communicate the rationale behind significant decisions that affect the architecture of a system, while RFCs are used to dicuss and solicit feedback on proposed solutions or ideas before making a decision.

## Tools to create ADRs

- [Markdown Any Decision Records](https://adr.github.io/madr/)
- [Backstage ADR Plugin](https://github.com/backstage/backstage/tree/master/plugins/adr)

## Conclusions

- ADRs are a simple and effective way to document architecture decisions.
- ADRs are a great tool to communicate the rationale behind significant decisions that affect the architecture of a system.
- ADRs should be created, reviewed, and updated regularly by the team members.

## References

- [ADR Github](https://adr.github.io/)
- [📖 Book: Fundamentals of Sofware Architecture](https://www.amazon.com/Fundamentals-Software-Architecture-Comprehensive-Characteristics/dp/1492043451/ref=sr_1_1?crid=3QMOVXSNR36EN&keywords=fundamentals+of+software+architecture&qid=1705979639&s=books&sprefix=fundamentals+of+software+architecture%252Cstripbooks-intl-ship%252C91&sr=1-1&_encoding=UTF8&tag=codesandtags-20&linkCode=ur2&linkId=39aaed451024322ddeb4a6b531f7cb26&camp=1789&creative=9325)
- [📖 Book: Software Architecture: The Hard Parts](https://www.amazon.com/Software-Architecture-Trade-Off-Distributed-Architectures/dp/1492086894/ref=sr_1_1?crid=3BHOD62396TY9&keywords=software+architecture+hard+parts&qid=1705979856&s=books&sprefix=software+architecture+hard+part%252Cstripbooks-intl-ship%252C125&sr=1-1&_encoding=UTF8&tag=codesandtags-20&linkCode=ur2&linkId=5621f84961f2184235d915c7208525b2&camp=1789&creative=9325)
- [Architecture Decision Records Tech Radar](https://www.thoughtworks.com/radar/techniques/architecture-decision-records)
- [Has your architecture decision records lost its purpose?](https://www.infoq.com/articles/architectural-decision-record-purpose/#:~:text=Recording%20non%2Darchitectural%20product%20decisions.&text=Misusing%20the%20ADRs%20in%20this,Record%22%20has%20lost%20its%20purpose.)
