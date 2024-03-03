//Q- Find the second largest value in an Array.

let intArr = [24, 36, 41, 86, 20, 62];

const largestValue = (arr) => {
    //Find the largest value
    let firstLargestValue = Math.max(...arr);
    //Find the index of largest value
    let idx = arr.indexOf(firstLargestValue);
    //Remove the largest value from the array
    arr.splice(idx, 1);
    //Find the second largest value
    let secondLargestValue = Math.max(...arr);
    return secondLargestValue;
}

console.log("Second largest value is " + largestValue(intArr));