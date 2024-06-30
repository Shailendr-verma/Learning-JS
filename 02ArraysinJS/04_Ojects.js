// Single toon 
// const tinderUser = new Object()
// non single toon boject
const tinderUser ={}

tinderUser.id = "123dshailendra "
tinderUser.name ="shailendra"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser ={
    email :"shailen@gmail.com",
    fullname:{
        userfullname :{
            firstName: "shailendra",
            lastName:"verma"
        }
    }
}
//  nested object are cheack through . 
// optional chaining 
// ? use for  optiona chining use for if else condition user ?

// console.log(regularUser.fullname?.userfullname.firstName)

const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",5:"b"}

// const obj3  ={obj1,obj2}
// {} use to store in new parenthisis the value of both onject 
// const obj3 = Object.assign({},obj1,obj2,obj4)


// Object assign are store combine the value in object 1 store value in first objct that user {}  this 
const obj3 = {...obj1 ,...obj2} // object .sread the glass examle this is usable 


console.log(obj3);
console.log(tinderUser);
// to cheack all values and keys of objects 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// to cheack the property are exist in object or not 
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
console.log(tinderUser.hasOwnProperty("isLoggIn"))
console.log(tinderUser.hasOwnProperty("name"))
