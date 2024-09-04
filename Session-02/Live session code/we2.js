let arr = ["A", "Good", "Problem"];

// Given an array of strings print the sum of lengths if the characters in the string are odd

// 1+7=8

// filter.reduce

let strOdd = arr.filter(function (el, i, arr) {
  return el.length % 2 !== 0;
});

let sum = strOdd.reduce(function(acc,el,i,arr){
    return acc+el.length
},0)

console.log(strOdd)
console.log(sum)