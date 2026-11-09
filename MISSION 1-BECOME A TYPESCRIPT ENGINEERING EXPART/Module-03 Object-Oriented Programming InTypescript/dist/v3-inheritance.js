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
    describe() {
        //? এক্ষেত্রে describe() যেহেতু Class এর মধ্যে আছে তাহলে baseSalary/_baseSalary দুটির যেকোন একটি দেয়া যাবে।
        return `${this.name} earns ${this.baseSalary}`;
    }
}
/* class Manager extends Employee {
    teamMemberCount: number;

    constructor(name: string, _baseSalary: number, teamMemberCount: number) {
        super(name, _baseSalary)
        this.teamMemberCount = teamMemberCount
    }
} */
class Manager extends Employee {
    teamMemberCount;
    //? Shortly
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const employee = new Employee("Mir", 22000);
// const employee2 = new Employee("Mizan", 24000)
// console.log(employee.describe())
const manager = new Manager("Hasan", 36000, 5);
// console.log(manager)
// console.log(manager.getsalaryWithBonus())
// console.log(manager.describeWork())
console.log(manager.describeManager());
export {};
// console.log(employee.name)
