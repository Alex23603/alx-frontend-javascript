import Building from './5-building.js';

const b = new Building(100);
console.log(b); // Outputs: Building { _sqft: 100 }

class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch (err) {
    console.log(err); // Outputs: Error: Class extending Building must override evacuationWarningMessage
}
