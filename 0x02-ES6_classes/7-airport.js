// 7-airport.js
export default class Airport {
  constructor(name, code) {
    this._name = name; // Store the name of the airport
    this._code = code; // Store the airport code
  }

  // Override the toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
