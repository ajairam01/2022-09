let abc = 6754;

if (true) {
  abc = 'sfhfgsg';
  console.log('a', abc);
}

console.log('b', abc);

// const variableThatCBRA = 'jskhdgvdsjkhg';
// // variableThatCBRA = 345;
// console.log(variableThatCBRA);

// final word
// don't use 'var', it's weird
// speaking of weird... hoisting goes all the way
// up to the window object so your var variables
// even leak outside this script!

var badVar = 'abcdefg';
console.log('---', badVar);
console.log('---', window.badVar);




// use 'let' or 'const', they don't get hoisted
// outside the block in which they are defined
// use const if you need to prevent the value
// from changing after it is initialized

