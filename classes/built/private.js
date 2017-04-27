"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
exports.Animal = Animal;
new Animal("Cat").name;
