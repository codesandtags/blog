---
layout: post
title: Lessons learned with Building Large Scale Web Apps Book
date: 2024-05-10 11:22 -0400
author: codesandtags
categories: [Frontend]
tags: [books, frontend, architecture]
---

![Cover Large Web Apps](/assets/img/posts/large-web-apps.jpg)

## Introduction

After reading the book [“Building large scale web apps”](https://largeapps.dev/) by Addy Osmani and Hassan Djirdeh, I decided to write a post about the lessons learned with the book. The book is a great resource for developers who want to learn how to build large web applications. The authors cover a wide range of topics, from architecture to performance optimization, and provide practical advice on how to build scalable web applications.

In this post, I will summarize some of the key lessons I learned from the book and share my thoughts on how they can be applied to real-world projects and I will provide some examples in code.

## Software Complexity

There are many factors that contribute to the complexity of software projects, such as the number of features, the size of the codebase, and the number of developers working on the project. As a project grows in size and complexity, it becomes more difficult to maintain and extend the codebase. In terms of complexity we usually talk about 2 types:

- **Essential complexity**: This is the complexity that is inherent to the problem being solved. It is the complexity that cannot be avoided and must be dealt with in order to solve the problem.
- **Accidental complexity**: This is the complexity that is introduced by the tools, frameworks, and libraries that are used to solve the problem. It is the complexity that can be avoided or reduced by choosing the right tools and techniques. _Many problems occur here_.

## Modularity

Modularity is a key principle in software development that helps to reduce complexity and improve maintainability. By breaking down a large codebase into smaller, more manageable modules, developers can work on different parts of the codebase independently and reduce the risk of introducing bugs. Modularity also makes it easier to reuse code and share components across different parts of the codebase.

### JavaScript Modules

JavaScript/Nodejs ecosystem supports several **module systems**, such:

- **[CommonJS](https://requirejs.org/docs/commonjs.html)**: CommonJS is widely used in Node.js for server-side development. It supports synchronous loading of modules, which is suitable for server environments where modules are loaded from the local filesystem. Modules are imported using the require function, and exports are handled using module.exports.
- **[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)** (Asynchronous Module Definition): AMD is designed for asynchronous loading of modules, making it suitable for web applications where modules are loaded over the network. AMD uses a define function for defining modules and require for loading them, supporting dynamic dependency management.
- **[UMD](https://github.com/umdjs/umd)** (Universal Module Definition): UMD is a pattern that combines the characteristics of both CommonJS and AMD, allowing a module to be used in either a client or server environment. This approach checks the environment and adapts the module definition accordingly, making it universal across different JavaScript environments.
- **[SystemJS](https://github.com/systemjs/systemjs)**: is a dynamic module loader that can load modules in multiple formats, including CommonJS, AMD, and ES6 Modules. It’s particularly useful in applications that need to load modules dynamically or use modules written in different formats.
- **[ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)**: Are the most widely used module system in modern JavaScript applications, and they provide a simple and intuitive way to define and import modules.

**Examples:**

```javascript
// CommonJS
const lodash = require("lodash");

// AMD
define(["lodash"], function (lodash) {
  // Module code
});

// UMD
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["lodash"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("lodash"));
  } else {
    root.myModule = factory(root._);
  }
})(this, function (_) {
  // Module code
});

// SystemJS
System.import("lodash").then(function (lodash) {
  // Module code
});

// ES6 Modules
import lodash from "lodash";
```

### Breaking down pieces

One of the benefits of breaking down a large codebase into smaller modules is that it makes it easier to reason about the code and identify reusable components. By dividing the application into smaller components, developers can focus on building and testing individual pieces of functionality, rather than trying to understand the entire codebase at once. This approach also makes it easier to identify and fix bugs, as developers can isolate the problem to a specific module and test it in isolation.

**Some steps are:**

- Identify reusable components
- Divide the application into smaller components
- Chunks created from components can be dynamically imported
- Lazy loading components when needed
- Don't go extreme to break down the codebase into too many pieces. Find a balance.

## Performance

Performance is a critical aspect of web development, as it directly impacts the user experience and the success of a web application. By optimizing the performance of a web application, developers can reduce load times, improve responsiveness, and increase user engagement. There are many factors that can affect the performance of a web application, such as the size of the codebase, the number of HTTP requests, and the rendering speed of the browser.

To improve the performance first we need to understand the steps that the browser takes to render a web page:

1. **Parse HTML**: The browser parses the HTML document and constructs the DOM tree.
2. **Parse CSS**: The browser parses the CSS stylesheets and constructs the CSSOM tree.
3. **Combine DOM and CSSOM**: The browser combines the DOM and CSSOM trees to create the render tree.
4. **Layout**: The browser calculates the layout of the elements on the page.
5. **Paint**: The browser paints the pixels on the screen.
6. **Composite**: The browser combines the painted elements to create the final image on the screen.
7. **JavaScript**: The browser executes JavaScript code that modifies the DOM or CSSOM trees.
8. **Reflow and Repaint**: The browser recalculates the layout and repaints the pixels on the screen.
9. **Garbage Collection**: The browser performs garbage collection to free up memory.
10. **Network Requests**: The browser makes network requests to fetch external resources such as images, scripts, and stylesheets.
11. **Rendering Performance**: The browser renders the page at a consistent frame rate to provide a smooth user experience.
12. **User Input**: The browser responds to user input events such as clicks, scrolls, and keyboard input.

### Challenges with performance

- Download Time
- Execution Time
- Mobile devices CPU and memory limitations

### Performance tasks and techniques

- Minifying CSS and JavaScript files.
- Brotli and Gzip compression for static assets.
- Image Optimization.
- Reducing the size of JavaScript bundles.
- Use code-splitting to break down large bundles into smaller ones.
- Use tree-shaking to remove unused code from the bundles.
- Avoiding long tasks that can block the main thread.
- Usage of HTTP/2 and HTTP/3 to reduce latency.
- With small chunks of code it's enable the usage of streaming and flushing.
- Use [Lazy Loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) to load resources only when needed.
- Use [Prefetching](https://web.dev/articles/link-prefetch) and [preloading](https://web.dev/articles/preload-critical-assets) to load resources in advance.
- Identify third-party scripts or dependencies and try to reduce them or replace them with smaller alternatives.
- Usage of "Skeleton screens and placeholder UIs" to improve the perceived performance of the application.

### Metrics and Tools

- **[Core Web Vitals](https://web.dev/articles/vitals/)**: Core Web Vitals are a set of metrics that measure the user experience of a web application. They include metrics such as Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). By optimizing these metrics, developers can improve the overall performance and user experience of a web application.
- **[User Timing](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/User_timing)**: User Timing is a feature of the Performance API that allows developers to measure the performance of specific parts of a web application. By using User Timing, developers can identify bottlenecks and optimize the performance of critical parts of the codebase.
- **[Interaction to Next Paint (INP) ](https://web.dev/articles/inp)**: Interaction to Next Paint is a metric that measures the time it takes for a web application to respond to user input and update the screen. By optimizing the Interaction to Next Paint metric, developers can improve the responsiveness and user experience of a web application.
- **[Time To Interactive](https://web.dev/articles/tti)**: Time To Interactive is a metric that measures the time it takes for a web application to become interactive. By optimizing the Time To Interactive metric, developers can improve the responsiveness and user experience of a web application.
- **[Total Blocking Time (TBT)](https://web.dev/articles/tbt)**: Total Blocking Time is a metric that measures the amount of time that the main thread is blocked by long tasks. By reducing the Total Blocking Time, developers can improve the responsiveness and user experience of a web application.
- **[First Contentful Paint (FCP)](https://web.dev/articles/fcp)**: First Contentful Paint is a metric that measures the time it takes for the first content to be painted on the screen. By optimizing the First Contentful Paint metric, developers can improve the perceived performance and user experience of a web application.
- **[LightHouse](https://developer.chrome.com/docs/lighthouse/overview)**: LightHouse is an open-source tool that provides automated audits for web applications. It analyzes the performance, accessibility, and best practices of a web application and provides recommendations for improvement. By running LightHouse audits, developers can identify performance issues and optimize the user experience of a web application.
- **[Devtools analysis](https://developer.chrome.com/docs/devtools/performance)**

### Using rendering patterns

- **[Client-Side Rendering (CSR) or Single Page Application (SPA)](https://www.patterns.dev/react/client-side-rendering)**: Renders HTML in the browser using JavaScript. All routing is handled client-side without the need for page reloads. Used by React, Angular, Vue.js.
- **Multi-Page Application (MPA)**: Traditional web application model where each new page requires a page reload and is rendered server-side. Used by traditional frameworks like Ruby on Rails, Django, ASP.NET
- **[Static Rendering for Static Site Generation (SSG)](https://www.patterns.dev/react/static-rendering)**: Pre-renders pages at build time. Each page is a static HTML file served directly to the browser. Used by Gatsby, Next.js (Static Export), Hugo.
- **[Server-Side Rendering (SSR)](https://www.patterns.dev/react/server-side-rendering)**: Renders pages on the server at runtime. Every request to the server is processed to return fully populated HTML to the client. Used by Next.js, Nuxt.js, Razzle.
- **[Partial Hydration](https://www.patterns.dev/react/react-selective-hydration)**: Only critical parts of the page are hydrated with client-side JavaScript to become interactive, improving performance compared to full client-side hydration. Used by Astro, Marko.
- **[Progressive Hydration](https://www.patterns.dev/react/progressive-hydration)**: Pages are initially served with minimal interactivity, and JavaScript bundles are loaded as needed, increasing interactivity progressively. Used by React (experimental), Next.js (experimental).
- **[Islands Architecture](https://www.patterns.dev/vanilla/islands-architecture)**: Combines static rendering with minimal client-side JavaScript. JavaScript is used sparingly for interactive components rather than whole pages. Used by Astro, Qwik.
- **[Incremental Static Generation](https://www.patterns.dev/react/incremental-static-rendering)**: Pages are pre-rendered at build time and can be re-rendered on demand or at predefined intervals to update the static content. Used by Next.js.
- **[Streaming SSR](https://www.patterns.dev/react/streaming-ssr)**: Server sends HTML in chunks as data becomes available, allowing the browser to start rendering sooner. Used by React 18, SolidJS, Next.js.
- **[Edge Rendering](https://vercel.com/docs/functions)**: Similar to SSR, but rendering occurs at CDN locations closer to the user to reduce latency. Used by Next.js (with Edge Functions).

### Maturity levels of performance

Coming from the article [A Management Maturity Model for Performance](https://infrequently.org/2022/05/performance-management-maturity/), there are several levels of maturity in terms of performance optimization in a organization, such as:

- Level 0 (Bliss)
- Level 1 (Fire Fighting)
- Level 2 (Global Baselines & Metrics)
- Level 3 (P75+, Site-specific Baselines & Metrics)
- Level 4: Variance Control & Regression Prevention
- Level 5: Strategic Performance

## Design Systems

Design systems are a collection of reusable components, patterns, and guidelines that help to maintain consistency and coherence across a web application. By using a design system, developers can build web applications more efficiently, reduce the risk of introducing bugs, and improve the user experience. Design systems typically include components such as buttons, forms, and navigation menus, as well as guidelines on typography, color schemes, and accessibility.

## Data Fetching

Data fetching is a critical aspect of web development, as it enables web applications to retrieve and display data from external sources. By optimizing the data fetching process, developers can reduce load times, improve responsiveness, and increase user engagement. There are many factors that can affect the data fetching performance of a web application, such as the size of the data payload, the number of API requests, and the network speed.

## State Management

State management is a key aspect of web development, as it enables web applications to manage and update the state of the application in response to user interactions. By optimizing the state management process, developers can reduce the risk of introducing bugs, improve the user experience, and increase the scalability of the application. There are many state management libraries available for JavaScript applications, such as Redux, MobX, and Recoil.

## Internationalization

Internationalization is the process of adapting a web application to support multiple languages and regions. By optimizing the internationalization process, developers can reach a wider audience, improve the user experience, and increase user engagement. There are many factors that can affect the internationalization of a web application, such as the size of the translation files, the number of supported languages, and the complexity of the translation process.

## A/B Testing

A/B testing is a technique that compares two versions of a web application to determine which one performs better. By optimizing the A/B testing process, developers can identify the most effective design, content, and functionality for a web application, and improve the overall user experience. There are many factors that can affect the A/B testing process, such as the size of the test group, the duration of the test, and the metrics used to measure success.

## Scalable Web Architecture

## Testing

Testing developers to identify and fix bugs, improve the quality of the codebase, and increase the reliability of a web application. By optimizing the testing process, developers can reduce the risk of introducing bugs, improve the user experience, and increase the scalability of the application. There are many types of testing available for web applications, such as unit testing, integration testing, and end-to-end testing.

## Tooling

Tooling enables developers to automate repetitive tasks, improve the quality of the codebase, and increase the productivity of the team. By optimizing the tooling process, developers can reduce the time spent on manual tasks, improve the consistency of the codebase, and increase the scalability of the application. There are many tools available for web development, such as linters, formatters, and bundlers.

## Conclusions

## Quotes

- "“The best solutions are simple but not simplistic.”
- "There is an essential complexity to all meaningful software. We can never eliminate that complexity; we can only control it.” Grady Booch
- "The secret to building large apps is never to build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application.” Justin Meyer
