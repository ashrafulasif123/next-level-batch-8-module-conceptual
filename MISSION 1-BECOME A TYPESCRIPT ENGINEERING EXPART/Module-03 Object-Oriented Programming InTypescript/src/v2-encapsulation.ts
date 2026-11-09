//* Access Modifier
//? public
//? private
//? protected

//? readonly

class Employee {
    constructor(
        public name: string,
        private _baseSalary: number
    ) { }

    get baseSalary(): number {
        return this._baseSalary
    }

    getsalaryWithBonus(): number {
        return this._baseSalary + 700
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary Cannot be negetive Value")
        }
        this._baseSalary = newSalary
    }
}

const employee = new Employee("Mir", 22000)
const employee2 = new Employee("Mizan", 24000)

//? baseSalary access by set
// employee.baseSalary = 200
// console.log(employee.baseSalary)

//! _baseSalary private
// employee._baseSalary = 500

//? Old System using not get/set use as calling meehod getsalaryWithBonus()
// console.log(employee.getsalaryWithBonus())



