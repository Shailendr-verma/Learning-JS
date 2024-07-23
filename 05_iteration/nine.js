// const myNums =[1,2,3]
//  reduce go to all value to array 
// currval is the current value in the array 

// const myTotal =myNums.reduce(function (acc ,currval) {
//     console.log(`acc ${acc} curvalle ${currval}`);
//     return acc+ currval
// },0)

// ARROW function 
// const myTotal =myNums.reduce ((acc ,currval)=> acc +currval,0)

// console.log(myTotal);


const shoppingCard  = [
    
    {
        itemName :"jas course",
        price : 999
    },
    {
        itemName :"python",
        price : 1000
    },
    {
        itemName :" DSA course",
        price : 2999
    },
    {
        itemName :"c ++ course",
        price : 15000
    }
]

 const priceTopay = shoppingCard.reduce((acc,item)=> acc + item.price,0)
 console.log(priceTopay);