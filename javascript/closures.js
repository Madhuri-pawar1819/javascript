


// A closure is a combination of a function and its ability 
//to remember variables in the outer scope.



//lexical scope

let say="hii..." ;

function greet(){
    let name="xyz";

    console.log(say);
    console.log(name);
}

greet();


//inner-outer scope

let name="jay";

function address(){

    let city="pune";

    function state(){

        let state="MH";
        console.log(state);

        function pincode(){

            let pincode=413110;
            
            console.log(name);
            console.log(pincode);
            console.log(city);
            console.log(state);

        }
        pincode();

    }

    state();

}

address();