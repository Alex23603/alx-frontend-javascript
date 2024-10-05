export default function iterateThroughObject(reportWithIterator) {
    // Initialize an array to hold the employee names
    const employeeNames = [];
    
    // Use the iterator to get each employee name
    for (const employee of reportWithIterator) {
        employeeNames.push(employee);
    }
    
    // Join the names with the '|' separator and return the result
    return employeeNames.join(' | ');
}
