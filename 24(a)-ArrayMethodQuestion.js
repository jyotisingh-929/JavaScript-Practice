// remove first companyfrom the array
let companyNames = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
let deleteItem = companyNames.shift();
console.log(companyNames);
console.log("Delete Item =",deleteItem);


// remove uber and add ola in its place
let companyNames1 = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
companyNames1.splice(2,1,'Ola');
console.log(companyNames1);


// add amazon at the end
let companyName2 = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
companyName2.push('Amazon');
console.log(companyName2);

