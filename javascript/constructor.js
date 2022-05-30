

//constructor

function Person(fname,lname,city){
    this.fname=fname;
    this.lname=lname;
    this.city=city;

    this.Address=function(){
        return this.city;
    }

}

let p1=new Person("madhu","pawar","pune");

p1.country="india";

p1.fullName=function(){
    return this.fname +" "+this.lname;
};

console.log(p1);

console.log(p1.fullName());

console.log(p1.Address());




