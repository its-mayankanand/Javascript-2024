//for of loop was not working for 
//myObject but for map
//objects can be iterable by forin loop
//forin loop can be used at other place also

const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:"swift by apple"
}

// for(const key in myObject)
// {
//     console.log(key)
// }
//this gives key of object
//+++++++++++++++++++++++++++++++++++++++++
// for (const key in myObject) 
// {
//     console.log(myObject[key])
// } 
//this will give values of object
//+++++++++++++++++++++++++++++++++++++++++

//combination of both 
// for(const key in myObject)
// {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//for in loop in arrays gives keys

// const programming = ["js" ,"rb","java","cpp"]
// for(const key in programming)
// {
//     console.log(key)
// }
//this will give key as 0 , 1 , 2, 3
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const programming = ["js","rb","py","cpp"]
// for(const key in programming)
// {
//     console.log(programming[key])
// }
//this will give the value of array 
//++++++++++++++++++++++++++++++++++++++++++++++++++

//Objects ke andar loop lagana hai toh foor in loop laga dege fatak se
//arrays ke upar for oflaga dege aur bhi hai..............