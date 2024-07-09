//Immediately Invoked Function Expressions(IIFE)

// Normal function

// function chai()
// {
//     console.log(`DB CONNECTED`)
// }
// chai()
//+++++++++++++++++++++++++++++++++++

(function chai()
{
    console.log(`DB CONNECTED`)
}) ();

//global scope ke pollution ko hatane 
//ke liye IIFE ka use krte hah

( () =>  {
    console.log(`DB CONNECTED TWO`)
}) ()

//If using IIFE more than 1 then have 
//to end the first with ;

