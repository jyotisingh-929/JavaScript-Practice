// print all even no.

let num = [1,2,3,4,5,6,7,8,9,10];

let allEvenNum = num.filter((val)=>{
    return val % 2 == 0;
})
console.log(allEvenNum);    // all even no. filter with new array
console.log(num);           // no change in original array

// second tarika

let arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr.filter( (val) => {
    return val >= 4;
})
console.log(newArr);