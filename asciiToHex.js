//Q- Write a JavaScript function to convert ASCII to Hexadecimal format.

const convert = (str) =>{
  
    let arr =[];
  for (let i = 0; i <str.length ; i++) {
    let hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('')
}

console.log(convert('24'));
console.log(convert('100'));
