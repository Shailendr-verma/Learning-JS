// //  2 types od dataTypes 
// // 1 . primitive  === call by value 
// // 2. Non primitive === call by refrence 

// Primitive data are of 7 types 

// 7 =[String , Number ,Boolean ,null, undefined , Symbol ,BigInt];


// Non primitive DataTypes

// [Array , Objects , Functions]


// const score =100
// const scoreValue =100.3;

// const isLoggedId =false;
// const outsideTemp =null;
// let userEmail;

// const id = Symbol('123');

// const anotherId = Symbol('123');


// Non primitive
//  const heros =["shaktiman" ,"superheroes", "doga"];
    //   key value pairs 

    
//  let obj ={ 
//     name:"shailendra verma ",
//     age:22,
// }

// typeof  use to cheack the dataTypes
//  function 

//  const myunction =function (){
//     console.log("hello world");
//  }

//  console.log(typeof null);

// lecture 12;

// Stack (premitive) give copy     nonPremitive (HEAP)-give refrence;
let myyoutubename   = "shailendra.com";
let anothername =myyoutubename

anothername ="cchai or cofe";

console.log(anothername);
console.log(myyoutubename);

let user ={
    email:"user@gmal.com",
    userupi: "user@ybl",
}

let user2 =user
user2.email ="verma@gmail.com"

console.log(user.email);
console.log(user2.email);