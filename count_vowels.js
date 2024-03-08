//Q- Count the numbers of vowels present in a String.

let str = "Biswajit sahoo";
let lowerStr = str.toLowerCase();
let count = 0;

for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u' ) {
        count++;
    }
}

console.log(`${str} has ${count} vowels.`);
