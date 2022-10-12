## 🏆Best Team Generator🏆

### Overview
Best Team Generators can be used by anyone in a work environment. This generator keeps track of all team members info such as their emails, name, github, id, school and office number depending on who the employees are! It helps maintain a clear and precise track of who is a part of the work team and if there's ever any info the user's need about anyone they can go back to this application and see. 

### Table Of Contents
- [Installation](#installation)
- [Tests](#tests)
- [UserStory](#userstory)
- [AcceptanceCriteria](#acceptancecriteria)
- [Questions](#questions)
- [License](#license)


## Installation
The following technologies needed will be:
1. Vscode
2. Node.js
3. Package.json
4. Inquirer
5. Jest

## Tests
When using this application, users will have to run the command "node ." to prompt the questions about the manager first then prompt to the next category of asking whether to add an employee or not. Given the user chooses to add an employee, it will then take the user to a series of other questions and repeating until the users is done adding the number of employees they want. This will then exit the prompt of questions and create the team generator. 

For testing purposes to make sure the application works, jest was added into the library then a unit testing is then carried out. To make sure that all test pass the following command "npm test (filename)" will need to be executed to display whether the code passes or fails. 

![d309da6f237eb91d679fd8eeb4010b1b](https://user-images.githubusercontent.com/109758045/195432747-c56e0b13-c03d-4387-b15b-694c0ca53ac4.png)


[Best Team Gen Demo.webm](https://user-images.githubusercontent.com/109758045/195432549-8b79a2a5-0d1e-4e3c-89db-12909d8e26c1.webm)


## UserStory
---
- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles
---

## AcceptanceCriteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Questions?
### Feel free to contact me
- Github: https://github.com/DianasJourney
- Email: diana.vu@hotmail.com

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

https://choosealicense.com/licenses/mit/