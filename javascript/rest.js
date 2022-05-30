

//rest parameter
//pass multiple args into func call


function array(...args){
   console.log(args);
}

array(1,2,3,4,5,6);


//spread operator
//use to connect array 

let arr1=[1,2,3,4,5];
let arr2=["one","two","three"];
let arr3=[true,false];

let arr4=[arr1, ...arr3 ,arr2];

console.log(arr4);


