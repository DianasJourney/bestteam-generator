const HTML = require('./src/html');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');
// team library
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { managerChoices, employeeChoices } = require('./lib/static');

const teamArray = [];
// manager prompt
const addManager = () => {
  return inquirer.prompt(managerChoices).then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
  })
};
//adds employees
const addEmployee = () => {

  return inquirer.prompt(employeeChoices).then(employeeData => {
    let {name, id, email, role, github, school, confirmAddEmployee} = employeeData

    let employee =
      role === 'Engineer'
        ? new Engineer(name, id, email, github)
        : new Intern(name, id, email, school);

    teamArray.push(employee);
// confirms if users want to add more employees, then it will call the add employee function if not it will create the team.
    if (confirmAddEmployee) {
      return addEmployee();
    }
    return teamArray;
  })
};

//writes html file
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    // throws out an error if it catches one
    if (err) {
      console.log(err)
      return;
      // success, html is created
    } else {
      console.log(
        'Success! Your team has been generated, open up the HTML to check it out.'
      );
    }
  })
};

addManager()
  .then(addEmployee)
  .then(teamArray => HTML(teamArray))
  .then(pageHTML => writeFile(pageHTML))
  .catch(err => console.log(err));
