const map = new Map();

map
  .set("name", "Sebby")
  .set("age", 21)
  .set("delete_field", true)
  .set("address", {
    city: "Pelican Town",
    locaton: "Hill",
  });

console.log("get all keys in map ");
console.log(map.keys());

console.log();

console.log("get all values in map ");
console.log(map.values());

// iterate each value in map
for (const v of map.values()) {
  console.log("value " + v);
}

console.log();

// iterate each key in map
for (const k of map.keys()) {
  console.log("key " + k);
}

// iterate elements as entry in map
for (const entry of map) {
  let key = entry[0];
  let value = entry[1];

  console.log("iterate entry item with length of " + entry.length);

  console.log("key " + key + ", value " + value);
}
