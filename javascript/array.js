
//array  & methods

let array=new Array(10,29,30);

console.log(array);

let empty=[];
console.log(typeof(empty));

let fruits=["mango","apple","banana","strawberry"];
console.log(fruits);
console.log(typeof(fruits));



let student=["jay",22,"pune",90.99];

student[4]="pune";

console.log(student);



// array methods

fruits.push("cherry");

// fruits.pop();

// fruits.shift();

fruits.unshift("orange");
console.log(fruits);

fruits.join("-")
console.log(fruits);


// let numbers=[2,3,7,8,9,5,1,0];
// let index=numbers.indexOf(7);
// console.log(index);

// let person={};
// console.log(Array.isArray(person));

//array slice

let colors=["yellow","green","blue","white"];

console.log(colors.slice(1,3));

//array splice

console.log(colors.splice(1,3));

colors.splice(2,1,"grey","red");
console.log(colors);



//const array

const array1=[2,3,4,5];

array1.push(0);
array1.pop();
array1.push("x");

console.log(array1);


// const value we cant edit but const array object we can there only var is constant

// const value=10;
// value=30;
// console.log(value);