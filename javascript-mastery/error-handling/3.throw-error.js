// Throw Errors in JavaScript
// in this file we will demostrate how to wrap custom define errors
// by inheriting from JavaScript inner defined Error
class MyError extends Error {
  constructor(message) {
    // as child class, in constructor
    // the first thing is super -- initialize parent class first
    super(message);
    this.name = "MyError";
  }
}

const divide = (n1, n2) => {
  if (n2 == 0) {
    throw new MyError("cannot divide by 0");
  }
  return n1 / n2;
};

try {
  console.log(divide(10, 0));
} catch (error) {
  // this should be 'MyError'
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
