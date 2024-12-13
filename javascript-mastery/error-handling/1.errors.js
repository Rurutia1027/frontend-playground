// Error Object

// here we create a string of invalid json string format
// which nerver be parsed into json object

const json = '{"brand, "kk} ';

try {
  console.log(brand);
  // here we invoke JSON#parse function to parse
  // the invalid json format string into JSON object
  // which will generate an error and intercepted by the cath
  // and details of the error object's inner field will be printed
  console.log(JSON.parse(json));
} catch (error) {
  console.log("we got error name:", error.name);
  console.log("we got error message:", error.message);
  console.log("we got error stack: \n", error.stack);
}

console.log();
console.log();
console.log();
try {
  console.log(brand);
} catch (error) {
  console.log("we got error name:", error.name);
  console.log("we got error message:", error.message);
  console.log("we got error stack: \n", error.stack);
}
