"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setRectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    CV1() { return (this.width + this.height) * 2; }
    DT1() { return this.width * this.height; }
    infoH() { console.log(this.width + this.height + this.CV1() + this.DT1()); }
}
let ab = new Rectangle(10, 20);
ab.infoH();
ab.setRectangle(1, 2);
ab.infoH();
