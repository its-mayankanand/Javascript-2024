const mySym = Symbol()

const JsUser = {
    name: "Mayank",
    "full name":"Mayank Anand",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "maya603@gmail.com"
}

console.log(JsUser[mySym])  // output - mykey1

console.log(JsUser)  //it shows that this is symbol
//output {
 // name: 'Mayank',
//  'full name': 'Mayank Anand',
 // age: 18,
 // location: 'Jaipur',
 // email: 'maya603@gmail.com',
//  [Symbol()]: 'mykey1'
//}

//if will print anything in Symbol() between bracket then it will get printed 
//in output