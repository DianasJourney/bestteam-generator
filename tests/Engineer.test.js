const Engineer = require('../lib/Engineer')

// 
describe('engineer', () => {
  const github = 'dianasJourney';

  it('gets the github input from engineer', () => {
    const engineer = new Engineer('Diana', 5, 'diana.v@gmail.com', github);
    expect(engineer.getGithub()).toEqual(github);
  })

  it('gets role of engineer', () => {
    const engineer = new Engineer('Diana', 5, 'diana.v@gmail.com', github);
    expect(engineer.getRole()).toEqual('Engineer');
  })
})
