//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php

//Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

let obj1 = { age: 25, hair: 'long', beard: true };
let obj2 = { hair: 'long', beard: true };


function checkProp(obj1, obj2) {
    for(let k in obj1){
        for(let g in obj2){
            console.log(k ,g)
        }
    }
}
checkProp({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true } )