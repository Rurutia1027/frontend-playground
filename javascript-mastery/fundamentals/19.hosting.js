// Hosting
var brand;
var person;

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// what we expect is the i variable only works in the scope of the loop
// when outof the loop it should be unaccessible
// but here we can still get access the history value of i
// and we don't want this, this feature of loop inner defined variable still not go invalid is called hosting.
// to avoid this phonenomen we better use the let instead of 'var' 
// in the loop key word, 
console.log("value of i outside loop " + i);
