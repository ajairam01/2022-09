const john = {
  name: "JL",
  instrument: "rhythm guitar",
  ranking:1,
  recordCount: 20
};
const yoko = new Object();

yoko.name = "YO";

let secondPropName = 'instrument';

// yoko.secondPropName = "ukulele";
yoko[secondPropName] = "ukulele";

console.table(yoko);


console.log("john");
for (propName in john) {
  console.log(propName, ' : ', john[propName] );
}

console.log("yoko");
for (propName in yoko) {
  console.log(propName, ' : ', yoko[propName] );
}


// Object.keys()
// Object.values()
const keys = Object.keys(john)
const values  = Object.values(john)
console.log(keys);
console.log(values);

console.log('looping over keys')
keys.forEach(
  value => console.log(john[value])
)

console.log('looping over values')

values.forEach(
  value => console.log(value)
  )

console.log('looping over values chained ')

Object.values(john).forEach( element => console.log(element) );
