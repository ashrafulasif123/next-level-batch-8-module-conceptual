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
class Maneger extends Employee {
}
class Developer extends Employee {
}
export {};
