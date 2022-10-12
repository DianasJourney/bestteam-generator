const HTML = require('./src/html')

// node modules
const fs = require('fs')
const inquirer = require('inquirer')
// team library
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const { managerChoices, employeeChoices } = require('./lib/static')

const teamArray = []
// manager prompt
const addManager = () => {
  return inquirer.prompt(managerChoices).then(managerInput => {
    const { name, id, email, officeNumber } = managerInput
    const manager = new Manager(name, id, email, officeNumber)

    teamArray.push(manager)
  })
}
