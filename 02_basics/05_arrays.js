//Question is : ek symbol lo usko object ki
//keys me add karo and print krke dikhado

//symbol declaration:
const mySym = Symbol("key1")

//if want to use mySym as symbol then have 
//to write it in square bracket

const JsUser = {
    name: "Mayank",
    "full name":"Mayank Anand",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "maya603@gmail.com"
}

console.log(typeof JsUser[mySym])  //string

//correct syntax is this only


