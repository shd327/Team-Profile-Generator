const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")


describe("Init Intern...", () => {
    it("It should return officeNumber properties from Employee", () => {
        const test = new Intern("Satan", 1, "satan@gmail.com", "DU")
        expect(test.getSchool()).toEqual("DU")
    })

})