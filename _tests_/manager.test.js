const Employee = require('../lib/employee.js');
const Manager = require('../lib/manager.js');

describe('Manager class added to employee along with officeNumber', () => {
    describe('Extended class and run getRole', () => {
        it('A new object is created with a name and ID', () => {
            const manager = new Manager("01", "Brenton", "brenton.weaver@gmail.com", 1234);

            expect(manager.officeNumber).toEqual(1234);
            expect(manager.getRole()).toEqual("Manager");
            console.log(manager);
        });
    });
});