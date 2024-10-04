// 10-car.js

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car object
  cloneCar() {
    const CloneCar = this.constructor[Symbol.species] || this.constructor;
    return new CloneCar();
  }

  // To ensure the clone method works with subclasses too
  static get [Symbol.species]() {
    return this;
  }
}
