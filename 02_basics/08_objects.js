//Objects Part - 2
//Objects Singleton or using constructor

// const tinderUser = new Object()    //singleton object
// console.log(tinderUser); //{}

//+++++++++++++++++++++++++++++++++++++++++++

// const tinderUser = {}              //non-singleton object
// console.log(tinderUser) // {}

//+++++++++++++++++++++++++++++++++++++++++++

// const  tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sam"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

//+++++++++++++++++++++++++++++++++++++++++++

// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"mayank",
//             lastname:"anand"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname)

//++++++++++++++++++++++++++++++++++++++++++++
//combining two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a" ,4: "b"}

const obj3 = Object.assign({},obj1,obj2) //best practices
console.log(obj3);

//++++++++++++++++++++++++++++++++++++++++++++


