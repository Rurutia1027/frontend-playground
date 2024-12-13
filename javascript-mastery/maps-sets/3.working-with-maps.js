// Operate Map inner Elements with different Map inner defined functions

const map = new Map();

map.set("a", 1).set("b", 2).set("c", 3).set("tobe_delete", true);

console.log(map);

// print map size  via Map#size this inner deinfed variable
console.log("map size " + map.size);

// print whether map contains key 'a' via Map#has this inner defined function
console.log("is map has key 'a' in ? => " + map.has("a"));

// print whether map contains key 'b' via Map#has this inner defined funciton
console.log("is map has key 'b' in ? => " + map.has("b"));

// retrieve exist key 'a''s correspopinding vaue via Map#get this inner defined function
if (map.has("a")) {
  console.log("map's key = a value is " + map.get("a"));
}

// try to retrieve a non-exist key 'x' and find out what's inside ?
if (!map.has("x")) {
  console.log("map's key = 'x' value is " + map.get("x"));
}

// try to delete k,v pair by given key 'a', via Map#delete this inner defined function
if (map.has("a")) {
  map.delete("a");
  console.log("map content after delete operation ");
  console.log(map);
}

if (!map.has("x")) {
  map.delete("x");
  console.log("map content after delete non-exist key 'x'");
  console.log(map);
}

// extract all entries and traverse one by one
console.log("\n// extract all entries and traverse one by one\n");
let map_entries = map.entries();
for (const entry of map_entries) {
  console.log(entry[0] + ", " + entry[1]);
}

// print Object#fromEntries
console.log("\n// print Object#fromEntries \n");
console.log(Object.fromEntries(map.entries()));

// let me try whether normal object can use the fromEntries to extract items like entry items
const person = {
  n: "name",
  a: "age",
  hobby: "steam",
};

// will not work: let entries_of_person = Object.fromEntries(person.entries());
// will not work: let entries_of_person = Object.fromEntries(person.entries());

// clear all items in map
console.log("\n// clear all items in map \n before ===> ");
console.log(map);
map.clear();
console.log("\n// clear all items in map \n after ===> ");
console.log(map);
