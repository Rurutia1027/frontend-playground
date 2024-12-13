// Arrow Functions

function getBrand(brand) {
  console.log(brand);
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
}

// v1: let const variable point to non-arrow function
const getBrandFuncV1 = function (brand) {
  console.log("getBrandFuncV1");
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
};

console.log(
  "invoek getBrandFuncV1: " +
    JSON.stringify(getBrandFuncV1("TestNonArrowFunc"), null, 1)
);

// v2: let const variable point to hybird-arrow function
const getBrandFuncV2 = (brand) => {
  console.log("getBrandFuncV2");
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
};

console.log(
  "invoke getBrandFuncV2: " +
    JSON.stringify(getBrandFuncV2("TestHybirdArrowFunc"), null, 1)
);

// v3: complete arrow func with single params
// formular: const func_name = parameters => ({function body codes});
const getBrandFuncV3 = (brand) => {
  console.log("getBrandFuncV3");
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
};
console.log(
  "invoke getBrandFuncV3: " +
    JSON.stringify(getBrandFuncV3("TestArrowFuncWithSingleParam"), null, 1)
);

// v4: complete arrow func with multiple params
const getBrandFuncV4 = (p1, p2, p3) => {
  return {
    parameter1: p1,
    parameter2: p2,
    parameter3: p3,
  };
};

console.log(
  "invoke getBrandFuncV4 " +
    JSON.stringify(getBrandFuncV4(1, 2, "TestArrowWithMultipleParams"), null, 1)
);

// v5: complete arrow func with multiple params in most simple expression
// use () to warp the online expression to let the arrow function become the simplest
const getBrandFuncV5 = (p1, p2, p3) => ({
  parameter1: p1,
  parameter2: p2,
  parameter3: p3,
});

console.log(
  "invoke getBrandFuncV5 " +
    JSON.stringify(
      getBrandFuncV5(1, 2, "TestArrowWithMultipleParamsMostSimpleExpression"),
      null,
      1
    )
);

console.log("===embedded function inovcations ===");
const add = (a, b) => a + b;
const calculate = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b == 0) {
        console.log("b can not be 0 in divide operation");
        return 0;
      } else {
        return a / b;
      }
    default:
      console.log("unknown sign return 0!");
      return 0;
  }
};

console.log(calculate(1, 3, "*"));
console.log(calculate(1, 3, "+"));
console.log(calculate(1, 3, "-"));
console.log(calculate(1, 3, "/"));
console.log(calculate(1, 3, "&"));
console.log(calculate(1, 0, "/"));
console.log(calculate("0000", 3, "*"));
