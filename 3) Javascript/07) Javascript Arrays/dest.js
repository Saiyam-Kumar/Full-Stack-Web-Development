const arr = [1,2,3,4,5]

//Array destructuring
const[a, ,...rest] = arr; //Added comma skip 
console.log(a,rest);

const obj = {
    name : "Sam",
    age : 20,
    place : "chandigarh"
};

//Object destructuring
const{name} = obj;
console.log(name);

const{place : newplace} = obj;
console.log(newplace)
