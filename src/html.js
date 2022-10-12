// manager profile
const createManager = function (manager) {
  return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><span class='material-symbols-outlined'>account_circle</span>

            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </section>
    `
}

// engineer profile
const createEngineer = function (engineer) {
  return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><span class='material-symbols-outlined'>diversity_1</span>

            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </section>
    `
}

// intern profile
const createIntern = function (intern) {
  return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><span class='material-symbols-outlined'>supervisor_account</span>

            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</section>
    `
}

createHTML = data => {
  pageArray = []

  for (let i = 0; i < data.length; i++) {
    const employee = data[i]
    const role = employee.getRole()

    if (role === 'Manager') {
      const managerCard = createManager(employee)
      pageArray.push(managerCard)
    }

    if (role === 'Engineer') {
      const engineerCard = createEngineer(employee)
      pageArray.push(engineerCard)
    }

    if (role === 'Intern') {
      const internCard = createIntern(employee)
      pageArray.push(internCard)
    }
  }

  const employeeCards = pageArray.join('')

  const createTeam = createTeamPage(employeeCards)
  return createTeam
}

const createTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Amazing Team Profile</title>
      <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Peralta&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Amazing Team Profile</span>
          </nav>
      </header>
      <main>
          <section class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Cards for each profile created-->
                  ${employeeCards}
              </div>
          </section>
      </main>
      
  </body>
  </html>
`
}

module.exports = createHTML
