const JsUser = {
    name: "Mayank",
    "full name":"Mayank Anand",
    age: 18,
    location: "Jaipur",
    email: "maya603@gmail.com"
}

JsUser.greeting = function()
{
    console.log("Hello Js user");
}
JsUser.greeting()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

JsUser.greetingTwo = function()
{
    console.log(`Hello Js User, ${this.name}`);
}
JsUser.greetingTwo()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++