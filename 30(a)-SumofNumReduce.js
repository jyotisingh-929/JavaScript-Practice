// Qs. Take a number n as input from user. Create an array of numbers from 1 to n

function number() {

    let n = prompt("Enter the value of n:");
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i;
    }
    console.log(arr);

    // Use the reduce method to calculate sum of all numbers in the array.

    let sumVal = arr.reduce((res, curr) => {
        return res + curr;
    })
    console.log(sumVal);

    // Use the reduce method to calculate product/factorial of all numbers in the array.

    let productVal = arr.reduce((res, curr) => {
        return res * curr;
    })
    console.log(productVal);

}
number();