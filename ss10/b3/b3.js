"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name + ": " + this.company + " " + this.phone);
    }
}
let employee1 = new Employee("binh", "bat dong san", "213123123");
employee1.printInfo;
