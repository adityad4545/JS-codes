const tinderUser=new Object(); //singleton object
const tinderUser2={} //non-singleton object
console.log(tinderUser)
console.log(tinderUser2)
/*this is the two methods of creating an object */
tinderUser.id="45aabb";
tinderUser.name="aditya";
tinderUser.location="lakhnow";
//console.log(tinderUser);
const regularUser={
    email : "aditya@gmail.com",
    fullName : {
        Name : {
            firstname : "Aditya",
            lastname : "duraphe"
        }
    }
}
console.log(regularUser.fullName.Name.firstname)
//this is the example of declaring and printing the nested objects

console.log("\n\n\n\n\n")
const jersyNo=Symbol();
const cricInfo1={
    cricName : "rohit sharma",
    [jersyNo] : 45,
    team : "mumbai Indians",
}
const cricInfo2 = {
    birthPlace :"Nagpur",
    isOpeningBatsman:true
}
//const cricInfo3=Object.assign({},cricInfo1,cricInfo2); //Object.assign function used to join two objects together

//onsole.log(cricInfo3)
const cricInfo3={...cricInfo1,...cricInfo2}
console.log(cricInfo3);

console.log(Object.values(cricInfo1));
console.log(Object.keys(cricInfo1));

console.log(cricInfo2.hasOwnProperty('isOpeningBatsman'))

const cource={
    courceName : "js in hindi",
    price : "999Rs",
    courceInstructor : "hitesh choudhari",
    courceInstructor : "code with harry",
    courceInstructor : "shraddha khapra",

}
const{courceInstructor : instructor}=cource; // Another way of fetching the values from objects
console.log(instructor);
console.log(cource.courceInstructor)