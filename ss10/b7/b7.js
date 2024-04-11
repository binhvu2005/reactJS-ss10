"use strict";
class Cricle {
    constructor(a) {
        this.a = a;
    }
    setCricle(c) { this.a = c; }
    CV() { return Math.PI * this.a * 2; }
    DT() { return Math.PI * this.a * this.a * 8; }
}
let cricle1 = new Cricle(5);
cricle1.CV();
cricle1.DT();
cricle1.setCricle(10);
cricle1.CV();
cricle1.DT();
