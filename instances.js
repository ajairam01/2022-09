
import { Guitarist, NUMBER_OF_BEATLES } from "./Beatles.js";
import { Drummer } from "./Drummer.js";

const paul = new Guitarist('Paul', "McCartney", "bass");
paul.printFullName();
paul.plays();

const ringo = new Drummer('R', 'S', 'erratically');
ringo.printFullName();
ringo.plays();


// console.log('there are ', NUMBER_OF_BEATLES, ' beatles');
