// const Staff = require(location of allStaff.js)

describe('Employee class', () => {
    describe('Create all staff', () => {
        it('A new object is created with a name and ID', () => {
            const employee = new Employee(01, "Brenton")

            expect(employee.id).toEqual(01);
            expect(employee.name).toEqual("Brenton");
        });
    });
});