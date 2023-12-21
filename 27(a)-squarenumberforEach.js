let arrayNumber = [1,2,3,4,5,6];

arrayNumber.forEach((num) => {
    console.log(num*num);
    // or
    console.log(num**2);
})


// second tarika

let arrNumber = [2,4,6,8,10];

let numberSquare = (num) => {
    console.log(num*num);
}
arrNumber.forEach(numberSquare);
