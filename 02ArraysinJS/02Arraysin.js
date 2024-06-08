// console.log("hello world ");

const Marvel_heros= ["thor" ,"ironman" ,"captain"]
const dc_heros =["superman","batman", "spiderman"]

// Marvel_heros.push(dc_heros);
// console.log(Marvel_heros);

// dc_heros.concat(Marvel_heros);

// console.log(dc_heros);

const all_heros =Marvel_heros.concat(dc_heros);
console.log(all_heros);

const allNewHeros =[...Marvel_heros,...dc_heros];///spred operator to join two arrys

console.log(allNewHeros);

const another =[1,2,3,[4,5,6],7,[8,9,3,[6,5]]]

const realArray = another.flat(Infinity);// use to clear thes types of array inside of insise array;

console.log(realArray);

// to make any value is array by thes form 
// and cheack the value are in array or not 
console.log(Array.isArray("shailendra"));
console.log(Array.from("shailendra"))
console.log(Array.from({name:"shailendra"}));

let score1 =100;
let score12=200;
let score13 =300
// to create the vale from array
console.log(Array.of(score1,score12,score13));
