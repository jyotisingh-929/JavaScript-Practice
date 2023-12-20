// function example(){
//     var x = 10;
//     if(true){
//         var y = 20;
//         console.log(x);
//     }
//     console.log(y);
// }
// example();


// {
//   if(true === 1){
//     console.log("true");
//   }else{
//     console.log("false");
//   }
// }



                //  Globle Scope 

var x = 10;
function example(){
  var y = 20;
  if(true){
    var z = 30;
    console.log("X = " +x);
    console.log("Y = " +y);
  }
  console.log("Z = " +z);
}
console.log("X = "+x);
example();