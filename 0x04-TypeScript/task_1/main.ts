// Interface for the constructor
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass({ firstName: 'Jane', lastName: 'Doe' });
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework()); // Output: Currently working
