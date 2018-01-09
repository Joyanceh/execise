/**
 * Created by Administrator on 2017/10/27.
 */
var myArray = [1,2,3,4,5];
console.log(myArray.filter(value => value%2 ==0));

function getStock(name:string){
    this.name = name;

    setInterval(function(){
        console.log("name is: " + this.name);
    },1000);
}

var stock = new getStock("IBM");




/****
 *
 *  for -of
 *
 * **/

var myArray = [1,2,3,4];

myArray.desc = "four number";

for(var n in myArray){
    console.log(n);
    if(n>2) break;
}

for(var n of myArray){
    console.log(n);
    if(n>2) break;
}



/****
 *
 *  class
 *
 * **/

class Person {
    private name;

    public eat(){
        console.log(name);
    }
}

var p1 = new Person();
p1.eat();

var p2 = new Person();
p2.eat();





class Teacher {

    constructor( public  name:string){

    };

    public teach(){
        console.log(name);
    }
}

var p3 = new Teacher("batman");
p3.teach();

var p4 = new Teacher("superman");
p4.teach();


class Employee extends  Teacher{
    code: string;
    work(){

    }
}
var e1 = new Employee("name");






