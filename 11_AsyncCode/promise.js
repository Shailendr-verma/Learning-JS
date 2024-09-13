const promiseOne = new Promise(function(resolve, reject){
    // do any async task
    //  DB calls , cryptography , network 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    })
})

promiseOne.then(function(){
    console.log("promises consume");
    
},1000)


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    })


}).then(function(){
console.log("async 2 resolve ");

})

const  promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){

    },1000)
})

promiseThree.then()