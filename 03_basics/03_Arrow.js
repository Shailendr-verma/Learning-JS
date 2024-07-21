const user ={
    username:"shailendra ",
    price:999,
// this is current cotext  this refer the current context 
    welcomeMessage :function() {
        console.log(`${this.username} , Welcom to website`);
        console.log(this);
    }

}
user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);

// { this }show the current whole context in scope 
// context work under only object only 
// function chai(){
//     username :"shailendra"
//     console.log(this.username);
// }
// chai()

// Syntax of arrow Function 
// const chai =() =>{
//     username :"shailendra"
//     // console.log(this.username);
//     // console.log(this);
//     console.log(this.username);
   
// }
// chai()

// const addTwo =(num1 ,num2)=>{
//     return num1 + num2

// }

// console.log(addTwo(3,4))


//  const addTwo =(num1 ,num2)=>num1 + num2
// const addTwo =(num1 ,num2)=>(num1 + num2)

// console.log(addTwo(3,4))
// user parenthisis is compulsary 

const addTwo =(num1 ,num2) => ({username:"Shailendra"})
console.log(addTwo(3,5))
