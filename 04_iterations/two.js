//Array specific Loops

// 1 . for of
// const arr = [1,2,3,4,5]
// for (const num of arr) 
// {
//     console.log(num)
// }
//++++++++++++++++++++++++++++++++++++++++++++++++


// 2 . 
// const greetings = "Hello World!"
// for(const greet of greetings)
// {
//     console.log(`Each char is ${greet}`)
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++

// 3 . Maps - holds key value pair
//Unique values and order wise

const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States of America")
map.set('Fr',"France")
//console.log(map)

// for (const key of map)
// {
//     console.log(key)
// }

// for(const  [key, value] of map)
// {
//     console.log(key, ':-', value);
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++
const myObject = {
    'game1' : 'NFS',
    'game' : 'Spiderman'
}
for(const[key,value] of myObject)
{
    console.log(key,':-',value)
}
//here myObject is not iterable by for of loop
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++