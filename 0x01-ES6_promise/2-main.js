// 2-main.js
import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();  // For testing resolved case
handleResponseFromAPI(promise);

const promiseReject = Promise.reject();  // For testing rejected case
handleResponseFromAPI(promiseReject);
