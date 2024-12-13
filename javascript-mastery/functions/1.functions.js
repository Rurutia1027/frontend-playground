// Functions
function getBrand() {
  console.log("Amigoscode");
}

function getBrandV2(brand) {
  console.log(brand);
}

getBrand();

getBrandV2("test");

function getBrandV3(brand) {
  console.log(brand);
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
}

console.log(getBrandV3("Nike"));
console.log(JSON.stringify(getBrandV3("Nike"), null, 0));
console.log(JSON.stringify(getBrandV3("Nike"), null, 1));

// create const variables of function and use it anywhere event passing it as a parameter to another function
console.log("===function const pointer as parameter===");
const func_pointer = (brand) => {
  console.log(brand);
  return {
    brand: brand,
    website: `www.${brand}.com`,
  };
};

function func_params(function_parameter) {
  let ret = function_parameter("Nike");
  console.log("function pointer invoke result is " + JSON.stringify(ret));
  return ret;
}

console.log(
  "we handle the function ret result, and print it in function , and continue take it as the outer layer's return value\n"
);
console.log(func_params(func_pointer));
