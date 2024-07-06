//Objects
//chakkar of keys and values

const JsUser = {
    name: "Hitesh",
    "full name":"Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "mayankanand603@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

//we can access through this but not right way
//console.log(JsUser.email)

//other way (square bracket have to give in form of string)
//console.log(JsUser["email"])

//we cant access that fullname using .
//have to access it using square bracket and string
console.log(JsUser["full name"])



