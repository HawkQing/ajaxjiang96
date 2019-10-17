/* Counter

Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value
*/

class Counter {
  constructor(val = 0) {
    this.initialVal = val;
    this.val = val;
  }

  add(number = 1) {
    this.val += number;
  }

  get() {
    return `${this.val}`;
  }

  reset() {
    this.val = this.initialVal;
  }
}

module.exports = Counter;
