// const
let brand = "Amigoscode";
console.log(brand);

// we all know that one of the multiple features of javascript
// is non-type which means, we let brand = "Amigoscode"; then the type of the brand is string
// but we can continue use the brand this variable to point to other types like integer
// json objects,
// but, there are some scenarios we prefer the variable cannot be re-assign/re-point to other types
// just like in java we declare a variable use the static and final

// in java-script, we often use the const to implement the same feature in java's static & final

brand = {};
brand = 10;
console.log(brand);
console.log(typeof brand);

// if we do not limit the variable
// it can even reassign/repoint to a function
brand = function () {
  return "hello";
};

console.log(brand);
console.log(typeof brand);

// so we use the const to disable this re-assignment feature in javascript
// which means bind the variable name and the instance of the value tightly
// the variable name cannot allowed to assign other instances anymore

const variable_2 = "Hello";

// once we add const to variable_2
// this re-assignment operation will go wrong, error message like this:
// TypeError: Assignment to constant variable. at Object.<anonymous>
// variable_2 = () => {
//   return "Hello";
// };

// this feature is similar to the rust, in rust we have stack-located variables: all rust basic types are allocated on the stack
// but when we use the rust variable which are allocated on heap
// the immutable value's inner value can be updated, once we add the mut \
// the constant of the heap-allocated objects is only the address is constant
// but the heap's address inner value content can be updated as long as the variable use 'mut' decorated

// and i think in javascript it is the same with the heap-located variables
// for exmaple we create an instance of {} and decorated it with the const
// and update the {}'s inner value this should be allowed

// simply speaking, re-assignment of stack-located variables and heap-located variables
// not the same thing, for former one ,all contents are located in stack space, cannobe reasign and update
// but for latter one, it's address' inner value can be udpated, but re-assign the address value is not allowed.

const heap_located_obj = {};
console.log("heap allocated instance content " + heap_located_obj);
heap_located_obj["a"] = "b";
// heap located object content b
console.log("heap located object content " + heap_located_obj["a"]);

// we can also remove the heap_located_obj's inner value by delete

// maybe i guess it must re-bind the object's association via another instance from the address link layer
delete heap_located_obj.a;
// then we got a content undefined
console.log("heap located object content " + heap_located_obj["a"]);
