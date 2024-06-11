//singleton

//objects literals
//Object.create
let state = Symbol("");
const jsUser = {
    name1:"aditya",
    age:20,
    location:"delhi",
    email : "aditya@gmail.com",
    isLoggedIn:true,
    lastLoginDays : ['monday','saturday'],
    [state] : "maharshtra"// [] this brackets are used to declare symbols in objects 
}
console.log(jsUser.email);
console.log(jsUser["name1"]);
console.log(jsUser["name2"]);
console.log(jsUser[state])
console.log(typeof(state))
/*All the keys are string itself but js process it automatically so we do not need to include it but while accessing values  we need to put keys as string like  " " */
jsUser.location="banglore";
console.log(jsUser)
console.log("\n\n\n\n\n\n")
//Object.freeze(jsUser);//after using 'freeze' we cannot make a change in an objects
jsUser.location="jaypur";
// console.log(jsUser)

jsUser.greeting=function()
{
    console.log("Good morning");
}
console.log(jsUser.greeting())

jsUser.greetings2=function()
{
    console.log(`hello i am ${this.name1} from ${this.location} my email is ${this.email} `);
}/* when we want a reference from the same object then we use the this keyword
console.log(jsUser.greetings2())*/