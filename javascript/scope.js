//js scopes

//global scope
//block scope
//function scope


//local scope or function scope

function say(){
    var greet="gm";
    console.log(greet);

}
say();


//global scope
let x=10;

function z(){
    let y=20;
    console.log(x+y);
   // console.log(greet);
}

z();

//block scope  
//only use in let & const


function display(){

    //create var & destroy it outside scope . so other func can also reuse that same var

    function f1(){
        const name="abc";
        console.log(name);
    }

    function f2(){
        const  name="abc";
        console.log(name);
    }

    

    f1();
    f2();
}


display();
//console.log(name);



