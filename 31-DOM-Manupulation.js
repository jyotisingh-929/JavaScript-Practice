
// DOM manupulation
// DOM manupulation is basically used for selecting elements.



// 1: Seleting with ID :-
// document.getElementById("myId")        Return a unique id

let head = document.getElementById("heading");
console.dir(head);
console.log(head);



// 2: Selecting with Class :-
// document.getElementsByClassName("myClass")        Return HTML Collection like (array)

let heading = document.getElementsByClassName("head");
console.dir(heading);
console.log(heading);



// 3: Selecting with Tag :-
// document.getElementsByTagName("myTag")       Return HTML Collection like (array)

let paras = document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);



// 4: Query Selector :-
// document.querySelector("myId / myClass / myTag")           Return first element
let firElId = document.querySelector("#heading");
console.dir(firElId);
console.log(firElId);

let firElClas = document.querySelector(".head");
console.dir(firElClas);
console.log(firElClas);

let firstElem = document.querySelector("p");
console.dir(firstElem);
console.log(firstElem);


// document.querySelectorAll("myId / myClass / myTag")        Returns  a Nodelist / all elements

let allElId = document.querySelectorAll("#heading");
console.dir(allElId);
console.log(allElId);

let allElClas = document.querySelectorAll(".head");
console.dir(allElClas);
console.log(allElClas);

let allElem = document.querySelectorAll("p");
console.dir(allElem);
console.log(allElem);

