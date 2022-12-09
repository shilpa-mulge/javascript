
//call
var obj={num:2};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
}
console.log(addToThis.call(obj,3,2,1));

//apply
var arr=[1,2,3];
console.log(addToThis.apply(obj,arr));
var obj2={num:5};
console.log(addToThis.apply(obj2,arr));

//bind
var bound=addToThis.bind(obj);
console.dir(bound)

console.log(bound(1,2,3));
  
var student={age:20};

var print=function(){
    return this.age;
}
var p=print.bind(student);
console.log(p())






//currying
let mul=function(x,y){
    console.log(x*y);
}

let mulTwo=mul.bind(this,2);
mulTwo(3);
let multhree=mul.bind(this,3);
multhree(5);


let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let mul2=multiply(2);
mul2(3);

let mul3=multiply(3);
mul3(3);
