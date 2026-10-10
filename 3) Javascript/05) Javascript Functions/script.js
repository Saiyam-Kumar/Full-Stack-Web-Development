function sum(a,b){
    console.log(a+b);
}
sum(4,5);
sum(5,6);
sum(4,5,6);

function retsum(c,d,e){
    return c+d+e;
}

let result1 = retsum(24,45,0);
let result2 = retsum(24,45,90);
console.log("The sum of c and d and e : " + result1);
console.log("The sum of c and d and e : " + result2);

function print(name){
    console.log(name + " is very handsome person");
    console.log(name + " is very honest person");
    console.log(name + " is very discplined person");
    console.log(name + " is very hardworking person");
}
print("Saiyam");
print(" Stuti");

const func1 = (x) => {
    console.log("This is a Arrow Function",x);
}

func1(34);

const add = (a,b) => a+b; //implicit return after the arrow
console.log(add(5,8))
