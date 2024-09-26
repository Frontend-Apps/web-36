// forEach, map, filter(HW)

let nums = [1, 3, 5, 7];
let a = [10, 20, 30];
//customForEach
Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

a.customForEach(function (el, i, arr) {
  console.log(el);
});

//original forEach
nums.forEach(function (el, i, arr) {
  console.log(el);
});

// original map

let res = nums.map(function (el, i, arr) {
  return el;
});

console.log(res);
//filter, sort,map,forEach, reduce
//customMap
Array.prototype.customMap=function(callback){
    let resultArr =[]
    for(let i=0;i<this.length;i++){
        resultArr.push(callback(this[i],i,this))
    }
    return resultArr
}

let out = nums.customMap(function(el,i,arr){
    return el
})
console.log(out)

//filter, reduce