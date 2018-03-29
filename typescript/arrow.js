var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2017/10/27.
 */
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(function (value) { return value % 2 == 0; }));
function getStock(name) {
    this.name = name;
    setInterval(function () {
        console.log("name is: " + this.name);
    }, 1000);
}
var stock = new getStock("IBM");
/****
 *
 *  for -of
 *
 * **/
var myArray = [1, 2, 3, 4];
myArray.desc = "four number";
for (var n in myArray) {
    console.log(n);
    if (n > 2)
        break;
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var n = myArray_1[_i];
    console.log(n);
    if (n > 2)
        break;
}
/****
 *
 *  class
 *
 * **/
var Person = (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(name);
    };
    return Person;
}());
var p1 = new Person();
p1.eat();
var p2 = new Person();
p2.eat();
var Teacher = (function () {
    function Teacher(name) {
        this.name = name;
    }
    ;
    Teacher.prototype.teach = function () {
        console.log(name);
    };
    return Teacher;
}());
var p3 = new Teacher("batman");
p3.teach();
var p4 = new Teacher("superman");
p4.teach();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        _super.apply(this, arguments);
    }
    Employee.prototype.work = function () {
    };
    return Employee;
}(Teacher));
var e1 = new Employee("name");
//# sourceMappingURL=arrow.js.map