const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer.js');

describe('Engineer class added to employee along with a Github name', () => {
    describe('Extended class and run getRole', () => {
        it('A new object is created with a name and ID', () => {
            const engineer = new Engineer("01", "Brenton", "brenton.weaver@gmail.com", "brento20");

            expect(engineer.github).toEqual("brento20");
            expect(engineer.getRole()).toEqual("Engineer");
            console.log(engineer);
        });
    });
});