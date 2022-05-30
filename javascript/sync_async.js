//sync vs async code

//sync
//execute in sequence it waits till first task complete then execute next task

console.log("task1");
console.log("task2");
console.log("task3");

//async
//sequence is not defined 
//accept  task1 then task2 request .so task execution is random

// console.log("task1");
// setTimeout(()=>{console.log("task2")},2000);
// console.log("task3");




