const Employee = require("./Employee");

class UnpaidLabour extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school; 
    }

    getGithub () {
        return this.school;
    }

    getRole () {
        return "UnpaidLabour";
    }
}

module.exports = UnpaidLabour; 