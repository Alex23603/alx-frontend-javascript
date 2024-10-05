export default function createReportObject(employeesList) {
    // Create the report object with allEmployees key
    const report = {
        allEmployees: { ...employeesList }, // Use spread syntax to copy employeesList
        getNumberOfDepartments() {
            return Object.keys(this.allEmployees).length; // Count number of departments
        }
    };
    
    return report; // Return the report object
}
