// change or append the value of innertext(of h2)

let ele = document.querySelector("h2");
console.dir(ele.innerText);

ele.innerText = ele.innerText + " from Apna College Student";


// add some unique value to each of them

let eles = document.querySelectorAll(".box");
console.log(eles);

// eles[0].innerText = "new unique value 1";
// eles[1].innerText = "new unique value 2";
// eles[2].innerText = "new unique value 3";

// or

let idx = 1;
for(let div of eles){
div.innerText = `new unique value ${idx}`;
idx++;
}
