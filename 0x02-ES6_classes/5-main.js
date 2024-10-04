import Building from './5-building.js';

const b = new Building(100);
console.log(b); // Outputs: Building { _sqft: 100 }

class TestBuilding extends Building {
  // Uncommenting the following method will prevent the error
  /*
  evacuationWarningMessage() {
    return 'This is a test building!';
  }
  */
}

try {
    new TestBuilding(200); // This line will not throw an error since we're not calling the method
} catch (err) {
    console.log(err.message); // Outputs: Error: Class extending Building must override evacuationWarningMessage
}
