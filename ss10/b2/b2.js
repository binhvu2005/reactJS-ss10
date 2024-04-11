"use strict";
class Sutudents {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let std3 = new Sutudents(1, 12, "vubinh@gmail.com");
let std4 = new Sutudents(2, 12, "vubinh2@gmail.com");
let SutudentsList = [std3, std4];
SutudentsList.forEach(s => {
    console.log(s.id);
    console.log(s.age);
    console.log(s.email);
});
