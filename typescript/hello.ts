var content =`aaaa
    bbb
    ccc`;

//多行字符串


var myname = "wahhh";

var getName = function () {
    return "wahhh";
}

console.log(`hell ${myname}`);
console.log(`hell ${getName()}`);

console.log(`<div>
<span>${myname}</span>
<span>${myname}</span>
</div>
`)

function test(template, name, age){
 console.log(template);
    console.log(name);
    console.log(age);
}

var myname = "wahhh";

var myname :string = "wahhh";
myname = "sdf";

 var alias:any = "hhhh";    //任意类型

alias = 13;

var age: number = 24;
var man: boolean = true;

function test2(): void{  //void 不会有任何的返回值

}
function a(name:string):string{
    var b = "wagesgd";
    return name + b;
}

function test3(a:string, b:string, c:string ='hhh'){
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("sdsdf","a");

function fun0(...args){
    args.forEach(function (arg){
        console.log(arg);
    })
}




