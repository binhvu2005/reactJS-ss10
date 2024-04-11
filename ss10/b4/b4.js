"use strict";
class Vehicle1 {
    constructor(name, year, company) {
        this.id1 = 0;
        this.name2 = name;
        this.year = year;
        this.company = company;
    }
    infoV() {
        console.log(this.name2 + " " + this.year + " " + this.company + " " + this.id1);
    }
}
let v3 = new Vehicle1("a", 2000, "b");
v3.infoV();
