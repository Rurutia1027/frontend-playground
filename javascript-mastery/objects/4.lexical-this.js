// Lexical this

const person = {
  firstName: "Sebby",
  cars: ["Tesla", "Ferrari"],
  age: 21,
  // instead of using toString: function() {}
  // toString() { // function body } is always recommended
  toString() {
    console.log(`Name:${this.firstName}, Age:${this.age}`);
    // take care of using arrow function to make sure function's inner this can work as expected
    this.cars.forEach((car) => {
      console.log(`Name: ${this.firstName} drives ${car}`);
    });
  },
  deleteMe: true,
};

person.toString();
