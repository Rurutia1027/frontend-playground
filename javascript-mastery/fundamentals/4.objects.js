// Objects 

// this is a object 
var person = {
    firstName: "Jamila",
    age: 21, 
    isFemale: true, 
    balance: 100.32, 
    dob: new Date(2002, 1, 12).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
}; 

console.log(person.firstName);
console.log(person.age);
console.log(person.balance); 
console.log(person.address);
console.log(person.address.city);
console.log(Object.values(person)); 
console.log(Object.keys(person));  
console.log(JSON.stringify(person)); 

