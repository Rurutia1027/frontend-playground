// Arrays
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log("number " + num);
});

console.log();

numbers.forEach((number) => console.log("number " + number));

const indexOfFive = numbers.indexOf(5);
console.log(indexOfFive);

// splice, param-1 is the beign index of the given array
// splice, param-2 is the length of elements to be removed from the array
numbers.splice(1, 4);
console.log(numbers);
