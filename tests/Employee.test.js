const Employee = require('../lib/Employee')

// creating employee name
describe('employee', () => {
  it('output name', () => {
    const name = 'Diana';
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
  })
// gets the id 
  it('gets employee ID', () => {
   let number = 0;
  const employee = new Employee('Diana', number, 'diana.v@gmail.com');
  expect(employee.getId()).toEqual(number);
})
//gets the email
it('should get the employees email', () => {
  const email = 'diana.v@gmail.com';
  const employee = new Employee('Diana', 15, email);
  expect(employee.getEmail()).toEqual(email);
})
// gets the role
it('gets the role of employee', () => {
  const employee = new Employee('Diana', 15, 'diana.v@gmail.com');
  expect(employee.getRole()).toEqual('Employee');
})
});