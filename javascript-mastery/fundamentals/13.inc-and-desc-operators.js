// increment and decrement Operators
var number = 0;

// number++, first print then increment the value
console.log(number++);

var number = 0;
// ++number, first increment the value of number, then print the incremented value
console.log(++number);

console.log("----");
// but in for loop expression, i++ or ++i are all the same
for (var i = 0; i <= 10; i++) {
  console.log("value of i is " + i);
}

console.log("----");
for (var i = 0; i <= 10; ++i) {
  console.log("value of i is " + i);
}
