//Class Links
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const UnpaidLabour = require('./lib/unpaidLabour');

//SRC/Helper functions
const renderHTML = require('./src/renderHTML');

//Dependencies
const inquirer = require('inquirer');
const fs = require('fs');


//When called creates the prompts to build a manager and stores object in the team array
const team = []; 
const start = () => {
    return inquirer.prompt ([
        {                   // Manager ID
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {                   // Manager Name
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
        {                   // Manager Email
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
        {                   // Manager Office Number
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number",
        }
    ])
    .then(answers => {
        const  { id, name, email, officeNumber } = answers; 
        const manager = new Manager (id, name, email, officeNumber);
        team.push(manager); 
        
        console.log(`

            *********************************************

            Welcome Manager, its time to build your team!

                (Don't forget interns need to eat!!!)

            *********************************************

        `);
    })
};

//When called compiles the data for extra employees and pushes the resulting objects to the team array
const addEmployees = () => {
    return inquirer.prompt ([
        {                   // Employee Role
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'UnpaidLabour']
        },
        {                   // Employee ID
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {                   // Employee Name
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Name field cannot be empty!");
                    return false; 
                }
            } 
        },
        {                   // Employee Email
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {                   // Engineer GitHub
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {                   // Unpaid Worker School
            type: 'input',
            name: 'school',
            message: "Please enter the Unpaid Labourer's school",
            when: (input) => input.role === "UnpaidLabour",
        },
        {                   // Add Another Employee
            type: 'input',
            name: 'addEmployee',
            message: 'Type "YES" to add more team members?',
        }
    ])
    .then(answers => {
        let { name, id, email, role, github, school, addEmployee} = answers; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "UnpaidLabour") {
            employee = new UnpaidLabour (name, id, email, school);
        } 

        team.push(employee); 

        if (addEmployee == "YES") {
            return addEmployees(); 
        } else {
            return team;
        }
    })
};


//Starts the application and prompts add employee then render and writes the HTML functions 
start()
    .then(addEmployees)
    .then(team => {
    return renderHTML(team);
})
.then(pageHTML => {
    return writeFile(pageHTML);
});


//Uses file system to write the compiled HTML to 
const writeFile = data => {
    fs.writeFile('./disp/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Successfully rendered index.html ✅ ")
        }
    })
}; 

