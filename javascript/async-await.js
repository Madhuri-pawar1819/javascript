

//function who runs async so it not wait for result...sometime it takes task second before he gets result of task first

//so we use await for async func ..it can wait for result take result of first task then go to second

async function sayHii(){
    return await new Promise((resolve,reject)=>{

        console.log("next text display after 3ms so waut for it...")

        setTimeout(()=>{
            resolve("txt after 2ms");
        },3000);

       
    })
}

sayHii().then(value=>{console.log(value)})
