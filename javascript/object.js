

//objects

//let person={};

let person={
    name:"madhu",
    age:22,
    city:"pune",

    // address:{
    //     city:"pune",
    //     state:"MH",
    //     pincode:413202
    // },

    fullName:function(){
        return this.name +" "+this.age;
    }

};

//set property
person.name="jay";
console.log(person.name);

//set method
person.loc=function(){
    return this.city;
}

console.log(person.loc());

//console.log(person.fullName());

 //console.log(person.address)

 //console.log(person)


 //object set()

 let color=new Set();

 color.add("blue");
 color.add("yellow");

 console.log(color);

 let num=new Set([2,3,4,5,5]); //cant accept duplicate values
 console.log(num);



 //object map

 let days=new Map([
     ["sun",1],
     ["mon",2],
     ["tue",3]
 ]);

 console.log(days);
 console.log(days.keys());
 console.log(days.values());

 //set map

 days.set("wed",4);
 console.log(days);

 //get map

 value=days.get("mon");
 console.log(value);

 //del map

 del=days.delete("sun");
 console.log(days);

 //clear map

//  days.clear();
//  console.log(days);


//we can update obj which declare in const

const object={
    username:"xyz",
    password:1234
}

object.username="pqr";

object.pin=1111;

console.log(object);





