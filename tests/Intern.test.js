const Intern = require('../lib/Intern')

// creating intern object
describe('intern', () => {
it('creates an intern object', () => {
  const intern = new Intern('Diana', 6, 'diana.vw@gmail', 'UOFT');
  expect(intern.school).toEqual(expect.any(String));
})
});
//school of intern
describe('school', () => {
it('gets intern school', () => {
  const intern = new Intern('Diana', 6, 'diana.vw@gmail', 'UOFT');
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})
});

//intern role
describe('intern role', () => {
it('gets role of the intern', () => {
  const intern = new Intern('Diana', 6, 'diana.vw@gmail', 'UOFT')

  expect(intern.getRole()).toEqual('Intern')
})
});

