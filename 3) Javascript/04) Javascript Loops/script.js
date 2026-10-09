//for loop
for (let i = 0; i < 100; i++) {
    console.log(i);
}

//for in loop
object = {
    Name : "Saiyam",
    Uid : "24BCS10108",
    Address : "Punjab"
};

for (const key in object) {
    console.log(key);
    console.log(object[key])
}

//for of loop
let name = "Sam";
for (const element of name) {
    console.log(element);
}

//while loop
let idx = 0;
while(idx<6){
    console.log("hi");
    idx++;
}

//do while loop
let index = 1;
do {
    console.log(index);
    index++;
} while (index > 10);
