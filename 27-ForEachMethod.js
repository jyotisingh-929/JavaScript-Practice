let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val , idx){
    console.log(val , idx);
})
console.log(arr);

// arrow 
let arra = ['jyoti','jwala','rajeev','ravi'];

arra.forEach( (val , idx , arra) => {
    console.log(val.toUpperCase() , idx , arra);
})