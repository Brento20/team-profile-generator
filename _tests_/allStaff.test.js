// const Staff = require(location of allStaff.js)

describe('Staff class', () => {
    describe('Create all staff', () => {
        it('A new object is created with a name and ID', () => {
            const staff = new Staff(01, "Brenton")

            expect(staff.id).toEqual(01);
            expect(staff.name).toEqual("Brenton");
        });
    });
});