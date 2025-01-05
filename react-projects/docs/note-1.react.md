# React Learning Notes

- `index.js` is our JavaScript entry point, we usually need to add some additional code. But normally it's just react and a function.

## Understanding Hook in React

In React, a **hook** is a special function that lets you "hook into" React feature such as state, lifecycle methods, and context from functional components. Prior to hooks, React required class components to handle these features. Hooks were introduced in React 16.8 to allow** functional components** to have the same capabilities as class components but in a simpler and more reusable way.

### Key Features of Hooks:

- State Management: With hooks, you can add state to functional components using `useState`.
- Side Effects: Hooks like `useEffect` allow you to run code after the component renders, enabling side effects like data fetching, subscriptions, or timers.
- Reusability: Hooks allow you to extract and reuse logic across components, making your code more modular and clean.
- Cleaner Syntax: Hooks provide a simpler syntax compared to class components, improving readability and reducing boilerplate code.
- Functional Components: Hooks allow functional components to do things that previously required class components, such as holding state and interacting with the lifecycle.

### Core React Hooks

- `useState`: Allows you to manage state in a functional component.
- `useEffect`: Enables side effects like fetching data or updating the DOM after a render.
- `useContext`: Allows you to access values from a context, bypassing the need to pass props through every level.
- `useReducer`: For managing more complex state logic using actions and reducers (similar to Redux).
- `useRef`: Used to persist values across renders and interact with DOM elements.
- `useMemo`: Optimizes performance by memoizing expensive calculations.
- `useCallback`: Prevents unnecessary re-creation of functions, useful for performance optimizaitons.
