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
    calculatePay(taxRate) {
        return this._baseSalary - this._baseSalary * taxRate;
    }
}
// class Manager extends Employee { } Below
//? paranet constructor এর parameter অনুযায়ী Argument পাঠালে typescript Automatically property ধরে নেয় const manager = new Manager("Chaoudhury", 25000) অর্থাৎ নতুন করে কোন কিছু Add না করলে
//? parent class(Employee) এর calculate() কে নিয়ে কাজ করা
//? parent class এ যেখানে calculatPay() আছে সেখানে যদি কোন Parameter না থাকে তাহলে child Class এ Paremeter নেয়া যাবে না, যদি Parameter থাকে তাহলে নেয়া যাবে, না নিলেও সমস্যা হবে না।
class Manager extends Employee {
    calculatePay() {
        return this._baseSalary + 5000;
    }
}
//? নতুন করে কোন কিছু Paremeter Add করলে
class Developer extends Employee {
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
    }
    calculatePay(taxRate) {
        return (this._baseSalary + 8000) - this._baseSalary * taxRate;
    }
}
const employee = new Employee("Mir", 22000);
const manager = new Manager("Chaoudhury", 22000);
const developer = new Developer("Shaheb", 22000, "Web");
console.log(employee.calculatePay(0.5));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.5));
export {};
