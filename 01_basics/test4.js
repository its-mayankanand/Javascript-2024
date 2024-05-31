//converion

// let score = "66"
// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))

//----------------------------------------

// let score =  "66abc"
// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

//here when we are converting a string 66abc to number it will perfectly get converted and 
//shows the type as number but same when we will print the actual value of that number 
//it will give output as NaN (Not a number) 
//This is the problem of javascript

//-----------------------------------------
//conversion
//"33" => 33
//"33abc" = NaN
//true = 1
//false = 0
//------------------------------------

//converting in a boolean value

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

//---------------------------------

//when we will convert empty string ""
//we get false
//if "mayank" then true

//1 = true; 0 = false
//"" = false
//"hitesh" = true

//-----------------------------------

//converting to string

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof(stringNumber))

//-----------------------------------



