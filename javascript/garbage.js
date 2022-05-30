
//garbage collection

// collect var func which are unreachable or not used they still occupy memory
// so we use garbage collection to collect unreachable or unused var func & free there memory

//allocate memory for object user

let user={
    "name":"jay"
};



//console.log(user);

//here user value get update/replace by null....
//so it remove memory space which user object is holding

user=null; //allocate memory

console.log(user);


//while using const we cannot update value .

// const value=20;

// value=30;

// console.log(value);


//using var

var x=30;
x=50;
console.log(x);


//in garbage collection const array object not work bcoz we cant give reference to another var


