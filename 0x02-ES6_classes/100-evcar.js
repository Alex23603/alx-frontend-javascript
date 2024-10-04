// Import Car class from 10-car.js
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent constructor to set brand, motor, and color
    super(brand, motor, color);
    this._range = range; // Initialize the new range attribute
  }

  // Override the cloneCar method to return a Car instance
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
