const Employee = require('../lib/employee.js');
const UnpaidLabour = require('../lib/unpaidLabour.js');
const unpaidLabour = require('../lib/unpaidLabour.js');

describe('Unpaid Labour class added to employee along with a School name', () => {
    describe('Extended class and run getRole', () => {
        it('A new object is created with a name and ID', () => {
            const unpaidLabour = new UnpaidLabour("01", "Brenton", "brenton.weaver@gmail.com", "Preschool");

            expect(unpaidLabour.school).toEqual("Preschool");
            expect(unpaidLabour.getRole()).toEqual("UnpaidLabour");
            console.log(unpaidLabour);
        });
    });
});