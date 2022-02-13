
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const UnpaidLabour = require('./lib/unpaidLabour');

const inquirer = require('inquirer');
const fs = require('fs');

const team = []; 


const start = () => {
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
    .then(answers => {
        const  { id, name, email, officeNumber } = answers; 
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


        return inquirer.prompt ([
            {
                type: 'list',
                name: 'role',
                message: "Please choose your employee's role",
                choices: ['Engineer', 'UnpaidLabour']
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
                message: "Please enter the Unpaid Labourer's school",
                when: (input) => input.role === "UnpaidLabour",
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more team members?',
                default: false
            }
        ])
        .then(answers => {
            
                    let { name, id, email, role, github, school} = answers; 
                    let employee; 
            
                    if (role === "Engineer") {
                        employee = new Engineer (name, id, email, github);
            
                        console.log(employee);
            
                    } else if (role === "UnpaidLabour") {
                        employee = new UnpaidLabour (name, id, email, school);
            
                        console.log(employee);
                    }
            
                    team.push(employee); 
                    console.log(team);

                    renderHTML(team);

                    
                    // if (confirmAddEmployee) {
                    //     console.log('selected yes')
                    //     return addEmployee(team)                       
                    // } else {
                    //     console.log('selected no')
                    //     return team
                    // }
        })
    };


    const renderHTML = (data) => {

        console.log(manager.name);

        console.log(UnpaidLabour.name);


    }

start();
