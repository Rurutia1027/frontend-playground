// Spread Operator

const person = {
  firstName: "Sebby",
  age: 21,
  isFemale: true,
  balance: 1000000000.32,
  dob: new Date(2002, 1, 12).toJSON(),
  address: {
    city: "Pelican Town",
    postCode: "SW9",
  },
  innerFieldToBeDelete: true,

  // in object we can defined series of object's inner functions
  toString: function () {
    // in the scope of object's inner function
    // we can use this to refer to the instance of the object
    // just like java
    return `Name: ${this.firstName} Age: ${this.age}`;
  },
};

// -- Copy Arrays with Spread Operator
console.log("// -- Copy Arrays with Spread Operator \n");

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
const arr3 = [3, 4, 5, ...arr1, ...arr2];
const arr4 = [...arr1, 3, 4, 5, ...arr2];
console.log(arr2);
console.log(arr3);
console.log(arr4);

// -- Merging Arrays with Spread Operator
console.log("// -- Merging Arrays with Spread Operator\n");
const list1 = [1, 2];
const list2 = [3, 4];
const mergedArr = [...list1, ...list2, ...list2];
// this is much simpler than java system copy
console.log(mergedArr);

// Copy Objects wit Spread Operator
console.log("// Copy Objects wit Spread Operator \n");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { a: 1, b: 2, obj1: obj1, obj2: obj2 };
const mergeObj1 = { ...obj1, ...obj2 };
const mergeObj2 = { ...obj1, ...obj2, ...obj3 };
console.log("mergeObj1 : " + JSON.stringify(mergeObj1, null, 1));
console.log("mergeObj2 : " + JSON.stringify(mergeObj2, null, 1));

//here we modify the obj1 and obj2 and see what happens in mergeObj1, megeObj2 and obj3
obj1.extraField = "add a extraField";

// add a function to obj2
obj2.toString = function toString() {
  return this.c + " " + this.d;
};

console.log(
  "// Copy Objects wit Spread Operator update original obj and verify shallow copy\n"
);

// -- here if we add the function to origin object, it supports to be invoked
// in all spread operator merged objects like mergeObj1, mergeObj2
// eventhough the JSON#stringify print info skip the funciton
console.log("obj2 toString : " + obj2.toString());
console.log("obj3 : " + JSON.stringify(obj3, null, 1));
console.log("mergeObj1 : " + JSON.stringify(mergeObj1, null, 1));
console.log("mergeObj2 : " + JSON.stringify(mergeObj2, null, 1));

// this cannot work, we need to re-assign manually
console.log(
  "mergeObj1#toString() : " + JSON.stringify(mergeObj1.toString(), null, 1)
);

mergeObj1.toString = obj2.toString;
// then it can work

console.log(
  "mergeObj1#toString() : " + JSON.stringify(mergeObj1.toString(), null, 1)
);

// this can not work, we need to re-assign manually, because function is heap-located
// and spread operator only exeuctes shallow copy
console.log(
  "mergeObj2#toString() : " + JSON.stringify(mergeObj2.toString(), null, 1)
);
mergeObj2.toString = obj2.toString;
console.log(
  "mergeObj2#toString() : " + JSON.stringify(mergeObj2.toString(), null, 1)
);
