// Event in js write in sequence order always 

// what to learn 
// { 
// 1 type 
// 2 timestemp 
// 3 default prevented
// 4 target 
// 5 toElement 
// 6 srcElement 
// 7 currentTarget 
// 8 clientX
// 9 clientY
// 10 ScreenX
// 11 ScreenY
// 12 altKey
// 13 ctrlKey
// 14 
// }

//  Event propagation 

// its use for bubling the code to url click or specigfic click 
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the url");

    
// },false)

// document.getElementById('owl').addEventListener('click', function(e){
//    console.log("owl clicked");
//    e.stopPropagation()
// },false)


// document.querySelector('images').addEventListener('click',function(e){

//    console.log(e.target.parenNode);
//    let removeIt= e.target.parenNode
//    removeIt.remove()

// removeIt.parenNode.removeChild(removeIt)
   

// })
// 
