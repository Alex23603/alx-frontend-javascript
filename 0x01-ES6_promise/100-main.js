// 100-main.js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser(); // Call the async function
    console.log(value); // Log the result
};

test();
