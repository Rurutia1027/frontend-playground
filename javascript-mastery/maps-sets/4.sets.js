// Sets
const numbersArr = [1, 1, 2, 2, 3, 3, 4];
console.log(numbersArr);

const numbersSet = new Set(numbersArr);
// use set to filter duplicated items
console.log("set content(no duplicate items will appear): ");
console.log(numbersSet);

// Set#delete to remove an existing element from Set, funciton will return true
console.log(numbersSet.delete(1));

// Set#delete to remove an non-existing element from Set, function will return false;
console.log(numbersSet.delete(1));

// Set#has to verify whether the specified element exist in the Set
console.log(numbersSet.has(1));
console.log(numbersSet.has(2));

// Set#size this variable record the length of the set
console.log(numbersSet.size);

console.log("\n// traveser throught the set via forOf\n");
// traveser throught the set via forOf
for (const item of numbersSet) {
  console.log("item " + item);
}

// traverse each element in set via forEach funciton
console.log("\n// traverse each element in set via forEach funciton\n");
numbersSet.forEach((item) => {
  console.log("item " + item);
});

// convert array into set
const arr = [1, 2, 3, 45, 56, 6, 1, 3, 4, 5, 6];
const arr_to_set = new Set(arr);
console.log(arr_to_set);

// convert set into array
const set_to_arr = Array.from(arr_to_set);
console.log(set_to_arr);

// ok let's try some classic operation upon sets

// union/join

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3, 4, 5]);
const union_set = new Set([...setA, ...setB]);
console.log("union result", [...union_set]);

// insersection
const intersection = new Set([...setA].filter((item) => setB.has(item)));
console.log("inter-section result ", [...intersection]);

/// difference
const diff = new Set([...setA].filter((item) => !setB.has(item)));
console.log("difference result ", [...diff]);

// cross join
const crossJoin = [...setA].flatMap((a) => [...setB].map((b) => [a, b]));
console.log("Cross Join ", [...crossJoin]);

// append
// append items from setA -> setB
setA.forEach((item) => setB.add(item));
console.log("append all elements in setA to setB", [...setB]);
