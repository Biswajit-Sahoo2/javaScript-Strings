//Write a JavaScript function to check whether an 'input' is a string or not.

is_string = function(input) {
    //Check if it is a string or not
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };
  console.log(is_string('Biswajit'));
  console.log(is_string([1, 2, 4, 0]));
  
