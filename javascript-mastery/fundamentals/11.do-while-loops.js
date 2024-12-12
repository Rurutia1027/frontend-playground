// Do While Loops

var names = ["Sebby", "Sam", "Robin", "Abgile", "Peter", "Willy"];

var index = 0;

do {
  index++;
  console.log("name content is " + names[index]);
} while (index < 5);

// different from while, do while will let the inner logic execute once
// even though the condition not expected as true
do {
  console.log(
    "this content should be execute at least once even thought the while condition is false"
  );
} while (false);
