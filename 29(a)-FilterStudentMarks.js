// filter student marks that scored 90+

let marks = [75,52,87,90,95,92,88,70];

let studentMarks = marks.filter( (num) => {
    return num > 90;
})
console.log(studentMarks);