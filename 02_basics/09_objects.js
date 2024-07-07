//combining two objects

//const obj1 = {1: "a", 2: "b"}
//const obj2 = {3: "a" ,4: "b"}

//const obj3 = Object.assign({},obj1,obj2) //best practices
// console.log(obj3);

//const obj4 = {...obj1, ...obj2}   //best way same as array //spread operator
//console.log(obj4)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//when data will come from database
//it will be in the form of array of objects

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"m@gmail.com"
    },
]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const  tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(Object.keys(tinderUser))    //keys dega
console.log(Object.values(tinderUser))  //values dega
console.log(Object.entries(tinderUser)) //array ke andar array dega
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true