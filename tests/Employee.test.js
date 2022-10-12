const Employee = require('../lib/Employee')

// creating employee name
describe('employee name', () => {
  it('output name', () => {
    const name = 'Diana'
    const employeeInstance = new Employee(name)
    expect(employeeInstance.name).toBe(name)
  })
})
//grabs the input of the name
describe('input name', () => {
  it('Should get the name of the employee', () => {
    const employee = new Employee('Diana', 15, 'diana.v@gmail.com')
    expect(employee.getName()).toEqual(expect.any(String))
  })
})
//grabs id
describe('getting the id', () => {
  it('gets employee ID', () => {
    const employee = new Employee('Diana', 15, 'diana.v@gmail.com')
    expect(employee.getId()).toEqual(expect.any(Number))
  })
})
// grabs the email
describe('email', () => {
  it('should get the employees email', () => {
    const employee = new Employee('Diana', 15, 'diana.v@gmail.com')
    expect(employee.getEmail()).toEqual(
      expect.stringContaining(employee.email.toString())
    )
  })
})
//grabs role
describe('role', () => {
  it('gets the role of employee', () => {
    const employee = new Employee('Diana', 15, 'diana.v@gmail.com')
    expect(employee.getRole()).toEqual('Employee')
  })
})
