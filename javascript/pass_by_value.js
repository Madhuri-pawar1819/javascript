
//pass by value

function square(x){
    x=x*x;
    return x;
}

let y=10;

let result=square(y);

console.log(result);



//pass by reference

function callByref(name){

  var name="jeo";
  console.log(name);
}


var name="jay";

let ref=callByref(name);
console.log(ref);