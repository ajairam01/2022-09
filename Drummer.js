import { Beatle } from "./Beatles.js";

export class Drummer extends Beatle {
  constructor(fn, ln, drummerType) {
    super(fn, ln);
    this.drummerType = drummerType
  }

  plays = function () {
    console.log(`${this.fn} ${this.ln} plays ${this.drummerType}`)
  }
}
