---
layout: post
title: Lessons learned with Building Large Scale Web Apps Book - Part 2
date: 2024-05-13 11:22 -0400
author: codesandtags
categories: [Frontend]
tags: [books, frontend, architecture]
---

![Cover Large Web Apps](/assets/img/posts/large-web-apps.jpg)

## Introduction

After reading the book [“Building large scale web apps”](https://largeapps.dev/) by [Addy Osmani](https://addyosmani.com/) and [Hassan Djirdeh](https://www.linkedin.com/in/hassandjirdeh/?originalSubdomain=ca), I decided to write a post about the lessons learned with the book. The book is a great resource for developers who want to learn how to build large web applications. The authors cover a wide range of topics, from architecture to performance optimization, and provide practical advice on how to build scalable web applications.

This is the continuation of the first part of the post, where I covered the first 5 chapters of the book. In this post, I will cover the next 5 chapters of the book, which focus on internationalization, A/B testing, scalable web architecture, testing, and tooling.

## Internationalization

Internationalization (also known as `i18n`) is the process of adapting a web application to support multiple languages and regions. By optimizing the internationalization process, developers can reach a wider audience, improve the user experience, and increase user engagement. There are many factors that can affect the internationalization of a web application, such as the size of the translation files, the number of supported languages, and the complexity of the translation process.

### Benefits of internationalization

- **Reach a wider audience**: By supporting multiple languages and regions, developers can reach a wider audience and increase user engagement.
- **Improve the user experience**: By providing content in the user's preferred language, developers can improve the user experience and increase user satisfaction.
- **Improve search engine optimization**: By providing content in multiple languages, developers can improve search engine optimization and increase the visibility of the web application.
- **Compliance with requirements**: By supporting multiple languages and regions, developers can comply with legal requirements and regulations.

### Good practices for internationalization

- **Separate text and content from code**: To simplify the translation process, you should separate text and content from code and store them in separate translation files.
- **Use a translation service**: To simplify the translation process, you can use a translation service to translate the content of the web application.
- **Use string interpolation**: To improve the readability of the translation files, you can use string interpolation to insert variables and placeholders in the translated text.
- **Utilize third-party localization libraries**: Using third-party localization libraries can help you manage translations more effectively and efficiently. such as `i18next` or `react-intl`.
- **Put your translations in a separate file**: Separating your translations from your codebase will make it easier to manage and update your translations.
- **Use a consistent naming convention**: Using a consistent naming convention for your translation keys will make it easier to manage and update your translations.
- **separate common translations**: To avoid duplication of translations, you can separate common translations into a separate file and import them into other translation files.
- **Enable locale switching**: To allow users to switch between different languages, you can provide a language switcher in the web application.
- **Use dynamic imports**: To improve the performance of the web application, you can use dynamic imports to load translations on demand.
- **Handling plurals across languages**: To handle plurals across languages, you can use a library that supports pluralization, such as `i18next` or `react-intl`.
- **Handling numbers, dates, and currencies**: To handle numbers, dates, and currencies across languages, you can use a library that supports formatting, such as `i18next` or `react-intl`. JavaScript also provides natively the `Intl` object to handle these cases.
- **Consider right-to-left languages**: There are some languages like Arabic, Urdu or Hebrew that are written from right to left. You should consider this when designing the layout of the web application. To achieve this, you can use CSS properties like `direction: rtl`, `text-align: right` or in HTML you can use the `dir` attribute.
- **Ensure that your fonts support all languages**: To ensure that your fonts support all languages, you can use web fonts that support a wide range of characters and symbols, and using a fallback.

**Example of structure for locales**

```bash
locales/
  en/
    common.json
    home.json
  fr/
    common.json
    home.json
```

**Example of internationalization using `i18next` with `react`**

```jsx
//i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Maps the locales with common and home translations
const resources = {
  en: {
    common: {
      hello: 'Hello',
    },
    home: {
      welcome: 'Welcome to the web application',
    },
  },
  fr: {
    common: {
      hello: 'Bonjour',
    },
    home: {
      welcome: 'Bienvenue sur l\'application web',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

//App.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hello')}</h1>
    </div>
  );
}

export default App;
```

**Example using plurals with `i18next`**

**Plural Handling**: i18next automatically selects the appropriate form based on the count provided. For English and French, rules such as \_0 and \_1 are used to handle special cases.

```jsx
//i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "apple": "apple",
            "apple_plural": "apples",
            "appleWithCount": "There are {{count}} apples",
            "appleWithCount_0": "There are no apples",
            "appleWithCount_1": "There is one apple"
        }
    },
    fr: {
        translation: {
            "apple": "pomme",
            "apple_plural": "pommes",
            "appleWithCount": "Il y a {{count}} pommes",
            "appleWithCount_0": "Il n'y a pas de pommes",
            "appleWithCount_1": "Il y a une pomme"
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

//App.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function ApplesComponent() {
  const { t } = useTranslation();
  const count = 0; // Change this to see different messages

  return <div>{t('appleWithCount', { count: count })}</div>;
}

export default ApplesComponent;

```

## Organizing Code

In terms of organizing code, there are some guidelines for React/JavaScript codebases that can help to improve the maintainability, readability, and scalability of the codebase. By optimizing the code organization process, developers can reduce the complexity of the codebase, improve the consistency of the codebase, and increase the productivity of the team. There are many factors that can affect the code organization process, such as the size of the codebase, the number of developers working on the codebase, and the complexity of the codebase.

### Simple Folders and files structure

- **src/**: The `src` folder is the root of the project and contains all the source code of the web application. You can create subfolders for different parts of the web application, such as components, pages, hooks, services, store, types, assets, constants and utils.
- **public/**: The `public` folder contains static assets such as images, fonts, and other files that are served by the web application.
- **tests/**: Contains all the tests configurations files for the web application.
- **build/ (generated)**: Contains the build files of the web application.
- **docs/**: Contains all important documentation for the project.

**Example of structure for a React project**

```bash
src/
  components/
    Button/
      index.js
      Button.js
      Button.test.js
    Input/
      index.js
      Input.js
      Input.test.js
  pages/
    Home/
      index.js
      Home.js
      Home.test.js
    About/
      index.js
      About.js
      About.test.js
  hooks/
    useFetch.js
    useLocalStorage.js
  services/
    api.js
  store/
    actions.js
    reducers.js
    store.js
  types/
    index.d.ts
  assets/
    images/
    fonts/
  constants/
    index.js
  utils/
    index.js
public/
    index.html
    favicon.ico
    manifest.json
tests/
    jest.config.js
    setupTests.js
build/
docs/
```

### Folder structure based on features

If your application has already defined domains or features, you can organize your codebase based on features. This approach can help you to group related components, pages, hooks, services, and store files together, making it easier to navigate and maintain the codebase. One of the benefits of this approach is that it can help you to reduce the complexity of the codebase and improve the scalability of the application.

**Example of structure for a React project based on features**

```bash
src/
  auth/
    components/
      LoginForm/
        index.js
        LoginForm.js
        LoginForm.test.js
      RegisterForm/
        index.js
        RegisterForm.js
        RegisterForm.test.js
    pages/
      Login/
        index.js
        Login.js
        Login.test.js
      Register/
        index.js
        Register.js
        Register.test.js
    hooks/
      useAuth.js
    services/
      authService.js
    store/
      authActions.js
      authReducers.js
      authStore.js
  dashboard/
    components/
      Sidebar/
        index.js
        Sidebar.js
        Sidebar.test.js
      Header/
        index.js
        Header.js
        Header.test.js
    pages/
      Dashboard/
        index.js
        Dashboard.js
        Dashboard.test.js
    hooks/
      useDashboard.js
    services/
      dashboardService.js
    store/
      dashboardActions.js
      dashboardReducers.js
      dashboardStore.js
  settings/
    components/
      ProfileForm/
        index.js
        ProfileForm.js
        ProfileForm.test.js
      PasswordForm/
        index.js
        PasswordForm.js
        PasswordForm.test.js
    pages/
      Profile/
        index.js
        Profile.js
        Profile.test.js
      Password/
        index.js
        Password.js
        Password.test.js
    hooks/
      useSettings.js
    services/
      settingsService.js
    store/
      settingsActions.js
      settingsReducers.js
      settingsStore.js
...
```

## Personalization and A/B Testing

### Personalization

Personalization involves creating a unique experience for each user based on their preferences, behavior, location, and context. There are many factors that can affect the personalization process, such as the amount of data collected, the quality of the data, and the algorithms used to analyze the data. One way to achieve personalization in React is having a service to retrieve `user preferences` and putting them in the `Context API` or `Redux` to be used by the components.

### A/B Testing

A/B testing is a technique that compares two versions of a web application to determine which one performs better. By optimizing the A/B testing process, you can identify the most effective design, content, and functionality for a web application, and improve the overall user experience. There are many factors that can affect the A/B testing process, such as the size of the test group, the duration of the test, and the metrics used to measure success.

**Steps for A/B Testing**

- **Segment your users**: Divide your users into different segments based on their behavior, location, and context to create personalized experiences.
- **Serving different versions**: Serve different versions of the web application to different segments of users to test which version performs better.
- **Collecting data**: Collect data on user behavior, engagement, and conversion rates to measure the success of the A/B test.
- **Analyzing the results**: Analyze the data collected during the A/B test to determine which version of the web application performs better.
- **Use a tool to achieve A/B Testing**: There are many tools available for A/B testing, such as [Optimizely](https://www.optimizely.com/products/experiment/web-experimentation/), [Statsig](https://statsig.com/), [AB Tasty](https://www.abtasty.com/), [LaunchDarkly](https://launchdarkly.com/features/experimentation/).

### Feature Flags

Feature flags is another technique that allows developers to control the visibility of features in a web application. By optimizing the feature flags process, developers can release features gradually, test new features with a subset of users, and improve the overall user experience. Some steps to implement feature flags are:

- **Define the feature flags**: Define the feature flags that you want to control in the web application.
- **Implement the feature flags**: Implement the feature flags in the web application using a library or service.
- **Control the visibility of features**: Control the visibility of features in the web application based on the feature flags.
- **Gradual rollout**: Gradually roll out new features to a subset of users to test the performance and stability of the features.
- **Monitor the performance**: Monitor the performance of the features using metrics and analytics to measure the success of the feature flags.

## Scalable Web Architecture

**Scalability** could be defined as "a system’s capacity to handle varying workloads by adding or removing resources as needed" or "the capability of a web architecture to handle growth gracefully". There are a set of components involved in scalability such as:

### Load balancer

Load balancing is the process of distributing incoming traffic across multiple servers to ensure that no single server is overwhelmed. Configuring a load balancer involves:

- Algorithm selection: Round-robin, Least connections, IP hash, etc.
- Health checks: Monitoring the health of the servers to ensure that only healthy servers receive traffic.
- Auto-scaling: Automatically adding or removing servers based on the traffic load.

### Cache

Caching is the process of storing frequently accessed data in memory to reduce the response time of the web application. There are many types of caching available for web applications, such as:

- Client-side caching: Caching data in the browser to reduce the number of requests to the server.
- Server-side caching: Caching data on the server to reduce the response time of the web application, using tools like [Redis](https://redis.io/), [Memcached](https://memcached.org/), or [Varnish](https://varnish-cache.org/).
- Content delivery network (CDN): Caching data on edge servers to reduce the latency of the web application.

### Microservices

Microservices is an architectural style that structures an application as a collection of small, autonomous services that are loosely coupled and independently deployable. By implementing microservices the scalability can be improved by:

- Decoupling services: Breaking down the monolithic application into smaller services that can be deployed independently.
- Scaling services: Scaling individual services based on the traffic load.
- Fault isolation: Isolating failures to prevent them from affecting other services.

### Database sharding and replication

Database sharding is the process of partitioning a database into smaller, more manageable parts called shards. Database replication is the process of copying data from one database to another to improve the availability and reliability of the database.

### Creating and orchestrating containers

Containers are lightweight, portable, and self-contained units that can run on any platform. By creating and orchestrating containers, developers can improve the scalability, reliability, and performance of the web application. Some tools for creating and orchestrating containers are:

- Docker: A platform for developing, shipping, and running applications in containers.
- Kubernetes: An open-source platform for automating the deployment, scaling, and management of containerized applications.

## Testing

In few words "Testing is how we make sure that the software does what it is supposed to do". There are several types of testing available for web applications, such as:

### Unit Testing

Unit Tests are tests that verify the behavior of individual units of code, such as functions, classes, or components. By writing unit tests, developers can ensure that the code behaves as expected and prevent regressions. The most popular libraries for unit testing in React are [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). The difference between them is that Jest is a test runner and assertion library, while React Testing Library is a testing utility for React components.

Usually Unit Tests follow a testing pattern called `AAA` (Arrange, Act, Assert):

- **Arrange**: Set up the test by creating the necessary objects, data, and context.
- **Act**: Perform the action that you want to test.
- **Assert**: Verify that the action produces the expected result.

### End-to-End Testing

End-to-End Tests are tests that verify the behavior of the web application from the user's perspective. By writing end-to-end tests, developers can ensure that the web application behaves as expected and prevent regressions. The most popular libraries for end-to-end testing in React are [Cypress](https://www.cypress.io/) and [Puppeteer](https://pptr.dev/).

### Integration Testing

Integration Tests are tests that verify the interaction between different units of code, such as components, services, or modules. The most popular libraries for integration testing in React are [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Snapshot Testing

Snapshot Testing is a testing technique that captures the output of a component and compares it to a previously saved snapshot. This approach is useful for detecting regressions in the UI of the web application. The most popular libraries for snapshot testing in React are [Jest](https://jestjs.io/) and [React Test Renderer](https://reactjs.org/docs/test-renderer.html).

### Good practices for testing

- **Write tests early**: Write tests early in the development process to prevent regressions and ensure the quality of the codebase.
- **Write focused tests**: Write focused tests that test a single unit of code to improve the readability and maintainability of the tests.
- **Define a coverage threshold**: Define a coverage threshold for the tests to ensure that the codebase is well-tested. You can use tools like [Codecov](https://about.codecov.io/) or [Coveralls](https://coveralls.io/) to measure the test coverage.
- **Consider using TDD**: Consider using Test-Driven Development (TDD) to write tests before writing the code to ensure that the code behaves as expected.
- **Evaluate Testing Strategies**: There are some strategies to evaluate the testing process, such as Testing Pyramid, Testing Trophy, Testing Quadrants, Testing Ice Cream Cone, Testing Honeycomb, Mutation Testing, Property-Based Testing, or Fuzz Testing.

## Tooling

Tooling enables developers to automate repetitive tasks, improve the quality of the codebase, and increase the productivity of the team. There are many tools available for web applications that help on every stage of the development process, such as:

- **Git**: A distributed version control system that allows developers to collaborate on the codebase. There are several strategies but the most popular are [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) and [Trunk Based Development](https://trunkbaseddevelopment.com/).
- **Static Code Analysis**: A process that helps developers identify and fix problems in the codebase. The most popular tools are:
  - [SonarQube](https://www.sonarqube.org/)
  - [Code Climate](https://codeclimate.com/)
  - [Codacy](https://www.codacy.com/)
  - [Codecov](https://about.codecov.io/)
- **Linters**: Linters help to enforce coding standards and identify potential issues in the codebase. The most popular linters are:
  - [ESLint](https://eslint.org/): A linter for JavaScript that helps developers identify and fix problems in the codebase.
  - [Stylelint](https://stylelint.io/): A linter for CSS that helps developers identify and fix problems in the codebase.
  - [Husky](https://typicode.github.io/husky/): A tool that helps developers run linters and tests before committing the code.
- **Code Formatters**: A tool that helps developers format the codebase according to a specific style guide. The most popular code formatters are:
  - [Prettier](https://prettier.io/): A code formatter that helps developers format the codebase according to a specific style guide.
  - [ESLint](https://eslint.org/): A linter that can also format the codebase according to a specific style guide.
- **Test Runners**: A tool that helps developers run tests and generate reports. The most popular test runners are:
  - [Jest](https://jestjs.io/)
  - [Cypress](https://www.cypress.io/)
- **Accessibility Testing**: A process that helps developers identify and fix accessibility issues in the codebase. The most popular tools are:
  - [axe](https://www.deque.com/axe/)
  - [Pa11y](https://pa11y.org/)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- **Bundlers**: A tool that helps developers bundle the codebase into a single file. Also bundlers help to optimize image sizes, apply techniques like lazy loading, code splitting and tree shaking.The most popular bundlers are:
  - [Vite](https://vitejs.dev/)
  - [Webpack](https://webpack.js.org/)
  - [Rollup](https://rollupjs.org/)
  - [Parcel](https://parceljs.org/)
  - [Turbopack](https://turbo.build/pack)
- **CI/CD pipelines**: Continuous Integration (CI) and Continuous Deployment (CD) pipelines that help developers automate the build, test, and deployment process. The most popular tools are:
  - [GitHub Actions](https://github.com/features/actions)
  - [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
  - [Travis CI](https://www.travis-ci.com/)
  - [CircleCI](https://circleci.com/)
  - [Jenkins](https://www.jenkins.io/)
- **Logging and performance monitoring**: A process that helps developers monitor the performance of the web application and identify bottlenecks. The most popular tools are:
  - [Sentry](https://sentry.io/)
  - [Datadog](https://www.datadoghq.com/)
  - [ELK Stack](https://www.elastic.co/elastic-stack/)

## Technical Migrations

Technical migrations may involve changes and upgrades to the codebase, infrastructure, or tools used in the web application. By optimizing the technical migration process, developers can improve the performance, reliability, and security of the web application. There are many factors that can affect the technical migration process, such as the complexity of the migration, the impact on the codebase, and the resources required to complete the migration.

A migration strategy should consider the following aspects:

- Understand the scope of the migration
- Developing a migration plan
- Implementing incremental migrations
- Monitor and optimizing performance
- Testing thoroughly
- Communicating with stakeholders
- Write CodeMod (Code Modifications) scripts to automate the migration process

### Migration strategies

- **Good migration**: A good migration involves planning, testing, and monitoring the migration process to ensure that the web application behaves as expected.
- **Fast migration**: A fast migration involves dividing the application into smaller parts and migrating each part incrementally.
- **Strangler Application**: A Strangler Application is a migration strategy that involves gradually replacing parts of the application with new components until the entire application is migrated.
- **Hybrid approach**: A hybrid approach involves combining different migration strategies to achieve the best results.
- **Use of Generative AI**: Generative AI can help developers automate the migration process by generating code based on examples or patterns, code completion, code refactoring, code translation, or code documentation.
