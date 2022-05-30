
//call stack

// function f1(){
//     console.log('f1');
// }

// function f2(){
//     console.log('f2');

// }

// function main(){
//     console.log('main');

//     setTimeout(f1,2000);

//     f2();
// }

// main();




//job queue

function f1(){
    console.log('f1');
}

function f2(){
    console.log('f2')
}

function f3(){
    console.log('f3');
}

function main(){
    console.log('main');
    
    //browser api then callback queue
    setTimeout(f3,50);
    setTimeout(f1,30);

     //goes in job queues
     new Promise((resolve,reject)=>{
        resolve('i am promise 1');

    }).then(p1=>{console.log(p1)});


     new Promise((resolve,reject)=>{
        resolve('i am promise 2');

    }).then(p2=>{console.log(p2)});

    f2();


}

main();

