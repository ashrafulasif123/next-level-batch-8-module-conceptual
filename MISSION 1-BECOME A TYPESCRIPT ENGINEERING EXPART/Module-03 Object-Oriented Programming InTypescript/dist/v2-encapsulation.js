//* Access Modifier
//? public
//? private
//? protected
//? readonly
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    getsalaryWithBonus() {
        return this._baseSalary + 700;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary Cannot be negetive Value");
        }
        this._baseSalary = newSalary;
    }
}
const employee = new Employee("Mir", 22000);
const employee2 = new Employee("Mizan", 24000);
export {};
//? baseSalary access by set
// employee.baseSalary = 200
// console.log(employee.baseSalary)
//! _baseSalary private
// employee._baseSalary = 500
//? Old System using not get/set use as calling meehod getsalaryWithBonus()
// console.log(employee.getsalaryWithBonus())
