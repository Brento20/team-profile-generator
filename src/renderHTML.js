const renderManager = function (manager) {
    return `
    <div class="card shadow" style="width: 16rem;" id="icon">
    <img src="../disp/images/manager.png" class="card-img-top" style="width: 14.5rem; height: 11rem">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
                <h4>Manager</h4>
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

const renderEngineer = function (engineer) {
    return `
    <div class="card shadow" style="width: 16rem;" id="icon">
    <img src="../disp/images/engineer.png" class="card-img-top" style="width: 14.5rem; height: 11rem">
    <div class="card-body">
        <h5 class="card-title">${engineer.id}</h5>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.name}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const renderUnpaid = function (unpaidLabour) {
    return `
    <div class="card shadow" style="width: 16rem;" id="icon">
    <img src="../disp/images/unpaidLabour.png" class="card-img-top" style="width: 14.5rem; height: 11rem">
    <div class="card-body">
        <h5 class="Intern:">${unpaidLabour.id}</h5>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${unpaidLabour.name}</p>
                <p class="email">Email: <a href="mailto:${unpaidLabour.email}">${unpaidLabour.email}</a></p>
                <p class="office">Student School: ${unpaidLabour.school}</p>
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
            const managerCard = renderManager(employee);
            profileArray.push(managerCard);
        }


        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employee);
            profileArray.push(engineerCard);
        }


        if (role === 'UnpaidLabour') {
            const unpaidCard = renderUnpaid(employee);
            profileArray.push(unpaidCard);
        }
        
    }


    const employeeCards = profileArray.join('')


    const renderTeam = renderTeamPage(employeeCards); 
    return renderTeam;

}


const renderTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
    
        <!-- Google fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    
        <!-- CSS -->
        <link rel="stylesheet" href="../disp/reset.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>  
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="../disp/style.css">
    
    </head>
    <body>

    <!-- Header -->
    <header class="headerStyle container-xxl">
        <div>
        <i class="fa-regular fa-face-awesome"></i></i><h1>Building Teams... <br> kinda!</h1>
        </div>
    </header>

    <!-- Weather Cards -->
    <div class="row align-items-space-around" id="weatherPanelMain">
        <div>
                ${employeeCards}
        </div>
    </div>
        
    </body>
    </html>
`;
}

module.exports = renderHTML; 