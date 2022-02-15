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
                <p class="office">Office Number: ${engineer.officeNumber}</p>
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
                <p class="office">Office Number: ${unpaidLabour.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}