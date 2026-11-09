abstract class Employee {
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

class Maneger extends Employee { }
class Developer extends Employee { }