// Classes

// here we define a class Person
// and declare series of inner variables in it's constructor
// so that if functions or codes out of the scope of the class
// want to get access to those inner variables
// they have to use the getter functions or setter functions defined in side of the class
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  sleep() {
    console.log(`${this.firstName} is sleeping`);
  }

  eat() {
    console.log(`${this.firstName} is eating`);
  }

  play() {
    console.log(`${this.firstName} is playing`);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fName(fName) {
    this.firstName = fName;
  }

  toString() {
    return `FirstName: ${this.firstName} LastName: ${this.lastName} Gener: ${this.gender} Age: ${this.age}`;
  }
}

// here we create another class which inherit the base class person
// and add feature inner variables and corresponding functions

class SoftwareEngineer extends Person {
  constructor(firstName, lastName, gender, age, programmingLanguages) {
    // first super parent constructor and pass corresponding params
    super(firstName, lastName, gender, age);
    // the assign value to inner variables
    this.programmingLanguages = programmingLanguages;
  }

  code() {
    console.log(
      `${this.fullName} is coding using ${this.programmingLanguages}`
    );
  }
}

/// here we use export to expose both of the two classes to outside layer
/// so that outer javascript files can use them in their context

// here export unit is class
export { Person, SoftwareEngineer };
