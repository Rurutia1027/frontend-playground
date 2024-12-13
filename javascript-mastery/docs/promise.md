# Notes for Promise in JavaScript

A **Promise** in JavaScript is essential a container or placeholder for the result an asynchronous operation that might complete at some point in the future. It allows you to **pre-define reactions(handlers)** for different possible outcomes of that operation. ONce the asynchronous operaiton finishes, the promise transitions to a settled state, and the appropriate reaction is executed.

## How to Define a Promise

In JavaScript, when we define a Promise the parameter we pass to `Promise` is a callback function which with two parameters. The two parameters are defined as `resolve` which means the event to be happend in future will success(`then()` will handle this situation), and the other parameter is `reject` which means the event to be executed and finished in future will fail(`catch()` will handle this situation).

**1. Pre-Define Reactions**:
When we create or use a promse , we attach handlers (via `then()` for success result, `.catch()` for failure result) to specify what should happen when the asynchronous operation finishes.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // mimic an async operation(which will be finished in future but when ? it depends other modules or systems or I/O operations)
  setTimeout(() => {
    // suppose success is a return value from other system or module asynchronously
    const success = true;
    if (success) {
      // if the result is success we handle the coming logic to resolve --- the success handler
      // but the actual implementation details of the success handler
      // will be implemented in the myPromise#then((result) => {// handler implementation codes})
      resolve("Operation succeed!");
    } else {
      // otherwise we handle the coming context to reject -- the failure handler
      // but the actual implementation details of the the faileure handler
      // will be implemented in the myPromise#catch((error) => {// handler implementation codes}) this branch
      reject("Operation failed");
    }
    // and here the 1000 means, the setTimeout's inner logic will be
    // executed after 1 second, in this way mimic the async event
  }, 1000);
});

/// here is the implementation of both the success event handler --> then(...)
// and the faileure event handler --> catch(...)
```

**2.Async Event Finishes**

- The promise remains in the `Pending` state until the asynchronous operation completes.
- When the async operation finishes, the promise's state transitions to either:
  **Fulfilled(if resolve is called)**
  **Rejected(if reject is called)**

**3. Trigger Reactions**
Once the state changes, the promise triggers the **pre-defined handlers** bound to it (`then(success case handler)` or `catch(failure error case handler)`) and pass the operation's result as an argument to those handlers.

**4. Chainable Logic**
Promises allow chaining by returning a new promise from a `.then()` or `.catch()` handlers. This enables a sequence of asynchornous operaitons to execute in a clean and reaable way.(this is just like a serises of handlers to process from source -> target like handlers in Netty in Java).

---

## Key Points

- A **promise** provides a structred way to manage and react to asynchronous events.
- The **pre-defined reactions (then(), catch())** ensure that you can handle different(success, failure) outcomes without needing nested callbacks.
- Promises inherently decouple the execution logic of the asynchronous event(when it happens) from the reaction logic.
- State-based trigers:

* If the async event succeeds (resolve is called, coresponding succeeded parameters will be passed to the resolve(success result parameters)), the `then()` handler is executed.
* If the async event fails(reject is called, corresponding faileure state errors will be passed to the reject(error state parameters)), the `catch()` handler is executed.

This mechanism allows you to manage complex async flows efficiently, avoiding callback-based spaghetti code.

---

## Rust Comparison

IN Rust, a similar concept is implemented with the `Future` trait.

- With `Future` in Rust we can define an **async task** (like defining a promise in Javascript).
- WE can attach pre-defined reactions using `.await` or series of combinators `and_then` to process to be coming results.
- When future completes, the execution resumes with the deinfed logic.

Rust futures, however require an executor to drive the async tasks to completion, whereas JavaScript's event loop automatically manages promise resolution.
