
//async code patterns

//callback


// function download(url,callback){
//     setTimeout(()=>{`downloading...${url}`},2000);
//     callback(url);
    
// }

// function process(picture){
//     console.log(`processing ...${picture}`);
// }

// let url='https://wwww.javascripttutorial.net/pic.jpg';

// download(url,process);



//callback pass as arg to another func

// The benefit of using a callback function is that you can wait for the 
//result of a previous function call and then execute another function call.

// let msg=()=>{console.log("helloo...gm")};

// setTimeout(msg,2000);


//sync callback

// function greet(name,callback){
//     console.log("hiii.."+name);
//     callback();

// }

// //callback func
// function callMe(){
//     console.log("i am callback");
// }

// greet('peter',callMe);



//nested callback async callback

function download(url,callback){
    setTimeout(()=>
    {
        console.log(`downloading..${url}`);
        callback(url);
        
    },1000);    
  
}

let url1='https://wwww.javascripttutorial.net/pic1.jpg';
let url2='https://wwww.javascripttutorial.net/pic2.jpg';
let url3='https://wwww.javascripttutorial.net/pic3.jpg';


// download(url1,function(url){
//     console.log(`processing...${url}`);
// })

download(url1,function(url){
    console.log(`processing ..${url}`);

    download(url2,function(url){
        console.log(`processing...${url}`)
    

    download(url3,function(url){
        console.log(`processing...${url}`)

    });
   
  });

});

