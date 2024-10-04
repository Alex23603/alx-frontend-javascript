// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Store the size
    this._location = location; // Store the location
  }

  // Cast the object into a number, return the size
  valueOf() {
    return this._size;
  }

  // Cast the object into a string, return the location
  toString() {
    return this._location;
  }
}
