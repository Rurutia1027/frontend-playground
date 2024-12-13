// Creating Errors
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const err = new CustomError("opps this is the error message");
console.log("print my error's message ", err.message);
console.log();
console.log("print my error's name ", err.name);
console.log();
console.log("print my error's stack ", err.stack);
