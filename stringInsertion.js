//Q- Write a JavaScript function to insert a string within a string at a particular position (default is 1).

const insert = (main_string,ins_string,pos) =>{
   if(typeof(ins_string) == "undefined"){
    ins_string = '';
   }
   if(typeof(pos) == "undefined"){
    pos = 0;
   }
   return main_string.slice(0,pos)+" "+ins_string+main_string.slice(pos);
}

console.log(insert("This is a JavaScript example","String",20));