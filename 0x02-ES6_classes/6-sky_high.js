// 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    this._floors = floors; // Store the number of floors
  }

  get sqft() {
    return this._sqft; // Getter for sqft
  }

  get floors() {
    return this._floors; // Getter for floors
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Override the method
  }
}
