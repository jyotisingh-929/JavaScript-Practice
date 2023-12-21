function countVowel (str) {
    let count = 0;
    for(let char of str) {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    // console.log("Vowel no. of given string =",count);
    return count;

}
// countVowel("JyotiSingh");
let result = countVowel("JyotiSingh");
console.log("Vowel no. of given string =",result);





// using Arrow Function

const countVow = (str) => {
    let count = 0;
    for(let char of str) {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    console.log("Vowel no. of given string =",count);

}
countVow("RajeevSingh");