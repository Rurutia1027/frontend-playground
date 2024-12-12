// Loops 
for (var i = 0; i <= 5; i++) { 
    console.log("value of i is " + i); 
}

var names = ["Sebby", "Sam", "Abigel", "Hale", "Robin", "Lya"];
for (var index = 0; index < names.length; index++) { 
    console.log("name " + names[index]); 
}

console.log(); 

// this is forof 
console.log("for of"); 
for (const element of names) {
    console.log(element); 
}

// this is foreach 

console.log("for each v1"); 

names.forEach((name) => { 
    console.log("name content is " + name); 
});

console.log("for each v1"); 

names.forEach(name => {
    console.log("--name--content--is--" + name); 
});

console.log("for each v1"); 

names.forEach(function (name) {
    console.log("function name content is " + name); 
    
});