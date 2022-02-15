
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
        
        console.log(`

            *********************************************

            Welcome Manager, its time to build your team!

            *********************************************

        `);
        addEmployee();
    })
};

const addEmployee = () => {
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
                    team.push(employee); 
                    console.log(team);
                } 



                
                renderHTML(team);
                

                // if (confirmAddEmployee) {
                //     console.log('selected yes')
                //     addEmployee();                       
                // } else {
                //     console.log('selected no')
                //     return team
                // }
    })
};


    const renderHTML = () => {

        let [manager, engineer] = team

        console.log(manager.name);
        console.log(engineer)
}
// `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    




// <!-- manager card -->

// <div class="card" style="width: 18rem;">
//     <img src="./src/images/${JSON.stringify(team.name)}.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${JSON.stringify(team.name)}</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">Role: Manager</li>
//         <li class="list-group-item">Office Number: ${JSON.stringify(team.officeNumber)}</li>
//     </ul>
//     <div class="card-body">
//         <a href="#" class="card-link">Contact Email:${JSON.stringify(team.email)}</a>
//     </div>
// </div>


// <!-- engineer card -->

// <div class="card" style="width: 18rem;">
//     <img src="./src/images/${JSON.stringify(team.name)}.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${JSON.stringify(team.name)}</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">Cras justo odio</li>
//         <li class="list-group-item">Dapibus ac facilisis in</li>
//         <li class="list-group-item">Vestibulum at eros</li>
//     </ul>
//     <div class="card-body">
//         <a href="#" class="card-link">Contact Email</a>
//         <a href="#" class="card-link">Github Link</a>
//     </div>
// </div>

// </body>
// </html>`
// }

// const startUp = () => {
//     start()
//         .then((team) => fs.writeFileSync('./disp/index.html', renderHTML(team)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));
// };

start();
