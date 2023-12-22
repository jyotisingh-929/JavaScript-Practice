// sum of numbers

let num = [1,2,3,4,5];

let sumVal = num.reduce( (preVal,currVal) => {
    return preVal + currVal;
})
console.log(sumVal);

// largest number

let arr = [1,2,3,4,5,6,7,8,9,10];

let largeNum = arr.reduce( (preVal,currVal) => {
    return preVal > currVal ? preVal : currVal;
})
console.log(largeNum);