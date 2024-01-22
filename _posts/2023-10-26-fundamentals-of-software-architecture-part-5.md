---
layout: post
title: Fundamentals of Software Architecture Book - Part 5
date: 2023-10-26 20:42 -0500
author: codesandtags
categories: [Software Architecture]
tags: [books, fundamentals, software]
---

![Cover Fundamentals Software Architecture](/assets/img/posts/cover-fundamentals-software-architecture.png)

Here I have the relevant points to me of the book Fundamentals of Software Architecture by **Mark Richards** and **Neal Ford**. This part is focused on **techniques** and **soft skills** by software architects.

## Fundamentals of Software Architecture

### Book Details

- **Title**: [Fundamentals of Software Architecture](https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
- **Author**: Mark Richards, Neal Ford
- **Publication Year**: 2020

### Summary

This book is a great introduction to software architecture, it covers the basics of software architecture, and it's a great starting point for anyone who wants to learn more about software architecture. This part is focused on techniques and soft skills by software architects.

---

## Chapter 19: Architecture Decisions

**1. What is the covering your assets anti-pattern?**

The covering your assets anti-pattern is when you make a decision based on the fear of being blamed for something that goes wrong. This is a common anti-pattern in software architecture, and it can lead to poor decisions.

**2. What are some techniques for avoiding the email-driven architecture anti-pattern?**

The first rule of communicationg architecture decisions is not to include the architecture decisions in the body of an email. This is a common anti-pattern in software architecture, and it can lead to poor decisions. A better approach is to mention only the nature and context of the decision the body of the email, and then attach the architecture decision record (ADR) as an attachment.

The second rule of effectively communicating architecture decisions is to only notifiy those people who really care about the architecture decision.

**3. What are the five factors Michael Nygard defines for identifying something as architecturally significant?**

According to Michal Nygard, architecturally significan deecisions are those decisions that affect the structure, non-functional characteristics, dependencies, interfaces, and construction techniques of a system.

**4. What are the five basic sections of an architecture decision record?**

The five basic sections of an architecture decision record are:

- **Title**: The title of the ADR.
- **Status**: The status of the ADR.
- **Context**: The context of the ADR.
- **Decision**: The decision of the ADR.
- **Consequences**: The consequences of the ADR.

**5. In which section of an ADR do you typically add the justification for an architecture decision?**

In the **Decision** section of an ADR you typically add the justification for an architecture decision.

**6. Assuming you don't need a separate Alternatives section, in which section of an ADR would you list the alternatives to your proposed solution?**

In the **Consequences** section of an ADR you would list the alternatives to your proposed solution.

**7. What are the trhee basic criteria in which you would mark the status of an ADD proposed?**

The three basic criteria in which you would mark the status of an ADD proposed are:

- **Proposed**: The proposed solution has been proposed by the team.
- **Accepted**: The proposed solution has been accepted by the team.
- **Superseded**: The proposed solution has been superseded by another solution.

---

## Chapter 20: Analyzing Architecture Risk

**1. What are the two dimensions of the risk assessment matrix?**

The two dimensions of the risk assessment matrix are:

- **Likelihood of risk occurring**: The probability of the risk occurring.
- **Overall impact of risk**: The impact of the risk occurring.

**2. What are some ways to show direction of a particular risk within a risk assessment? Can you think of other ways to indicate wheter risk is getting better or worse?**

Some ways to show direction of a particular risk within a risk assessment are:

- **Color**: Using color to indicate whether risk is getting better or worse.
- **Arrows**: Using arrows to indicate whether risk is getting better or worse.
- **Signs plus or minus**: Using signs plus or minus to indicate whether risk is getting better or worse.
- **A combination of both**: Using a combination of both to indicate whether risk is getting better or worse, to make it simpler to understand.

**3. Why is it necessary for risk storming to be a collaborative exercise?**

Because all architects have a differente knowledge of the architecture, and points of view about the risk for each area to be analyzed.

**4. Why is it necessary for the identification activity whithin risk storming to be an individual activity and not a collaborative one?**

Because it is important to get the individual perspective of each participant, and not the group perspective. It's also important to restrict risk storming efforts to a single dimension.

**5. What would you do if three participants identified risk as high (6) for a particular area of the architecture, but another participant identified it as only medium (3)?**

When this situation happens, it's important to discuss the risk with the participants, and try to reach a consensus. At the end the idea is to have an agreement on the risk level for each area of the architecture.

**6. What risk rating (1-9) would you assign to unproven or unkown technologies?**

For unproven or unkonwn technologies, I would assign a risk rating of 9, since the matrix cannot be used for this dimension.

---

## Chapter 21: Diagramming and Presenting Architecture

**1. What is irrational artifact attachment, and why is it significant with respect to documenting and diagramming architecture?**

The irrational artifact attachment is when you are attached to a particular diagram or artifact, and you are not willing to change it. This is significant with respect to documenting and diagramming architecture because it can lead to poor decisions.

**2. What do the 4 C’s refer to in the C4 modeling technique?**

The 4 C’s refer to the C4 modeling technique are:

- **Context**: It represents the scope of the system.
- **Containers**: It represents the high-level technology choices.
- **Components**: It represents the low-level technology choices.
- **Classes**: It represents the implementation details.

**3. When diagramming architecture, what do dotted lines between components mean?**

Dotted lines between components mean there is a asynchronous communication between them.

**4. What is the bullet-riddled corpse anti-pattern? How can you avoid this anti-pattern when creating presentations?**

The bullet-riddled corpse anti-pattern is when you create a presentation with a lot of bullet points. You can avoid this anti-pattern when creating presentations by using a lot of images and diagrams, and not a lot of text.

**5. What are the two primary information channels a presenter has when giving a presentation?**

The two primary information channels a presenter has when giving a presentation are:

- **Visual**: It represents the images and diagrams.
- **Auditory**: It represents the voice of the presenter.

## Chapter 22: Making Teams Effective

**1. What are three types of architecture personalities? What type of boundary does each personality create?**

The three types of architecture personalities are:

- **The control freak**: This personality creates a boundary of control and tries to control everything, it creates a toxic environment for the team.
- **The Armchair Architect**: This personality creates a boundary of isolation and doesn't interact with the team, at the end the team endup doing the work of the architect.
- **The effective Architecte**: This personality creates a boundary of collaboration and works with the team to achieve the goals.

**2. What are the five factors that go into determining the level of control you should exhibit on the team?**

The five factors that go into determining the level of control you should exhibit on the team are:

- **Team familiarity**: How ell do the team members know each other?
- **Team size**: How big the team is?
- **Overal experience**: How many members of the team are senior and junior?
- **Project complexity**: Is the project highly complex or just a simple project?
- **Project duration**: Is the project short (2 months) or long (2 years)?

**3. What are three warning signs you can look at to determine if your team is getting too big?**

- **Process loss**: When the team is too big, the process loss increases.
- **Pluralistic ignorance**: When the team is too big, and everyone agress but privately rejects a norm or decision.
- **Difussion of responsibility**: When the team is too big, the diffusion of responsibility increases.

**4. List three basic checklists that would be good for a development team:**

- Developer code completition checklist
- Unit and functional testing checklist
- Software release checklist

## Chapter 23: Negotiation and Leadership Skills

**1. Why is negotiation so important as an architect?**

Negotiation is so important as an architect because you need to negotiate with business stakeholders, developers, and other architects.

**2. Name some negotiation techniques when a business stakeholder insists on five nines of availability, but only three nines are really needed:**

- Leverage the use of grammar and buzzwords to better understand the business stakeholder, and situation.
- Gather as much information as possible before entering into a negotiation.
- When all else fails, state things in terms of cost and time.
- Leverage the "divide and conquer" rule to qualify demands or requirements.

**3. What can you derive from a business stakeholder telling you “I needed it yesterday”?**

When a business stakeholder tells you "I needed it yesterday", you can derive that the business stakeholder is under a lot of pressure, and he/she needs the solution as soon as possible, so "time to market" is very important.

**4. Why is it important to save a discussion about time and cost for last in a “negotiation?**

Because the other justifications and rationalizations should matter more first.

**5. What is the divide-and-conquer rule? How can it be applied when negotiating architecture characteristics with a business stakeholder? Provide an example.**

The divide-and-conquer rule is when you divide a big problem into smaller problems, and then you solve each smaller problem. It can be applied when negotiating architecture characteristics with a business stakeholder by dividing the problem into smaller problems, and then you solve each smaller problem, so for the example of the nines problem, you can divide the problem into smaller problems and identify which part of the system is most important in terms of cost and time.

**6. List the 4 C’s of architecture:**

- **Communication**
- **Collaboration**
- **Clarity**
- **Conciseness**

**7.Explain why it is important for an architect to be both pragmatic and visionary:**

There should be a balance between these two characteristics, because if you are too pragmatic you will not be able to see the big picture, and if you are too visionary you will not be able to see the details.

**8. What are some techniques for managing and reducing the number of meetings you are invited to?**

- **Ask for an agenda**: Ask for an agenda before the meeting, and if there is no agenda, don't attend the meeting.

## Chapter 24: Developing a career Path

**1. What is the 20-minute rule, and when is it best to apply it?**

The 20-minute rule is when you spend 20 minutes a day learning something new. It's best to apply it when you want to learn something new, and you don't have a lot of time, and in general it should be done as the fist time of the day.

**2. What are the four rings in the ThoughtWorks technology radar, and what do they mean? How can they be applied to your radar?**

The four rings in the ThoughtWorks technology radar are:

- **Adopt**: It means that you should adopt this technology.
- **Trial**: It means that you should try this technology.
- **Assess**: It means that you should assess this technology.
- **Hold**: It means that you should hold this technology.

**3. Describe the difference between depth and breadth of knowledge as it applies to software architects. Which should architects aspire to maximize:**

The difference between depth and breadth of knowledge as it applies to software architects is that depth is the knowledge of a particular technology, and breadth is the knowledge of a lot of technologies. Architects should aspire to maximize the breadth of knowledge, because usually depth knowledge is changing very fast according to the technology and trendings in the world.
