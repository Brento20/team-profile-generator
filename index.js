const Employee = require('./lib/employee')
const Manager = require('./lib/manager')

const inquirer = require('inquirer')

const team = []; 


const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
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
            validate: officeNumInput => {
                if  (isNaN(officeNumInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { id, name, email, officeNumber } = managerInput; 
        const manager = new Manager (id, name, email, officeNumber);
        team.push(manager); 
        console.log(manager); 
    })
};

// const addEmployee = () => {

// console.log(`
// ************
// Welcome ${Manager.name}, its time to build your team!
// ************
// `)
    // return inquirer.prompt ([
    //     {
    //         type: 'input',
    //         name: 'name',
    //         message: 'Employees full name?', 
    //         validate: nameInput => {
    //             if (nameInput) {
    //                 return true;x
    //             } else {
    //                 console.log ("Employee name field cannot be empty!");
    //                 return false; 
    //             }
    //         }
    //     },
    // )

addManager()
//     .then (addEmployee)