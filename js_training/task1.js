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
        if(!(obj1.hasOwnProperty(k) && (obj1[k] === obj2[k]))){
            return false;
        }         
    }
    return true;
}
console.log(checkProp( { age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true } ));
console.log(checkProp( { hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true } ));
console.log(checkProp( { hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true } ));
console.log(checkProp({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: false } ));

const myFunction = (obj1, obj2) => {
    let areSame = true;

    Object.keys(obj2).forEach((el) => {
        if (!(obj1.hasOwnProperty(el) && (obj1[el] === obj2[el]))) {
            areSame = false;
        }
    });

    return areSame;
};

const myFunction2 = (obj1, obj2) => !Object.keys(obj2)
    .some((el) =>
        obj1[el] !== obj2[el]
    );

console.log('......');
console.log(myFunction( { age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true } ));
console.log(myFunction( { hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true } ));
console.log(myFunction( { hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true } ));
console.log(myFunction({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: false } ));

console.log('......');
console.log(myFunction2( { age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true } ));
console.log(myFunction2( { hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true } ));
console.log(myFunction2( { hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true } ));
console.log(myFunction2({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: false } ));