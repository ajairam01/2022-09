console.log('ready');


// primitives are passed by value
let a = 10;
let b = a;

const changePrim = (prim) => prim = '234532';

a = changePrim(a);

console.log(a);
console.log(b);


const addTenToXProp = (obj) => obj.x += 10;

// objects are passed by reference
let c = { x: 10, phoneNumbers: {
  home: 3243453455,
  mobile: 5435435432
} };
let d = c; // this is not a separate copy
// addTenToXProp(c);
console.log(d.x);


const addTenToPropV2 = (obj) => {

  // let result = { ...obj };
  // let result = Object.assign({}, obj);

  let str = JSON.stringify(obj);

  // // console.log('str ', str);
  let deepCopyOfObjParam = JSON.parse(str);
  // // console.log('copy ', deepCopyOfObjParam)
  let result = deepCopyOfObjParam;


  // result = structuredClone(obj); // cool, not ready for prime time yet
  result.x += 10;
  result.phoneNumbers.home = 9780980987;

  // console.log('inside ', result.x);
  return result;
}

addTenToPropV2(c);

console.log(d);

