const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")


describe("Init Engineer...", () => {

    it("It should return id properties from Employee", () => {
        const test = new Engineer("Satan", 2, "satan@gmail.com", "https://github.com/satan")
        expect(test.getGithub()).toEqual("https://github.com/satan")
    })

})