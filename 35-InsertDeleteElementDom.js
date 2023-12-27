// Insert Element 

// firstly create the element than inset or add element

let newBtn = document.createElement("button");
console.dir(newBtn);
console.log(newBtn);

// set the value of new created button

newBtn.innerText = "Click Me!";

// now insert th button 

let div = document.querySelector("div");
console.log(div);

div.append(newBtn);     // add the end of node like(div) inside

div.prepend(newBtn);    // add the start of node like(div) inside

div.before(newBtn);     // add before / start the node(div) outside

div.after(newBtn);      // add after / end the node(div) outside

let p = document.querySelector("p");
console.log(p);

p.after(newBtn);


// create heading and insert in the body

let newHeading = document.createElement("h1");
newHeading.innerHTML= "<i>Hi! I'm Jyoti Singh!</i>";
console.log(newHeading);

let body = document.querySelector("body");
body.prepend(newHeading);

document.querySelector("body").prepend(newHeading);

document.querySelector("li").appendChild(newBtn);


// Delete Element

// i want to delete paragraph

// p.remove();

// i want to delete newbutton

// newBtn.remove();

body.removeChild(p);