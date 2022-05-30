//promise

//pending
//fullfilled with value
//rejected for reason



let sucess=true;

function getUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(sucess){
                resolve([
                    {"username":"madhu","email":"pawar@gmail.com"},
                    {"username":"jay","email":"jay@gmail.com"}
                ])
            }
            else{
                reject("error, data not found");
            }
            
        },2000);

        
    })

}

// function onFullfilled(users){
//   console.log(users);
// }


//   function onRejected(error){
//       console.log(error);
//   }

// let promise=getUsers();

// promise.then(onFullfilled,onRejected);

//for finally check whether promise is fullfiled or reject

// const render=()=>{

// };

//consuming promise then &  catch

let promise=getUsers();

promise.then((users)=>
{
    console.log(users);
})

.catch((err)=>
{
    console.log(err)
})

// .finally(()=>
// {
//     render();
// });



//chaining prommise

// let p=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         resolve(10);
//     },2*100)
// })

// p.then((result)=>
// {
//     console.log(result);//10
//     return result*2;
// }).then((result)=>
// {
//     console.log(result);//20
//     return result*3;
// }).then((result)=>
// {
//     console.log(result);//60
//     return result*4;
// })
//end chaining promise



//returning promise

// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     },2000)
// });

// p.then((result)=>{
//     console.log(result);//10

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(result*2);
//         },3000)
//     })
// }).then((result)=>{
//     console.log(result);//20

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(result*3)
//         })
//     },4000)
// }).then((result)=>{console.log(result)});
//end returning promise







//PROMISE WITH DB

function getUser(username){
    return new Promise((resolve,reject)=>{
        console.log("get users from db");

        setTimeout(()=>{
            resolve({
                username:"xyz",
                email:"xyz@gmail.com"
            })
        },1000)
    })
}

function getServices(user){
    return new Promise((resolve,reject)=>{
        console.log(`get service of user ${user.username}`);

        setTimeout(()=>{
            resolve(["EMAIL","VPN","CDN"]);//services

        },2000)
        
    })

}

function getServicesCost(services){
    return new Promise((resolve,reject)=>{
        console.log(`calculate cost of ${services}`);

        setTimeout(()=>{
            resolve(services.length*100);
        },3000);
    })
}

// getUser("xyz")
// .then(getServices)
// .then(getServicesCost)
// .then(console.log);



//async/await
async function showServiceCost() {
    try {
       let user = await getUser("xyz");
       let services = await getServices(user);
       let cost = await getServicesCost(services);
       console.log(`The service cost is ${cost}`);
    } catch(error) {
       console.log(error);
    }
}

showServiceCost();

//end promise db





//promise.all()

// The Promise.all() creates array of promise returns a Promise that is rejected if any of the input promises are rejected.
//stop remaining promise execution

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("first promise resolve");
//         resolve(10);
//     },2*100);
// })


// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('second promise reject');
//         //resolve(20);
//         reject('failed');

//     },3*100);
// })

// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("third promise is resolve");
//         resolve(30);
//     },4*100)
// })


// Promise.all([p1,p2,p3])
// .then(console.log)//function as var pass
// .catch(console.log)

// Promise.all([p1,p2,p3])
// .then((result)=>{

//     const total=result.reduce((p,c)=>p+c)

//     console.log(`results:${result}`);
//     console.log(`total: ${total}`)
// })

//end promise all



//promise.race()
//who wins first takes there value

//takes value of promise which execute first & stop other promise execution 


// const p6=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("first promise resolve");
//         resolve(100);
//     },1000)
// })



// const p7=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("second promise resolve");
//         resolve(200);
//     },2000)
// })


// Promise.race([p6,p7])
// .then(value=>{console.log(`value : ${value}`)})
// .catch(error=>{console.log(`error: ${error}`)})

//end promise race



//promise.any()
//Use the JavaScript Promise.any() method to take a list of promises and return a promise that fulfills first.

// const p9=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("first promise rejected");
//         reject('failed');
//     },1000)
// })

// const p10=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("second promise resolve");
//         resolve(100);
//     },2000)
// })



// let p=Promise.any([p9,p10]);

// p.then(value=>{console.log(value)})
// //.catch(err=>{console.log(err)})


//end promise.any



//promise.allsettled()
//after executing all promises  it shows status of each promise whether it is resolve or reject

//running parallel promises 
//use promise.all() in  async-await while fetching with api who can run all promises parallelly 


//running promises sequencially
//use promise.all(),promise.allSettled(),async-await


//async/await  =>see eg in index.html file




