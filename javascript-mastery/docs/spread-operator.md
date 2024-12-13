# Spread Operator in JavaScript

The spread operator in JavaScript is a powerful feature represented by three dots (`...`). It is used to expand or "spread" elements of an array of object into individual elements or properties.

## Key Use Cases of Spread Operator

### Copying Arrays

- The spread operator can create a shallow copy of an array.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // this copies element of arr1 into arr2
const arr3 = [3, 4, 5, ...arr1];

console.log("content of arr2 " + arr2);
console.log("content of arr3 " + arr3);
```

### Merging Arrays

- We can use the spread operator to combine multiple arrays

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArrary = [...arr1, ...arr2];
console.log(mergedArray);
```

### Copy Objects

- The spread operator is also useful for creating shallow copies of objects.

```javascript
const obj1 = { a: 1, b: 2 };
// this copies properties of obj1 into obj2
const obj2 = { ...obj1 };

console.log(obj2);
```

### Merging Objects

- spread operator can also used to merge multiple objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// here i wanna mock obj1 has embedded object
// and merge obj1, obj2 into the mergedObj
// and continue modify obj1's embedded object and the modified value will show in mergedObje
// in this way to present that the spread operator is shallow clone not the deep clone
```

### Function Arguments

- The spread operator allows we to pass an array of arguments to a function

```javascript
const numbers = [1, 2, 3];
const sum = (x, y, z) => x + y + z;

console.log(sum(...numbers));

// so what if the nubmers length > or < the params number ?
// add a todo test it later in codes
```

### Converting a String into an Array

- We can split a string into an array of characters

```javascript
const str = "hello";
const charArray = [...str];
console.log(charArray);
// length should equal to the str#length
console.log(charArray.length());
```

### Inner Function Copy Rquires Re-Assign Manually

```javascript
// Copy Objects wit Spread Operator
console.log("// Copy Objects wit Spread Operator \n");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { a: 1, b: 2, obj1: obj1, obj2: obj2 };
const mergeObj1 = { ...obj1, ...obj2 };
const mergeObj2 = { ...obj1, ...obj2, ...obj3 };
console.log("mergeObj1 : " + JSON.stringify(mergeObj1, null, 1));
console.log("mergeObj2 : " + JSON.stringify(mergeObj2, null, 1));

//here we modify the obj1 and obj2 and see what happens in mergeObj1, megeObj2 and obj3
obj1.extraField = "add a extraField";

// add a function to obj2
obj2.toString = function toString() {
  return this.c + " " + this.d;
};

console.log(
  "// Copy Objects wit Spread Operator update original obj and verify shallow copy\n"
);

// -- here if we add the function to origin object, it supports to be invoked
// in all spread operator merged objects like mergeObj1, mergeObj2
// eventhough the JSON#stringify print info skip the funciton
console.log("obj2 toString : " + obj2.toString());
console.log("obj3 : " + JSON.stringify(obj3, null, 1));
console.log("mergeObj1 : " + JSON.stringify(mergeObj1, null, 1));
console.log("mergeObj2 : " + JSON.stringify(mergeObj2, null, 1));

// this cannot work, we need to re-assign manually
console.log(
  "mergeObj1#toString() : " + JSON.stringify(mergeObj1.toString(), null, 1)
);

mergeObj1.toString = obj2.toString;
// then it can work

console.log(
  "mergeObj1#toString() : " + JSON.stringify(mergeObj1.toString(), null, 1)
);

// this can not work, we need to re-assign manually
console.log(
  "mergeObj2#toString() : " + JSON.stringify(mergeObj2.toString(), null, 1)
);
mergeObj2.toString = obj2.toString;
console.log(
  "mergeObj2#toString() : " + JSON.stringify(mergeObj2.toString(), null, 1)
);
```

## Key Notes

- The spread operator creates a **shallow copy**, not a deep copy. Modifications in nested objects or arrays will affect the original.
- It's often used for immutability in state management (e.g., Redux, React).

The spread operator creates a **shallow copy** of the properties of an object. Here is what it means:
**Primitive Values**:
For properties with primitive values (like numbers, strings, booleans), their values are copied directly into the new object. These are simple "value copies".

**Object References**:
For properties that hold objects, arrays, or functions(non-primitives), the **reference to the object or function** is copied, not the object or function itself. (OK I got this, it is the same concept like the Rust's heap-located objects, and stack-allocated objects, the heap content will not be duplicated and copy to the target object via **Spread Operator** in Javascript). Simply speaking if we use **Spread Operator** to copy heap-located objects and heap-located functions, we simply copy the reference of it (address value instead of the heap address's inner context and data), to functions we can regard it only copy a function signature like in RPC protocols just the reference of the function without context and implementation logics. So when we try to invoke the function, it just show me a "[object Object]" yes it just a object without any context, and any initialized data in it.

**So what happens when I manually re-assign the function to the Spread Operator's target object?**
**Will JavaScript Re-Allocate a space on Heap and copy the context, data and env varaibels of the original function to the new allocated heap space ? or just bind the Spread Operator's target object's function reference to the original heap located function context ?**

- Suppose-1: Actually this will not happen: So that's why we need to manually duplicate(copy) the instance of of the function, this manually operation will re-allocate a spece in the heap, and inject the original's functions context, data and initialized variables to the new allocated heap and bind the heap to the target object.

- Suppose-2: This will happen: So when we manually re-assign the **Spread Operator**'s target object with the orignal function, it will not re-allocate a Heap space and copy the original function context to the heap space.
  Instead it just re-bind the **Spread Operator**'s function reference to the orignal heap-located function context. **No Heap Space Will Be Allocated, just Re-Bind**
