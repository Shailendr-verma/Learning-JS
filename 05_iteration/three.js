// for of loop 

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}


const greeting ='hello world'
for (const greet of greeting) {
    // console.log(`each vlue of ${greet}`);
    
} 
 
// Maps have unique vslue aprox same as array
// Always store a unique value  


const map = new Map()
map.set('IN' ,"india")
map.set('fr' ,"frence")
map.set('k' ,"korea")
map.set('IN', "india")
map.set('bh',"bharat")
console.log(map);


for (const [key,value] of map) {
    console.log(key ,`-:`,value);
}

const myObject ={
    'game1':'NFS',
    'game2': 'spiderman'
}