const person = {
  firstName: "Sebby",
  age: 21,
};

console.log(person);

// here we create a map
const map = new Map();

map.set("a", 1);
map.set(2, "c");
console.log(map);

console.log(typeof map);

// we cannot get keys via this expression like extract keys from object
// (NOTE RECOMENDED): const key_set = Object.keys(map); --> this cannot work

const m_keys = map.keys();
for (const key of m_keys) {
  let value = map.get(key);
  console.log(key + ": " + value);
}
// so what's the type of the Object.keys(person);
// and Objects.values(person);

const keys = Object.keys(person);
console.log(typeof keys);
console.log(keys);
const values = Object.values(person);
console.log(typeof values);
console.log(values);
