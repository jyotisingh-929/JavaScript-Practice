                //   push(): add to end

let foodItems = ['Momos','Chicken','Mutton','Kfc'];
foodItems.push('Pizza','Panipuri');
console.log(foodItems);

                //   pop(): delete from end & return 

let foodyItems = ['Momos','Kfc','Chicken','Pizza'];
console.log(foodyItems);

let deleteItem = foodyItems.pop();
console.log(foodyItems);
console.log('Delete Item =',deleteItem);

                //   toString(): convers array to string

let foodieItems = ['Momos','Kfc','Chicken','Pizza'];

console.log(foodieItems);
console.log(foodieItems.toString());
console.log(foodieItems);

                //   concat(): joins multiple arrays & returns result
                
let marvelHeros = ['Thor','Spiderman','Ironman'];
let dcHeros = ['Superman','Batman'];
let indianHeros = ['Shaktiman','Krish'];

let heros = marvelHeros.concat(dcHeros,indianHeros);
console.log(heros);
console.log(marvelHeros);
console.log(dcHeros);
console.log(indianHeros);

                //   unshift(): add to start

let marvelHeros1 = ['Thor','Spiderman'];

marvelHeros1.unshift('Antman');
console.log(marvelHeros1);

                //   shift(): add to start

let dcHeros1 = ['Superman','Batman'];

let deleteItems = dcHeros1.shift();
console.log(dcHeros1);
console.log("Delete Item =",deleteItems);

                //   slice(): returns a piece of the array
                //   slice( startIdx , endIdx )

let marvelHeros2 = ['Thor','Spiderman','Ironman','Antman','Batman'];
console.log(marvelHeros2);

console.log(marvelHeros2.slice(1,3));
console.log(marvelHeros2.slice(2));
console.log(marvelHeros2.slice());

                //  splice(): change original array ( add, remove, replace )
                //  splice( startIdx , delCount , endEl1... )

let marvelHeros3 = ['Thor','Spiderman','Ironman','Antman'];
// add method
marvelHeros3.splice(1,0,'Batman','Superman');
console.log(marvelHeros3);

let marvelHeros4 = ['Thor','Spiderman','Ironman','Antman'];
// delete method
marvelHeros4.splice(1,2);
console.log(marvelHeros4);

let marvelHeros5 = ['Thor','Spiderman','Ironman','Antman'];
// replace method
marvelHeros5.splice(1,1,'Batman');
console.log(marvelHeros5);




