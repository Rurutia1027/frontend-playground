// If statements
if (true) {
  console.log("Runs...");
}

if (false) {
  console.log("This will not shown on console");
} else {
  console.log("Else condition will run...");
}

console.log("=====");

if (!false) {
  console.log("if branch runs...");
} else {
  console.log("Else condition will run...");
}

var condition = 1 > 0;
if (condition) {
  console.log("condition is true");
}

var gender = "M";

if (gender == "M") {
  console.log("gender is male");
} else if (gender == "F") {
  console.log("gener is female");
} else {
  console.log("gender is unknown");
}
