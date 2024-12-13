// Arrays Destructing
const names = ["Hale", "Amli", "Roin", "Abgile", "Alex"];

const hale = names[0];
const robin = names[2];
const ab = names[3];
console.log(hale);
console.log(robin);
console.log(ab);

const [Hale, Amli, ...rest] = names;
console.log(rest);
