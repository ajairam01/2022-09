const paul = {
  fn: "Paul",
  ln: "McCartney"
};

const john = {
  fn: "John",
  ln: "Lennon",

  printFullName1: function () {
    console.log(`${this.fn} ${this.ln}`)
  },

  printFullName2: () => {
    console.log(`${this.fn} ${this.ln}`);
  },

  // test: printFullName2.bind(this)
};

var fn = "Rod";
var ln = "Nolan";

function printFullName1 () {
  console.log(`traditional function says:  ${this.fn} ${this.ln}`);
}
let printFullName2 = () => {
  console.log(`arrow function says: ${this.fn} ${this.ln}`);
}

// printFullName1();
// printFullName1.apply(paul);
// printFullName1.call(john);


// printFullName2();
// fn and ln MUST be defined in the same scope

// printFullName2.apply(john);
// printFullName2.call(john);
let boundPrintFullName = printFullName2.bind(paul);
// boundPrintFullName();



console.log('working with the john OBJECT');
// john.printFullName1(); // this works as expected
// john.printFullName2(); // this does not; arrow functions are not bound
// john.printFullName2.apply(john);
// john.printFullName2.call(john);
// john.printFullName2 = john.printFullName2.bind(john);
// john.printFullName2();


class Beatle {
  constructor (fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }
  printFullName1 = function () {
    console.log(`traditional function: ${this.fn} ${this.ln}`)
  }
  printFullName2 = () => {
    console.log(`arrow function: ${this.fn} ${this.ln}`);
  }
}

console.log('working with the john CLASS INSTANCE');

const paulInst = new Beatle('P', "mcC");
paulInst.printFullName1();
paulInst.printFullName2();

const johnClassInstance = new Beatle("J", "L");
johnClassInstance.printFullName1();
johnClassInstance.printFullName2();
console.log(";;;;;")
johnClassInstance.printFullName1.apply(paul);
johnClassInstance.printFullName1.call(this);
johnClassInstance.printFullName2.apply(paul);
johnClassInstance.printFullName2.call(this);


function Person(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
}

let me = Person('R', 'N');
let bb = Person('B', 'B');
