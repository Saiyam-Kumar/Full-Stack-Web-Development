let num = [1,2,3,4,5]
console.log(num);

num[0] = 567;
num[3] = 789;
console.log(num); //Arrays are mutable

console.log(num.length);

let names = [49,"Saiyam",98,"Kumar"]
console.log(names);

console.log(typeof(names)); //Type of array is object

let s = names.toString(); //Converts arr -> string with comma seperated values
console.log(s);

let str = names.join(" and "); //Joins the arr elements with some seperator
console.log(str);

names.pop();// remove element from back
console.log(names);

names.push(789);// add element at back
console.log(names);

console.log(names.shift());//remove element from front
console.log(names);

names.unshift("hey"); //add element in beg
console.log(names);

delete names[1]; //delete any index element
console.log(names);
console.log(names.length);// same length as memory is already allocated

let c1 = [7,8,9]
let c2 = [4,5,1]
let c3 = [0,6,3,2]
let c4 = [10,12,11]

let finalc = c1.concat(c2,c3,c4);

console.log(finalc);

//alphabetically sort
finalc.sort();
console.log(finalc);

//ascending order sort
finalc.sort((a,b)=>a-b);
console.log(finalc);

//descending order sort
finalc.sort((a,b)=>b-a);
console.log(finalc);

let nums = [1,2,3,4,5,6]
console.log(nums.splice(2,3,23,24,25)); //removable elements
console.log(nums);

let nums1 = [1,2,3,4,5,6]
console.log(nums1.slice(2));
console.log(nums1.slice(2,4)); //creates a new arr

nums1.reverse();
console.log(nums1);

