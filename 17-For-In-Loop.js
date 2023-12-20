// for-in loop
// for-in loop is used for Object & Array

let student = {
    name : "Jyoti Singh",
    age : 22,
    qualification : "B.Tech",
    isPass : true
};

for(let key in student){
    console.log("key = ",key, ", value = ",student[key]);
}