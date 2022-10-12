// testing
const Manager = require('../lib/Manager')

describe('manager', () => {
  it('creates officenumber', () => {
    const manager = new Manager('Diana', 5, 'diana.v@gmail', 4)
    expect(manager.officeNumber).toEqual(expect.any(Number))
  })
})

describe('getRole', () => {
  it('gets role of object', () => {
    const manager = new Manager('Diana', 5, 'diana.v@gmail', 4)
    expect(manager.getRole()).toEqual('Manager')
  })
})
