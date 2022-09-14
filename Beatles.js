
export const NUMBER_OF_BEATLES = 5;

export class Beatle {
  constructor (fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }
  printFullName = function () {
    console.log(`${this.fn} ${this.ln}`)
  }

}

// inheritance
export class Guitarist extends Beatle {
  constructor(fn, ln, guitarType) {
    super(fn, ln);
    this.guitarType = guitarType
  }

  plays = function () {
    console.log(`${this.fn} ${this.ln} plays ${this.guitarType}`)
  }
}
