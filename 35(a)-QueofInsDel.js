// create new button ele and  give text "click me!", background color of red text color is white
// insert the button as first ele inside the  body tag

let crebtn = document.createElement("button");
crebtn.innerText = "Click me!";

crebtn.style.backgroundColor = "red";
crebtn.style.color = "white";
crebtn.style.padding = "5px";

let body = document.querySelector("body");
body.prepend(crebtn);


// create new class in css and append the new class to <p> element

// let para = document.querySelector("p");
// console.dir(para);
// let get = para.getAttribute("class");
// console.log(get);
// let set = para.classList.add("newpara");

// create new class in css and append the new class to <p> element

let para = document.querySelector("p");
para.classList.add("newpara");
para.classList.remove("paras");



