console.log("2" == 2)  //In this its value is 2 hence it is true //checks on the basis of number

//strict check
console.log("2" === 2) //checks on the basis of datatype hence false


//Datatypes
// 1 . Primitive = String , Number , Boolean , null , undefined , symbol ,BigInt
// Int this primitive is like call by value 

//Reference (Non Primitive)
// Arrays , Objects , Functions


//Symbols - value same bhi hoga('123')then also har bar id and anotherId ka value  different hoga

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)