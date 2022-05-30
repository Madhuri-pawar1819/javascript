

//prototype
//add properties & methods to constructor object so multiple constructor object can inherit it

function Person(fname,lname,city){
    this.fname=fname,
    this.lname=lname,
    this.city=city
}

let p1=new Person("radhi","shetty","pune")
let p2=new Person("jay","shetty","bmt")

Person.prototype.nationality="indian";

Person.prototype.fullName=function(){
    return this.fname+" "+this.lname;
}

console.log(p1);
console.group(p2);
console.log(p2.nationality);//new p2 inherit property of p1 
console.log(p1.fullName());
