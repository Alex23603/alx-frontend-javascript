0x03. ES6 Data Manipulation
Project Overview
This project focuses on data manipulation in JavaScript using ES6 features. You will learn how to handle arrays, typed arrays, and various data structures such as Set, Map, and WeakMap. Additionally, you'll explore array methods like map, filter, and reduce to manipulate data efficiently.

Start Date: October 7, 2024, 6:00 AM
End Date: October 9, 2024, 6:00 AM
Checker Released: October 7, 2024, 6:00 PM
Learning Objectives
By the end of this project, you should be able to explain the following without the help of Google:

How to use map, filter, and reduce on arrays.
Understanding and working with Typed Arrays.
The Set, Map, and WeakMap data structures.
Requirements
All code will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
Allowed editors: vi, vim, emacs, Visual Studio Code.
All files should end with a new line.
A README.md file is mandatory at the root of the project folder.
JavaScript code should use the .js extension.
Code will be tested using Jest and linted using ESLint.
Your functions must be exported for testing.
You can run all tests and linting using npm run full-test.
Setup
Install NodeJS 12.11.x
In your home directory, install NodeJS:

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify installation:

bash
Copy code
nodejs -v  # v12.11.1
npm -v     # 6.11.3
Install Jest, Babel, and ESLint
Install the required packages:

bash
Copy code
npm install
Configuration Files
Ensure the following configuration files are present in your project directory:

package.json
babel.config.js
.eslintrc.js
Tasks Overview
0. Basic List of Objects
Create a function getListStudents that returns an array of objects, each representing a student with id, firstName, and location.

File: 0-get_list_students.js

1. More Mapping
Create a function getListStudentIds that returns an array of student IDs from the list. If the input is not an array, return an empty array.

File: 1-get_list_student_ids.js

2. Filter
Create a function getStudentsByLocation that returns an array of students located in a specific city. Use the filter function.

File: 2-get_students_by_loc.js

3. Reduce
Create a function getStudentIdsSum that returns the sum of all student IDs. Use the reduce function.

File: 3-get_ids_sum.js

4. Combine
Create a function updateStudentGradeByCity that updates students’ grades in a specific city. If a student doesn't have a grade, set it to N/A.

File: 4-update_grade_by_city.js

5. Typed Arrays
Create a function createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

File: 5-typed_arrays.js

6. Set Data Structure
Create a function setFromArray that returns a Set from an array.

File: 6-set.js

7. More Set Data Structure
Create a function hasValuesFromArray that returns a boolean indicating whether all elements in the array exist within a set.

File: 7-has_array_values.js

8. Clean Set
Create a function cleanSet that returns a string of all set values starting with a specific string, concatenated with -.

File: 8-clean_set.js

9. Map Data Structure
Create a function groceriesList that returns a Map of groceries with specified names and quantities.

File: 9-groceries_list.js

10. More Map Data Structure
Create a function updateUniqueItems that updates the quantity of items in a map where the initial quantity is 1 to 100. If the input is not a map, throw an error.

File: 10-update_map.js

Conclusion
This project offers valuable insight into manipulating data structures and arrays in JavaScript using ES6 features. Mastering these concepts will prepare you for more complex data handling tasks in JavaScript applications.
