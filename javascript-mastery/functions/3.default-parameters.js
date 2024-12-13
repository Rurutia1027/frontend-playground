// Arrow Functions

const getBrand = (brand) => {
  console.log(brand);
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
};

const brand = getBrand("Amigoscd");
console.log(JSON.stringify(brand, null, 1));

const getBrandWithDefaultParams = (brand = "Nike") => {
  return getBrand(brand);
};

// default value to parameter brand is already set in its function signature
const ret = getBrandWithDefaultParams();
console.log(JSON.stringify(ret), null, 1);

// understand what's default parameters in javascript
/**
 * In JavaScript, default parameters allow you to set a default value for a function
 * parameter if no value or undefined is passed for that parameter when the function is called.
 *
 * This feature(a little bit like python) makes your code more consise and eliminates the need for manual
 * checks and assignments.
 * like:
 * function funcName(param1 = defaultValue1, param2 = defaultValue2) {
 *    // function body
 * }
 */

// here let us try multiple default params
const getBrandWithMultipleDefaultParametersInOrder = (
  p1 = "p1",
  p2 = "p2",
  p3 = "p3",
  p4
) => ({
  param1: p1,
  param2: p2,
  param3: p3,
  param4: p4,
});

console.log(
  JSON.stringify(
    getBrandWithMultipleDefaultParametersInOrder(
      undefined,
      undefined,
      undefined,
      4
    ),
    null,
    1
  )
);

const getBrandWithMultipleDefaultParametersInDisorder = (
  p1 = "pp1",
  p2,
  p3,
  p4 = "pp4"
) => ({
  parameter1: p1,
  parameter2: p2,
  parameter3: p3,
  parameter4: p4,
});

console.log(
  JSON.stringify(
    getBrandWithMultipleDefaultParametersInDisorder(
      "test-pp1", // occupy original default parameter
      "pp2",
      "pp3",
      undefined // default parameter works
    ),
    null,
    1
  )
);
