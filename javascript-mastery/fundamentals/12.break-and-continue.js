// Break and Continue

console.log("== break == ");

for (var i = 0; i <= 10; i++) {
  console.log("value of i is " + i);
  if (i == 3) {
    console.log("condition match break!");
    break;
  }
}

console.log("== continue == ");

for (var i = 0; i <= 10; i++) {
  if (i <= 5) {
    console.log("go back, ollowing logic will not be executed");
    continue;
  }

  console.log("value of i is " + i);
}
