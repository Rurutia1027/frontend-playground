// Objects

// when trying to create/declare an object
// const is always the best keyword

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

// eventhough we haven't declare person object's lastName varaible
// but we can still add extra inner object's variables in this way
person.lastName = "Mae";

// similar to java
console.log(person.toString());

// here we can see that the lastName already append to the object's inner fields
console.log(person);

// and we can even delete the object's inner fields by delete this keyword
delete person.innerFieldToBeDelete;

// after deleting the innerFieldToBeDele will now exist in the object inner field(or inner property) anymore
console.log(person);

// inner fields/properties can be appended/delete like this
person["innerFieldToBeDelete"] = false;
console.log(person);

delete person["innerFieldToBeDelete"];
console.log(person);

console.log("traverse all property as key and property values");
console.log();
// we can even treate the object we declared as json object
// to traverse each property as key, and get access to correspoinding value
for (const p in person) {
  console.log("person." + p + ": " + person[p]);
}

console.log();
console.log("get object's key set ");
console.log(Object.keys(person));

console.log();
console.log("get object's value set ");
console.log(Object.values(person));
