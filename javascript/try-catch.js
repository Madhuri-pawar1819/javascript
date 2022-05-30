//try catch

try{
    //statement
    let a=[2,3,4,5,6,7];
    console.log(a);
    console.log(b);
}
catch(e){
    //catch error
  console.log("error "+e.msg)
}



try{

    throw new Error("this is throw keyword");//user defined throw stmt
    //stmt after throw will not exceute

    let name="xyz";

    console.log(a);

}catch(e){
    console.log("exception handling  "+e.message);
}


//finally
//Any exception is thrown or not, finally block code, if present, will definitely execute. 

try{
    let num=10;
    if(num==10){
        console.log("ok");
    }
}catch(e){
    console.log("exception handling throw error"+e.msg);
}
finally{
    console.log("value of num is 10");
}

//nested try-catch
//execption arise in inner try will also throw into outer try

//here execption thrown by inner try catch will handle that exception  then again thisinner try-block exec throw to outer try


// (function(){
//         try{

//             try{
//                 throw new Error("oops");
//             }
//             catch(ex){
//             console.log("inner "+ex);
//             throw ex;
//             }
//             finally{
//                 console.log("finally");
//                 return;
//             }

//         }

//         catch(ex){
//             console.log("outer"+ex);
//         }

// })();




//custom error

try{
    let age=22;

    if(age>18){
        console.log("age is valid");
    }
    else{
        throw new Error("age not valid");
    }
}
catch(e){
    console.log(e);
}




//custom error
  
class BadRequestError extends Error {
    
    constructor(message) {
      super(message);
  
      this.name = 'BadRequestError';
    }
  }
  
  function throwAnError() {
    throw new BadRequestError('Something went wrong.');
  }
  
  try {
    throwAnError();
  } catch (error) {
    console.log(error.message); // 'Something went wrong.'
    console.log(error.name); // BadRequestError
  }
