//Q- Count the numbers of vowels present in a String.

let str = "Biswajit sahoo";
//Convert the String to lower case 
let lowerStr = str.toLowerCase();
let count = 0;

for (let i = 0; i < lowerStr.length; i++) {
    //Check every characters in the string, If a character is vowel, then increase the count
    if (lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u' ) {
        count++;
    }
}

console.log(`${str} has ${count} vowels.`);
