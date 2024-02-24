//Q- Write a JavaScript function to convert a string into abbreviated form.

const abbrev_name=(str)=>{
    //Remove the white spaces and split the name 
    let split_names = str.trim().split(" ") ;
    if(split_names.length > 1){
        return split_names[0]+" "+split_names[1].charAt(0);
    }
    else{
        return split_names[0];
    }
}

console.log(abbrev_name('Biswajit Sahoo'));
