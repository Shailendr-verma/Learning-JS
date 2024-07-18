// Immediately Invoed Function Expression (IIFE)
// global scope polution remove use iife   ()()
// named iife is whose function have name
(function chai(){
    console.log(`DB connected `)   
})();
// chai()

((name)=>{
    console.log(`Db connected to ${name}`);
})('shaiednra')

 

