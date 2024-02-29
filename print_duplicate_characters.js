//Q- Print all the duplicate characters from a string

const mapOfString = str => {
    const map ={};
    str.split("").forEach(i => map[i] = map[i] ? map[i] + 1: 1);
    return map;
   } 
   const duplicateString = str => {
    const arr =[];
    const obj = mapOfString(str)
    for(let j in obj){
        if(obj[j] > 1){
            arr.push(j)
        }
    }
    return arr.join("")
   }
   console.log(duplicateString("javaScript"));