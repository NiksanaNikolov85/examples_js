//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php

//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

/*
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
*/

function checkProp(obj1, obj2) {
    for(let k in obj2){
        if(obj1.hasOwnProperty(k) && obj2.hasOwnProperty(k))
            return true;
            return false;
       
    }
}
checkProp( { age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true } );
checkProp( { hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true } );
checkProp( { hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true } );