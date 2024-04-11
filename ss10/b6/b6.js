"use strict";
class Song {
    constructor(name, length) {
        this.id4 = 1;
        this.name = name;
        this.length = length;
    }
    setSong(name, length) {
        this.name = name;
        this.length = length;
    }
}
let song1 = new Song("Song", 1);
song1.setSong("a", 3);
