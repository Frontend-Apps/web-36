// writing js

let nums = [1, 2, 3, 4];
//let out = nums.pop()
//console.log(out)
//console.log(nums)

// array shift - opp for pop

let shift = nums.shift();
//console.log(nums);

// unshift
//unshift(items1,item2)

let fruits = ["banana", "apple", "orange"];
fruits.unshift("kiwi", "coconut");
//console.log(fruits);

// concat - combining

let even = [2, 4, 8, 10];
let odd = [1, 3, 7, 9];
let numbs = odd.concat(even);
//console.log(numbs)

// indexOf
let n = [30, 30, 40, 50];
let index = n.indexOf(1330);
//console.log(index)
// indexOf will return index of 1st occurance of element
// if element is not present, it will return -1

//includes(element,startIndex)
let includes = n.includes(30, 2);
//console.log(includes)

//join(seperator) - Array into string , seperator -> -,+,0

let sweets = ["Kova", "laddu", "mysorepak"];
let res = sweets.join("");
//console.log(res)

//split() -> it will convert string to array
let input = "1 2 3 4 5"


// slice(startIndex,endIndex)

//let nos = [1,2,3,4,5]
//[1] 
//let output = nos.slice(0,-4)
//console.log(output)


//splice()

let players = ["Sachin","Dhoni","Virat","Rohit"]

players.splice(1,2)
//console.log(players)


let months =["Jan","Feb","Monday","Tuesday"]

months.splice(2,2,"March","April")
console.log(months)
