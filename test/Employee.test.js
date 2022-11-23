const Employee = require("../lib/Employee")

describe("initialize Employee", () => {
    it('it should return the name property from employee', () => {
        const member = new Employee('Satan')
        expect(member.getName()).toEqual('Satan')
    })
    it("It should return id properties from Employee", () => {
        const member = new Employee("Satan", 1)
        expect(member.getId()).toEqual(1)
    })
    it("It should return email properties from Employee", () => {
        const member = new Employee("Satan", 1, "Satan@gmail.com")
        expect(member.getEmail()).toEqual("Satan@gmail.com")
    })
})
