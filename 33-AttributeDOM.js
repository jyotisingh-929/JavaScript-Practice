// Attributes

// to get the attribute value

let ele = document.querySelector("h1");
console.log(ele);

let value = ele.getAttribute("id");
console.log(value);

let par = document.querySelector("p");
console.log(par);

let val = par.getAttribute("class");
console.log(val);


// to set the attribute value

let set = par.setAttribute("class","div")
console.log(set);

let val1 = par.getAttribute("class");
console.log(val1);
