var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(message) {
        var _this = this;
        this.move = function () {
            console.info('abstract class Animal method [move()] is called ... [' + _this.greeting + '] ');
        };
        this.greeting = message;
        this.form = {};
        this.form.move = this.move;
    }
    return Animal;
}());
var Zhangsan = (function (_super) {
    __extends(Zhangsan, _super);
    function Zhangsan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zhangsan.prototype.makeSound = function () {
        this.form.move();
    };
    return Zhangsan;
}(Animal));
new Zhangsan("zhang san").makeSound();
