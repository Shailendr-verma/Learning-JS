// let a =10
// const b=20
// var c=30 // Global variable no limit of Scope 
// {} //Scope in lagauge


// console.log(a);
// console.log(b);
// console.log(c);

// child variable access the parents 
// icecreame 

// inner variable access the out variable is known as Closer 
// function one(){

//     const username ="shailendra"

//     function two(){
//         const website ="youtube"

//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()
//////////////////////////////////////////////////////////////////////////////////////////////////
// how to arrenge the function call   if declare variable when not call to anywhere 
console.log(addone(5))
function addone(num){
    return num +1
}

// addTwo()
// console.log(addTwo(3));

const addTwo =function(num){
    return num+2
}
addTwo()
// before initilization error show