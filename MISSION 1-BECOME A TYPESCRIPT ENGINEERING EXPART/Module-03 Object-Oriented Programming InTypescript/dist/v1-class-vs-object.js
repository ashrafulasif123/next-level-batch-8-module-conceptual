/* interface Employee {
    name: string
    baseSalary: number
}

const employee: Employee = {
    name: "Mir",
    baseSalary: 22000
}

const employee2: Employee = {
    name: "Mizan",
    baseSalary: 22000,
} */
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("Mir", 22000);
const employee2 = new Employee("Mizan", 24000);
console.log(employee);
console.log(employee2);
console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
