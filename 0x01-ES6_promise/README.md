This project is an in-depth exploration of JavaScript Promises and their ES6 features. Here’s an overview of the tasks and steps to complete the project:

Project Setup
Install NodeJS: Ensure you are using NodeJS 12.11.x.

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify installation:

bash
Copy code
nodejs -v   # v12.11.1
npm -v      # v6.11.3
Install Jest, Babel, and ESLint: Use the provided package.json and run:

bash
Copy code
npm install
Configure Babel and ESLint: Add the configuration files:

babel.config.js: Setup Babel to target Node.js.
.eslintrc.js: Enforce code linting using ESLint and Jest.
Utility Functions (utils.js):

uploadPhoto: Returns a resolved promise with a sample photo response.
createUser: Returns a resolved promise with a sample user response.
Tasks
Task 0: Keep Every Promise

Objective: Write a function getResponseFromAPI() that returns a Promise.
File: 0-promise.js
Task 1: Full Response

Objective: Write getFullResponseFromAPI(success) that resolves or rejects based on a boolean argument.
True: Resolves with { status: 200, body: 'Success' }
False: Rejects with Error: The fake API is not working currently
File: 1-promise.js
Task 2: Handle Response

Objective: Write handleResponseFromAPI(promise) to handle promise resolution and rejection.
Resolution: Return { status: 200, body: 'success' }
Rejection: Return an empty Error object.
Log "Got a response from the API" in both cases.
File: 2-then.js
Task 3: Handle Multiple Promises

Objective: Use uploadPhoto() and createUser() to resolve multiple promises, logging the results.
Log photo and user details. On failure, log "Signup system offline".
File: 3-all.js
Task 4: Simple Promise

Objective: Write signUpUser(firstName, lastName) that returns a resolved promise with the user's details.
File: 4-user-promise.js
Task 5: Reject Promise

Objective: Write uploadPhoto(fileName) that rejects a promise with an error message if the file cannot be processed.
File: 5-photo-reject.js
Task 6: Handle Profile Signup

Objective: Write handleProfileSignup(firstName, lastName, fileName) to handle multiple promises and return their status.
File: 6-final-user.js
Task 7: Load Balancer

Objective: Write loadBalancer(chinaDownload, USDownload) that resolves whichever promise finishes first.
File: 7-load_balancer.js
Task 8: Throw Error

Objective: Write divideFunction(numerator, denominator) that throws an error if dividing by 0.
File: 8-try.js
Task 9: Guardrails

Objective: Write guardrail(mathFunction) that returns an array capturing the function’s result or error, along with a "Guardrail was processed" message.
File: 9-try.js
Task 10: Async/Await

Objective: Write asyncUploadUser() using uploadPhoto() and createUser() that handles async calls.
If one fails, return an empty object.
File: 100-await.js
Submission and Testing
Test Your Code: Use Jest to test your functions.

bash
Copy code
npm run test
Lint Your Code: Ensure your code follows linting standards:

bash
Copy code
npm run lint
Run the Dev Script: Test files interactively using the dev script.

bash
Copy code
npm run dev 0-main.js
By following these steps and completing each task, you'll become proficient in handling promises and async operations in JavaScript!







