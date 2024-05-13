---
layout: post
title: Lessons learned with Building Large Scale Web Apps Book - Part 1
date: 2024-05-12 00:22 -0400
author: codesandtags
categories: [frontend]
tags: [books, architecture]
---

![Cover Large Web Apps](/assets/img/posts/large-web-apps.jpg)

## Introduction

After reading the book [“Building large scale web apps”](https://largeapps.dev/) by [Addy Osmani](https://addyosmani.com/) and [Hassan Djirdeh](https://www.linkedin.com/in/hassandjirdeh/?originalSubdomain=ca), I decided to write a post about the lessons learned with the book. The book is a great resource for developers who want to learn how to build large web applications. The authors cover a wide range of topics, from architecture to performance optimization, and provide practical advice on how to build scalable web applications.

In this post, I will summarize some of the key lessons I learned from the book and share my thoughts on how they can be applied to real-world projects and I will provide some examples in code. Given the book contains a lot of topics, I will divide the lessons learned into sections and 2 posts.

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

Design systems are a collection of reusable components, patterns, and guidelines that help to maintain consistency and coherence across a web application. By using a design system, companies, designers and developers can build web applications more efficiently, reduce the risk of introducing bugs, and improve the user experience. Design systems typically include components such as buttons, forms, and navigation menus, as well as guidelines on typography, color schemes, tone, and accessibility.

### Popular Design Systems

- [Material Design - Google](https://material.io/design)
- [Polaris - Shopify](https://polaris.shopify.com/)
- [Human Interface Guidelines - Apple](https://developer.apple.com/design/human-interface-guidelines/)
- [Fluent Design System - Microsoft](https://www.microsoft.com/design/fluent/)
- [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/).
- [Atlassian Design System](https://atlassian.design/).
- [IBM Carbon Design System](https://www.carbondesignsystem.com/).
- [Adobe Spectrum Design System](https://spectrum.adobe.com/).
- [BBC GEL Design System](https://www.bbc.co.uk/gel).

### Best practices for Design Systems

- **Use Coding Style Guides**: Provide guidelines on how to write clean, consistent, and maintainable code. There Coding Style Guides for JavaScript, CSS, and HTML, such as:
  - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [CSS Guidelines](https://cssguidelin.es/)
  - [BEM (Block Element Modifier)](http://getbem.com/)
  - Alternatives of existing well know CSS Frameworks as [Tailwind CSS](https://tailwindcss.com/).
- **Leverage on Design Tokens**: [Design tokens](https://spectrum.adobe.com/page/design-tokens/) are design decisions, translated into data. They act as a “source of truth” to help ensure that product experiences feel unified and cohesive. Design Tokens can be defined in JSON, YAML, SASS variables, CSS custom properties, or other formats, and can be used to generate code snippets for different platforms. Also you can leverage on some tools to generate tokens, such as:
  - [Theo - Salesforce](https://github.com/salesforce-ux/theo)
  - [Style Dictionary - Amazon](https://amzn.github.io/style-dictionary/)
  - [Design Tokens - Figma](https://www.figma.com/community/plugin/735098390272716086/Design-Tokens)
- **Component Libraries**: Create a library of reusable components that can be shared across different projects. There are many tools available for building component libraries, such as:
  - [Storybook](https://storybook.js.org/)
  - [Fractal](https://fractal.build/)
  - [Pattern Lab](https://patternlab.io/)
  - [Bit](https://bit.dev/)
- **Theming and customization**: Provide a way to customize the design system to fit the needs of different projects. This can be done by using theming variables, mixins, or utility classes.
- **Dependency Management**: Use a package manager to manage the dependencies of the design system. This can help to keep the design system up to date and ensure that the latest versions of the components are used in the projects.
- **Accessibility**: Ensure that the design system is accessible to all users, including those with disabilities. This can be done by following the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) and testing the components with screen readers and other assistive technologies. There are some tools to help with accessibility testing, such as:
  - [axe DevTools](https://www.deque.com/axe/devtools/)
  - [Pa11y](https://pa11y.org/)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [Web AIMs Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Performance**: Optimize the performance of the design system by reducing the size of the CSS and JavaScript files, using lazy loading, and code splitting. This can help to improve the load times of the web applications that use the design system.
- **Documentation**: Provide comprehensive documentation for the design system, including guidelines on how to use the components, examples of best practices, and code snippets. This can help to onboard new developers and ensure that the design system is used consistently across different projects. A clear documentation should cover:
  - Component Description
  - Usage guidelines
  - Props and API reference
  - Examples
  - Accessibility notes
  - Versioning and changelog

### Use Cases

- [Airbnb Design - Building a Visual Language](https://airbnb.design/building-a-visual-language/)
- [GOV.UK - Government Design Principles](https://www.gov.uk/guidance/government-design-principles)

## Data Fetching

Data fetching is a critical aspect of web development, as it enables web applications to retrieve and display data from external sources. By optimizing the data fetching process, developers can reduce load times, improve responsiveness, and increase user engagement. There are many factors that can affect the data fetching performance of a web application, such as the size of the data payload, the number of API requests, and the network speed.

### Data Fetching Techniques

- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)**: Using Fetch API to make HTTP requests to external APIs. Fetch API is a modern replacement for XMLHttpRequest and provides a more flexible and powerful way to fetch data from external sources.
- **[Axios](https://www.axios.com/)**: Using Axios to make HTTP requests to external APIs. Axios is a popular JavaScript library that provides a simple and intuitive way to make HTTP requests and handle responses, intercept requests and responses, cancel requests, and built-in Cross-Site Request Forgery (CSRF) protection.
- **[SWR](https://swr.vercel.app/)**: The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by [HTTP RFC 5861](https://datatracker.ietf.org/doc/html/rfc5861). SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- **[React Query](https://tanstack.com/query/latest)**: Using React Query to manage data fetching in React applications. React Query is a powerful library that provides hooks for fetching, caching, and updating data in React applications. It supports features such as automatic caching, background refetching, and pagination. Some additional features of React Query are:
  - **Automatic Caching**: React Query automatically caches the data fetched from an API and updates the cache when the data changes.
  - **Prefetching**: React Query can prefetch data before it is needed, improving the perceived performance of the application.
  - **Placeholder Data**: React Query can display placeholder data while the data is being fetched, improving the user experience.
  - **Retry mechanism**: React Query can automatically retry failed requests 3 times before displaying an error.
  - **DevTools**: React Query provides a set of DevTools to help developers debug, analyze, and optimize the data fetching process.
  - **Pagination**: React Query supports pagination out of the box, making it easy to fetch and display paginated data.
  - **Parallel Queries**: React Query can fetch multiple queries in parallel, improving the performance of the application.

**Example using React Query**

This example shows how to use React Query to fetch data from an external API and display it in a React component.

```jsx
// index.js: QueryClient and QueryClientProvider setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);

// App.js
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### How to create efficient data fetching

- Design the data model carefully
- Optimize your API endpoints
- Batch request where applicable
- Use Lazy Loading
- Using caching to minimize data fetching
- Evaluate the use of GraphQL
- Monitor and analyze performance

## State Management

State management is a key aspect of web development, as it enables web applications to manage and update the state of the application in response to user interactions. By optimizing the state management process, developers can reduce the risk of introducing bugs, improve the user experience, and increase the scalability of the application. There are many state management libraries available for JavaScript applications, such as Redux, MobX, and Recoil.

### Challenges with state management in React

- **Prop Drilling**: Passing props down multiple levels of the component tree can be cumbersome and error-prone.
- **Complex State**: Managing complex state in React components can lead to code duplication and inconsistency.
- **Global State**: Sharing state across different components can be challenging, especially when components are not directly related.

### Using Context API

The Context API is a feature of React that allows developers to share state across different components without having to pass props down the component tree. By using the Context API, developers can create a global state that can be accessed by any component in the application. The Context API consists of two main components: the `Provider` and the `Consumer`.

### Using useReducer hook

The `useReducer` hook is a feature of React that allows developers to manage complex state in React components. By using the `useReducer` hook, developers can define a reducer function that updates the state based on the action type and payload. The `useReducer` hook returns the current state and a dispatch function that can be used to dispatch actions to the reducer. The `useReducer` hook is similar to the `useState` hook, but it provides more control over the state management process.

**Example using useReducer hook**

This example shows how to use the `useReducer` hook to manage complex state in a React component.

```jsx
// Counter.js
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

### Specific libraries for state management

- **[Redux](https://redux.js.org/)**: Redux is a predictable state container for JavaScript applications. It provides a centralized store to manage the state of the application and a set of rules to update the state in a predictable way. Redux is widely used in React applications and provides features such as actions, reducers, and middleware.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It provides a set of tools and best practices to simplify the development of Redux applications, including utilities for creating actions, reducers, and selectors.
- **[Mobx](https://mobx.js.org/README.html)**: MobX is a simple, scalable, and reactive state management library for JavaScript applications. It provides a way to create observable state that automatically updates the components when the state changes. MobX is widely used in React applications and provides features such as observables, actions, and reactions.
- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)**: Zustand is a small, fast, and scalable state management library for React applications. It provides a way to create stores that can be shared across different components. Zustand is designed to be simple, flexible, and performant, and provides features such as hooks, selectors, and middleware.

**Example using Redux Toolkit**

This example shows how to use Redux Toolkit to manage the state of a React application.

```jsx
// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// App.js
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// Counter.js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

## Conclusions so far

In this post, I have summarized some of the key lessons I learned from the book “Building large scale web apps” by Addy Osmani and Hassan Djirdeh. The book covers a wide range of topics, from architecture to performance optimization, and provides practical advice on how to build scalable web applications. I have shared my thoughts on how these lessons can be applied to real-world projects and provided some examples in code.

In the next post, I will cover the next 5 chapters of the book, which focus on internationalization, A/B testing, scalable web architecture, testing, and tooling.

## Quotes

- "“The best solutions are simple but not simplistic.”
- "There is an essential complexity to all meaningful software. We can never eliminate that complexity; we can only control it.” Grady Booch
- "The secret to building large apps is never to build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application.” Justin Meyer
