// Object

const mySum= Symbol("key1")


const jsUser ={
    name: "shailendra",
    age :18,
    "full name" :"shailendra verma ",
    email : "shailednr@gmail.com",
    location : "bhopal",
    mySum :"mykey1",
    [mySum] :"mykey1",

    // [] user to refer symbol i output
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["mySum"]);


jsUser.email ="shailendragpt.com"
// Object.freeze(jsUser)

jsUser.email ="shailendravscode.com"

// console.log(jsUser)


jsUser.greeting = function(){
    console.log("hello js user ");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());


