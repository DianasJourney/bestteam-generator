const Engineer = require('../lib/Engineer')

// engineer object
describe('engineer', () => {
it('creates an Engineer object', () => {
  const engineer = new Engineer('Diana', 5, 'diana.v@gmail.com','dianasJourney');
  expect(engineer.github).toEqual(expect.any(String));
})
});

// github object
describe('github', () => {
it('gets the github input from engineer', () => {
  const engineer = new Engineer('Diana', 5, 'diana.v@gmail.com', 'dianasJourney')
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})
})

describe('role of engineer', () => {
it('gets role of engineer', () => {
  const engineer = new Engineer('Diana', 5, 'diana.v@gmail.com', 'dianasJourney' )
expect(engineer.getRole()).toEqual('Engineer')
})
});

