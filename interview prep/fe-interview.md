# FE Interview

Grading criteria used to establish level against submitted assessment (senior, staff, etc). Rank prompt criteria (based on levels 1-5)

## Libraries/Frameworks

- Have you worked with ReactJS?
  - What is the component lifecycle?
    - (componentWillMount, componentDidMount, componentWillReceiveProps, componentWillUpdate, componentDidUpdate, componentWillUnmount)
  - Can you talk a little about JSX?
    - (xml like syntax, allow to write HTML in React)
  - Have you used Flux or Redux? What is it's purpose?
    - (state management,enforces unidirectional data flow)
  - Can you talk to the pattern?
    - (action -> dispatcher -> store -> view)
  - Apollo GrapgQL
    - init client, HOC provider, same with Context

## Coding Best Practices

- SOLID
- goal is high readability, testability, performant, non-blocking, re-usable
- separate container, biz logic, presentational components
- reduce complexity, increase modularity
- functional composition, currying
- design for how to do: state and life-cycle management
- re-usable components
- presentational components, Pure Functional (same in, same out)
- performance: reduce re-rendering
  - state change as close to component that uses as possible
  - only updating state when necessary, useEffect, useMemo
  - uni-directional data flow (Redux), components don't update/mutate state
- reducing user-blocking changes
  - by lazy-loading, loading in background
- required Function PropTypes
- only passing props needed, not entire props
- dont mutate data structures
- authoriztn by userCan()

## Debugging

### Client

- Are you familiar with Chrome Dev Tools? (1)
  - What are some ways to debug network latency on the client-side? (3)
  - What are some ways to debug memory issues/leaks on the client-side? (3)
  - What is a common cause of the following error: Maximum call stack size exceeded? (3)

## Server

- How do you debug heap and core dumps? (5)
- What is dtrace and when would you use it? (5)

## Front-End Performance

- What is reflow? (3)
  - What are some ways to avoid or curtail reflow? (absolute/fixed positioning, batch updates …)
- What APIs can impact rendering performance in the browser? (getComputedStyle, getClientRect, scroll related APIs, …)

## Problem Statement (to lead into line of questioning)

## Higher Order Functions

A function that accepts and/or returns another function is called a higher-order function.

const addX = (x) => (y) => x + y

It’s higher-order because instead of strings, numbers, or booleans, it goes higher to operate on functions.

## Observer Pattern / EventEmitter (pub/sub) (3)

- Implement using high-order functions if possible.

## Sorting problem (2)

- lib vs higher-order
- algo.

## Client-Side Debugging (2)

- Scenario: You are working on a page that has a pie chart graph. When you load the page the pie chart doesn’t show. How do you debug this?
- In Chrome Dev Tools > Console log shows the following error:

```
Uncaught TypeError: this.experiment.get(...).first is not a function
at child.getSharedControlModel (layers.js:75)
at child.getRequestedSharedControlPercent (layers.js:87)
at child.renderPieChart (layers.js:108)
```

## Sources tab

- set breakpoint on the error line
- reload the page
