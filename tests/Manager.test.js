// testing
const Manager = require('../lib/Manager')

describe('manager', () => {
  it('creates officenumber', () => {
    let number = 4;
    const manager = new Manager('Diana', 5, 'diana.v@gmail', number);
    expect(manager.officeNumber).toEqual(number);
  })

  it('gets role of object', () => {
  const manager = new Manager('Diana', 5, 'diana.v@gmail', 4);
  expect(manager.getRole()).toEqual('Manager');
})
});
