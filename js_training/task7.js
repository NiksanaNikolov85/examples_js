//Write a JavaScript program to converts a specified number to an array of digits.

function convertToArray(num){
    let newNum = num.toString();
    let convert =[...newNum];
    return convert;

}

console.log(convertToArray(12345))
;
