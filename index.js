// Requiring modules
const inqurier = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

// Arrays to store managers
var managerArray = []
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

        })
}


promptManager()