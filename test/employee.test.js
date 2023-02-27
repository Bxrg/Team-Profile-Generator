const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can create a new employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Uses constructor to set name", () => {
        const name = "Kody";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Uses constructor to set ID", () => {
        const testValue = 100;
        const e = new Employee("Kody", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Uses constructor to set email", () => {
        const testValue = "test@test.com";
        const e = new Employee("Kody", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Uses GetName() to get name of the employee", () => {
            const testValue = "Kody";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Uses getID() to find ID", () => {
            const testValue = 73;
            const e = new Employee("Kody", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Uses getEmail() to get email", () => {
            const testValue = "test@test.com";
            const e = new Employee("Kody", 73, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("Uses getRole() to get the role, should return correct role", () => {
            const testValue = "Employee";
            const e = new Employee("Kody", 73, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});