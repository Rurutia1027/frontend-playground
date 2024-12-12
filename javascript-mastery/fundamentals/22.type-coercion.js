// TypeCoercion
// What is Type Coercion: it supports type convert into another type by its original computer 0/1 code value

// true
console.log(0 == false);

// false
console.log(0 == true);

// true
console.log("0" == false);

// false
console.log("0" == true);

// true
console.log("1" == true);

// true
console.log("1" == 1);

// it is the feature of javascript, but how to avoid this ?
// to avoid this , we are recommended to use triple-equals like
// tirple-equals are very useful in unit test case's assert expressions

console.log("Without Type Coercion");
// false
console.log(0 === false);

// false
console.log(0 === true);

// false
console.log("0" === false);

// false
console.log("0" === true);

// false
console.log("1" === true);

// false
console.log("1" === 1);
