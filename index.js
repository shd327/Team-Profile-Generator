// Requiring modules
const inqurier = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

// Arrays to store managers
const managerArray = []
const internArray = []
const engineerArray = []


// build out manager prompt
function promptManager() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your office number",
            name: "officeNumber"
        },

    ])
        .then((data) => {
            managerArray.push(new Manager(data.name, data.id, data.email, data.officeNumber))
            console.log(managerArray)
            selectRole()


        })
}
function promptIntern() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your school",
            name: "school"
        },

    ])
        .then((data) => {
            internArray.push(new Intern(data.name, data.id, data.email, data.school))
            selectRole()

        })

}

function promptEngineer() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your github",
            name: "github"
        },

    ])
        .then((data) => {
            engineerArray.push(new Engineer(data.name, data.id, data.email, data.github))
            selectRole()
        })

}

function selectRole() {
    inqurier.prompt([
        {
            type: "list",
            choices: ["Intern", "Engineer", "Finishing building your team"],
            message: "Pick a role",
            name: "role"
        }
    ])
        .then((data) => {
            if (data.role === "Engineer") {
                promptEngineer();
            }
            if (data.role === "Intern") {
                promptIntern();
            }
            if (data.role === "Finishing building your team") {
                GenerateManager(managerArray);

                if (engineerArray) {
                    GenerateEngineer(engineerArray);
                }
                if (internArray) {
                    GenerateIntern(internArray);
                }

            }
        })
}

promptManager()
//  HTML
// build generateManager
// build generateIntern
// build generateEngineer

// build main html structure that we will append all the generates too using loop
// write to file at in