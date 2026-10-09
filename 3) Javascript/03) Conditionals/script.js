console.log("Making a basic  Calculator with all operaters");

//Arithmetic operators
let a = 10,b = 5;
let sum = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let exp = a**b;
let mod = a%b;

console.log("The sum of two numbers is : "+ sum);
console.log("The sub of two numbers is : "+ sub);
console.log("The mul of two numbers is : "+ mul);
console.log("The div of two numbers is : "+ div);
console.log("The exp of two numbers is : "+ exp);
console.log("The mod of two numbers is : "+ mod);

a++;
b--;

console.log("The inc of a number is : "+ a);
console.log("The dec of b number is : "+ b);

//Basic comparision based operator(imp)
let x = "3";
let y = 3;

if(x==y){
    console.log("This is == operator only checks value");
}else{
    console.log("val must not be equal but type could be equal or not also")
}

if(x===y){
    console.log("This checks the value and also the type if both are true then return true");
}else{
    console.log("Type or value must be diff");
}

//if-else if-else ladder
let score = 15;
if(score == 0){
    console.log("You failed!");
}else if(score > 0 && score < 20){
    console.log("You Won!");
}else{
    console.log("You are Champion!");
}

//ternary operator
let marks = 32;
let result = marks>33 ? "pass" : "fail";
console.log(result);

