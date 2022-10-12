const managerChoices = [
  {
    type: 'input',
    name: 'name',
    message: 'Name of the manager:'
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter the manager's ID:"
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter the manager's email:"
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Enter the office number for your manager:'
  }
]

const employeeChoices = [
  {
    type: 'list',
    name: 'role',
    message: "Choose employee's role",
    choices: ['Engineer', 'Intern']
  },
  {
    type: 'input',
    name: 'name',
    message: 'Name of the employee:'
  },
  {
    type: 'input',
    name: 'id',
    message: "Employee's ID:"
  },
  {
    type: 'input',
    name: 'email',
    message: "Employee's Email:"
  },
  {
    type: 'input',
    name: 'github',
    message: "Employee's Github:",
    when: input => input.role === 'Engineer'
  },
  {
    type: 'input',
    name: 'school',
    message: "Intern's School:",
    when: input => input.role === 'Intern'
  },
  {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Add another team member?',
    default: false
  }
]

module.exports = { managerChoices, employeeChoices }
