// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

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

