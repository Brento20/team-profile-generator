const Employee = require('../lib/employee.js')
// const { expect } = require("@jest/globals");

describe('Employee class', () => {
    describe('Create all staff', () => {
        it('A new object is created with a name and ID', () => {
            const employee = new Employee("01", "Brenton", "brenton.weaver@gmail.com")

            expect(employee.id).toEqual("01");
            expect(employee.name).toEqual("Brenton");
            expect(employee.email).toEqual("brenton.weaver@gmail.com");
            console.log(employee);
        });
    });
});