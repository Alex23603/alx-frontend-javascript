// 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));   // Should log: Promise { { status: 200, body: 'Success' } }
console.log(getFullResponseFromAPI(false));  // Should log: Promise { <rejected> Error: The fake API is not working currently }
