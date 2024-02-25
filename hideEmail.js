//Q- Write a JavaScript function that hides email addresses to prevent unauthorized access.

const protect_email = (user_email) => {
    //Split the email in 2 parts
    let splitted = user_email.split("@");
    let part1 = splitted[0];
    let avg = part1.length / 2;
    part1 = part1.substring(0, avg);
    let part2 = splitted[1];
    return part1 + "...@" + part2;
}

console.log(protect_email("biswajit_sahoo@gmail.com"));
