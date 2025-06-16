## Unit Testing

- Introduction to Unit Testing
- Unit Testing in Action
- Core Unit Testing Techniques
- Breaking Dependencies with Mocks
- Improving Code Quality with Static Analysis Tools


- Unit Testing is an Investing in Quality
- The Later we fix a bug, the more costly it is for a business
- Write tests that are maintainable, robust and trustworthy


### Types of Tests

- Unit Testing - Each component tests individually
- Integration Tests - How Different Units work together as whole
- E2E Tests simulate user interactions with the entire system

### Setup

- Install Node.js
- Install VS Code
- Using Vitest as Latest Tool:
    npm i -D vitest
- In Package.json create test script
    "test" : "vitest"
- Run in Terminal
    npm t / test


### Why Testing

To Avoid this - Manual Testing

    Launch the application
    Log in 
    Navigate to a page
    Fill out a form
    Submit it
    Check the result

Automated Testing

    Write some code  to directly call the function with various inputs check.
    Check if the function return as expected

We use test runner in terminal to see result
It return in red and green sign for result

### Benefits 

    Debugs Earlier
    Facilitates Refactoring - Changing the structure of code without changing its behavious.
    Improve Code Quality - Robust and Reliable Code
    Documentation - Other to understand and maintain

### You'll Learn

    What is Unit Testing
    - A form of automated testing where we write code to test out code.
    What are common arguments of it
    What are its benefits

    Types of Tests

    Tooling- Testing Frameworks

    Setting Vitest

    Your first tests

    Test-driven Development (TDD)

    Running tests efficiently

    Shorts to navigate code in VSCode

    Code Coverage - How much code is tested

### Where use Testing

New Projects

    Not the best candidates for unit testing.
    Requirements change, tests break.
    You'll spend more time fixing broken tests.

Stable Projects

    Cover critical modules with tests
    Changes and refactor with condifidence

### Tools

Test Runner - to run the test
Assertion Libraries - to check code behave as expected
Mocking Tools - Simulating different scenarios
Coverage Tools - How much code is tested

### Popular Frameworks

Jest, Mocha, Jasmine, Vitest, Cypress, Playwright

- Jest is older and popular
- Jext Experimental support for ECMAScript Modules
- Vitest - Support ESM, TypeScript and JSX Modern Features 
- All Work as the same
