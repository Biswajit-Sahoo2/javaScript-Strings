//Q- Check whether the given String is palindrome or not.

let str = "1221";
//Convert the string to lowercase
let lowerStr = str.toLowerCase();

const checkPalindrome = (lowerStr) =>{
    //Split the string,then Reverse the string,then join the string
    reverseStr = lowerStr.split("").reverse().join("");
    if (lowerStr === reverseStr) {
        return true;
    } else {
        return false;
    }
    
}

if (checkPalindrome(lowerStr)) {
    console.log(`${str} is a Palindrome.`);
} else {
    console.log(`${str} is not a Palindrome.`);
}