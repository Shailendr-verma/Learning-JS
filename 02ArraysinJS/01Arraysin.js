// Arrays
const myArr =[0,1,2,3,4]
const myHeros =["shaktiman" ,"naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);


// Arrays methods ;
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(2)
// console.log(myArr);// add vlalur in first 

// myArr.shift() // remove the unshift element that crete through unshifted

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));/

// const newArr =myArr.join()   // join the array and convert into string with spaceseperate

// console.log(myArr);
// console.log( typeof newArr);

// Slice or splice 
// slice print range between argumetn(1,3,)
// wheather splice print and also remove it from Array

const myrr1 =myArr.slice(1,3)

console.log(myrr1);
console.log("B" ,myArr);

const myrr2 =myArr.splice(1,3) /// include the range but also remove other element from array
console.log(myrr2);
const myrr3 =myArr
console.log(myrr3);
// Description. The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

// const myArray = [1, 2, 3, 4, 5];
// const removedElements = myArray.splice(0, 2);

// console.log(myArray); // [3, 4, 5]
// console.log(removedElements); // [1, 2]