// const userEmail ="shailendra@gamil"
// const userEmail =""

// if(userEmail){
//     console.log("got the  user mail");
// }
// else{
//     console.log("dont have user mail");
// }

// Falsy value 
// false ,0 ,-0BigInt 0n, "", null , undefined, Nan 

// other remain ae truthy values 
// truthy value 
// "0" , 'false' , " " , [] , {} , function(){}  , 

 const userEmail =[]
if(userEmail.length === 0){
       console.log("Array is empty");
}         


// Nullish Coalescing Operactor (??) : null operator
let val1;
val1 = 5 ?? 10
console.log(val1);
val1 =null ?? 5
console.log(val1);
val1 = undefined ?? 5
console.log(val1);
val1 =null?? 15 ?? 10
console.log(val1);

// val1 =console.log("this is true") ?? console.log("this si false");
// Ternirary operator

// consition ? true :false 

const price =180

price >40 ? console.log("yes") : console.log("no");

