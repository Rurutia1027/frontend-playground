// Arrays Reduce Operation

const numbers = [1, 2, 3, 4, 5];

const ret = numbers.reduce((accmulator, current) => {
  return accmulator + current;
});

// reduce operates each of the elements in the array
// and return a single value as a result
// but we can add the justify conditions to control which of the elements in the array
// can join the calculate logic and filter the elements that not satisfy the condiiton
console.log(ret);

// more simple version
const ret2 = numbers.reduce((accumulator, current) => accumulator - current);
console.log(ret2);

// suppose we want to add all evens in the array
const even_sum = numbers.reduce(
  (accumulator, item) => {
    if (item % 2 === 0) {
      console.log(" value of item is " + item);
      // only even number will be accmulated to the accmulator
      return accumulator + item;
    }
    // return unchanged value for odd numbers
    return accumulator;
  },
  // here we set the initial value of accumulator as 0
  0
);

console.log("even sum is " + even_sum);
