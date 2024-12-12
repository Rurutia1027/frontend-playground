# Javascript Variable Suggestions

### Q: Under what kind of scenarios should I use the `let`, `const` and `var` to create variables?

```
Always first use the const when creating basic variables for functions that do not require re-assignment operation.

If your variables require reassignment, use the let especially in for, while, do while, and for each such kind of scoped loop logic.

var is always the last option(always not recommended) when you create variables like functions, and scoped variables because it has neither const features nor scope sensitivity which always becomes the source of the bugs.
```
