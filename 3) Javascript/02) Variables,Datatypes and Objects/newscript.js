
console.log("========== VAR ==========");

// 1. var: reassignment is allowed
var age = 20;
console.log("Original age:", age);

age = 21;
console.log("Updated age:", age);

// 2. var: redeclaration is allowed
var age = 25;
console.log("Redeclared age:", age);


// 3. let: reassignment is allowed
console.log("\n========== LET ==========");

let score = 50;
console.log("Original score:", score);

score = 80;
console.log("Updated score:", score);

// let score = 90; // ERROR: Cannot redeclare 'score' in the same scope


// 4. const: reassignment is NOT allowed
console.log("\n========== CONST ==========");

const college = "Chandigarh University";
console.log("College:", college);

// college = "Another University"; // ERROR: Assignment to constant variable

// const college = "Another University"; // ERROR: Cannot redeclare 'college'


// 5. Difference in scope
console.log("\n========== SCOPE ==========");

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Inside block - var:", a);
    console.log("Inside block - let:", b);
    console.log("Inside block - const:", c);
}

console.log("Outside block - var:", a);

// console.log(b); // ERROR: b is not defined
// console.log(c); // ERROR: c is not defined
