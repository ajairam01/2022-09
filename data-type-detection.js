let notEvenDefined;
let isWarmOutside = true; // false
let isColdoutside = new Boolean(false);
let firstName = `Rod`; // 'Rod', `Rod`
let lastName = new String("Nolan");
let mySalary = 100.1;
let myDesiredSalary = new Number(1234567890);
let nothing = null;

let anEmptyArray = [];
let anotherEmptyArray = new Array();
let now = new Date();


console.log("notEvenDefined", typeof notEvenDefined);
console.log("isWarmOutside", typeof isWarmOutside);
console.log("isColdoutside", typeof isColdoutside);
console.log("firstName", typeof firstName);
console.log("lastName", typeof lastName);
console.log("mySalary", typeof mySalary);
console.log("myDesiredSalary", typeof myDesiredSalary);
console.log("nothing", typeof nothing);
console.log("anEmptyArray", typeof anEmptyArray);
console.log("anotherEmptyArray", typeof anotherEmptyArray);
console.log("now", typeof now);


// typeof returns a string that describes the data type
// the instanceof operator returns boolean

myDesiredSalary = Boolean(myDesiredSalary);

if (myDesiredSalary instanceof Boolean) {
  console.log('yes, it is');
} else {
  console.log('no, it is not');
}

// truth-y vs false-y
console.log(Array.isArray(anEmptyArray));
// console.log(anEmptyArray.isArray());
console.log(nothing);


// anEmptyArray = null;


mySalary = 0;

if (myDesiredSalary) {
  console.log('truthy')
} else {
  console.log('falsey')
}

console.log(firstName.length);
console.log(lastName.length);
