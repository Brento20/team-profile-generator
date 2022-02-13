const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');

const inquirer = require('inquirer');

const team = []; 


const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'name',
            message: 'Managers full name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Manager name field cannot be empty!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number",
        }
    ])
    .then(managerInput => {
        const  { id, name, email, officeNumber } = managerInput; 
        const manager = new Manager (id, name, email, officeNumber);
        team.push(manager); 
        console.log(manager);
        addEmployee();
    })
};

const addEmployee = () => {

console.log(`
************

Welcome Manager, its time to build your team!

************
`);
console.log(team);

        return inquirer.prompt ([
            {
                type: 'list',
                name: 'role',
                message: "Please choose your employee's role",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What's the name of the employee?", 
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID.",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email.",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username.",
                when: (input) => input.role === "Engineer",
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",
                when: (input) => input.role === "Intern",
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more team members?',
                default: false
            }
])};

addManager()