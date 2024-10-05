export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    const index = array.indexOf(value); // Get the index of the current value
    array[index] = appendString + value; // Update the array element
  }

  return array;
}
