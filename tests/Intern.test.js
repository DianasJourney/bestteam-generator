const Intern = require('../lib/Intern')

// creating intern object
describe('intern', () => {
it('gets intern school', () => {
  const school = 'uoft'
  const intern = new Intern('Diana', 6, 'diana.vw@gmail', school);
  expect(intern.getSchool()).toEqual(school);
})

it('gets role of the intern', () => {
  const intern = new Intern('Diana', 6, 'diana.vw@gmail', 'Intern');
  expect(intern.getRole()).toEqual('Intern');
})
});