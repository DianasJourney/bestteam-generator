// this creates the teampage with all the info passed in
const createTeamPage = function (teamCards) {
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
          <nav class="navbar" id="nav">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Amazing Team Profile</span>
          </nav>
      </header>
      <main>
          <section class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Cards for each profile created-->
                  ${teamCards}
              </div>
          </section>
      </main>
  </body>
  </html>
`
};

displayTeamPage = data => {
  const cardArray = []
  for (let i = 0; i < data.length; i++) {
    let team = data[i]
    let role = team.getRole()
    if (role === 'Manager') {
      const managerCard = ManagerCard(team)
      cardArray.push(managerCard)
    } else if (role === 'Engineer') {
      const engineerCard = EngineerCard(team)
      cardArray.push(engineerCard)
    } else if (role === 'Intern') {
      const internCard = InternCard(team)
      cardArray.push(internCard)
    }
  }
  const teamCards = cardArray.join('')
  return createTeamPage(teamCards)
}

// manager profile
const ManagerCard = function(manager) {
    const {name, id, email, officeNumber} = manager;
  return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="cardTitle">
                <h1>${name}</h1>
                <h2>Manager</h2><span class='material-symbols-outlined'>account_circle</span>
            </div>
            <div class="bodyOfCard">
                <p class="id">ID: ${id}</p>
                <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="office">Office Number: ${officeNumber}</p>
            </div>
        </div>
    </section>
    `
};
// engineer profile
const EngineerCard = function(engineer) {
    const {name, id, email, github} = engineer;
  return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="cardTitle">
                <h1>${name}</h1>
                <h2>Engineer</h2><span class='material-symbols-outlined'>diversity_1</span>
            </div>
            <div class="bodyOfCard">
                <p class="id">ID: ${id}</p>
                <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="github">Github: <a href="https://github.com/${github}">${github}</a></p>
            </div>
        </div>
    </section>
    `
};
// intern profile
const InternCard = function(intern) {
    const {name, id, email, school} = intern;
  return `
    <section class="col-4 mt-4">
        <div class="card h-100">
            <div class="cardTitle">
                <h1>${name}</h1>
                <h2>Intern</h2><span class='material-symbols-outlined'>supervisor_account</span>
            </div>
            <div class="bodyOfCard">
                <p class="id">ID: ${id}</p>
                <p class="email">Email:<a href="mailto:${email}">${email}</a></p>
                <p class="school">School: ${school}</p>
            </div>
    </div>
</section>
    `
};

module.exports = displayTeamPage;

