// Arrays Map Operation

const numbers = [1, 2, 3, 4, 5];
// loop the elements in numbers array and multiple each element by 2
const numberTimesTwo = numbers.map((item) => {
  return item * 2;
});

console.log(numbers);
console.log();
console.log(numberTimesTwo);

const numbersTimesFour = numbers.map((_) => _ * 4);
console.log();
console.log(numbersTimesFour);
