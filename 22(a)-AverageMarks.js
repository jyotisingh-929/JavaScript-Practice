// let marks = [85,97,44,37,76,60];
// let avg = 0;
// for(let i=0; i<marks.length; i++){
//     // avg = avg + marks[i] / marks.length;
//     avg += marks[i] / marks.length;
// }
// console.log('Avg =',avg);


                                //  using for-of loop

                                
let marks = [85,97,44,37,76,60];
let sum = 0;

for(let val of marks){
    sum += val / marks.length;
}
console.log(`Average marks of the student = ${sum}`);


