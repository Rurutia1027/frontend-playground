// Lexical this

const person = {
  firstName: "Sebby",
  cars: ["Tesla", "Ferrari"],
  age: 21,
  toString() {
    console.log(`Name:${this.firstName}, Age:${this.age}`);
    this.cars.forEach((car) => {
      console.log(`Name: ${this.firstName} drives ${car}`);
    });
  },
  deleteMe: true,
};

person.toString();
