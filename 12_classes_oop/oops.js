function user(username,loginCount ,isLogged){

  this.username = username;
    this.loginCount =loginCount;
    this.isLogged =isLogged;
return this
}
const userOne = user("shailendra ", 12, false)
const userTwo = user("verma ", 17, true)
console.log(userOne);
// concept of method override where same name of the constructor that its override the method 
console.log(userTwo);

