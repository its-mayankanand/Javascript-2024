//const myArr = [0,1,2,3,4,5]

//Array methods

// 1 . includes()
//console.log(myArr.includes(9));

//2 . indexOf()
//console.log(myArr.indexOf(3));

//3 . join() -> converts it into a string
// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)

//4 . difference between slice and splice
const myArr = [0,1,2,3,4,5]
console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)

//1st difference between slice and splice is
//slice do not include last element 
//but splice includes last element

//2nd difference and main
//After doing slice original array remain same but
//after applying splice method original array se spliced element hat gya
//output will be if apply splice(1,3)
//then original array se 1,2,3 wala element hat jyega and bachega [0,4,5]

