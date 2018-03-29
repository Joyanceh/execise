var content = "aaaa\n    bbb\n    ccc";
//多行字符串
var myname = "wahhh";
var getName = function () {
    return "wahhh";
};
console.log("hell " + myname);
console.log("hell " + getName());
console.log("<div>\n<span>" + myname + "</span>\n<span>" + myname + "</span>\n</div>\n");
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "wahhh";
var myname = "wahhh";
myname = "sdf";
var alias = "hhhh"; //任意类型
alias = 13;
var age = 24;
var man = true;
function test2() {
}
function a(name) {
    var b = "wagesgd";
    return name + b;
}
function test3(a, b, c) {
    if (c === void 0) { c = 'hhh'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("sdsdf", "a");
function fun0() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
//# sourceMappingURL=hello.js.map