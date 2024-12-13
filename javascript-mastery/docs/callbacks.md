# Understand Callbacks in JavaScript

A callback in JavaScript is

- Passing a function reference(like the function pointer) as an argument to another function.
- Invoking the function referenced by the callback at a specific point in the outer function's execution flow.

Callbacks can be categorized into two types:

- Callbacks without parameters: the outer function invokes the callback without passing any arguments.
- Callbacks with parameters: the outer function invokes the callback and supplies it with processed data or results.

To illustrate this concept, let's call the outer function `outer_func` and the callback function `inner_callback_func`.

---

**Scenario 1: Callback Without Parameters**

In this scenario, the `inner_callback_func` performs an action unrelated to the data being processed by `outer_func`.
Example:
Suppose the `inner_callback_func` updates a database status flag, and `outer_func` performs a calculation upon the parameters passes to it.

Function:
`outer_func(datasets_variables, inner_callback_func, datasets)`

Explanation:

- `outer_func` process the `datasets`.
- After completing its logic `outer_func` invokes `inner_callback_func`.
- Then the `inner_callback_func` execute it's inner logic and update the status to some specific database's table's field value.
- The `inner_callback_func` executes and updates the status in the database, decoupling the update logic from the main processing which lets the code simpler and easy to maintain.

**Scenario 2: Callback With Parameters**
In this scenario, `inner_callback_func` depends on the processed result of `outer_func`.
Example:

- The `outer_func` processes `raw_datasets` and transforms them into for example the `dataframes`.
- Then, it passes `dataframes` to `inner_callback_func` for further handling.

Function invocation:

- `outer_func(raw_datasets, inner_callback_func)`
- `inner_callback_func(dataframes)`

Explanation:

- Inside `outer_func`, `raw_datasets` are transformed into `dataframes` (e.g., filtered or transferred).
- Once the transformation is complete, `outer_func` invokes `inner_callback_func` and supplies `dataframes` as a argument to it(`inner_callback_func`).
- `inner_callback_func` can now handle the processed dataframes, such as
- Synchronizing them to a database.
- Sending them to as series of messages to a message broker or streaming systems.
- Submitting them as tasks to a computing cluster ... whatever.

**Benefits of Using Callbacks**
Callback help maintin minimal(like the closures in Rust maybe...) execution isolation by decoupling logic between the outer and inner functions.

- `outer_function` focuses on its primary task (e.g., calculations or transformings).
- `inner_callback_func` handles post-porocessing or auziliary tasks(e.g., updating databases or sending messages).

This separation of concerns makes the code more modular, maintainable, and testable.
