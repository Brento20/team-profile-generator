const generateManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
    <img src="./src/images/manager.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <img src="./src/images/engineer.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">Office Number: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

const generateUnpaid = function (unpaidLabour) {
    return `
    <div class="card" style="width: 18rem;">
    <img src="./src/images/unpaidLabour.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${unpaidLabour.name}</h5>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${unpaidLabour.id}</p>
                <p class="email">Email: <a href="mailto:${unpaidLabour.email}">${unpaidLabour.email}</a></p>
                <p class="office">Office Number: ${unpaidLabour.school}</p>
            </div>
        </div>
    </div>
    `;
}

renderHTML = (data) => {

    
    profileArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            profileArray.push(managerCard);
        }


        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            profileArray.push(engineerCard);
        }


        if (role === 'Intern') {
            const unpaidCard = generateUnpaid(employee);
            profileArray.push(unpaidCard);
        }
        
    }


    const employeeCards = profileArray.join('')


    const generateTeam = renderTeamPage(employeeCards); 
    return generateTeam;

}


const renderTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    </html>
`;
}

module.exports = renderHTML; 