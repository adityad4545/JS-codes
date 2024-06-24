const month="summr"
switch(month){
    case "summer" : console.log("its too hot")
    break;
    case "winter" : console.log("too cold")
    break;
    case "rs" : console.log("br=eatiful rain")
    break;
    default : console.log("another universe")
    break;
}
const emptyObj={};
if(Object.keys(emptyObj).length==0){
    console.log("object is empty")
}
//***************Nullish operator*****************
let val1;
val1=null ?? 10 //nullish operator is used when the null value is comes from the database which can affect our code so by using "??" we can assign a optional value
console.log(val1);


// ***************Ternary operator in javascript*******************
let iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("greater than 80") : console.log("less than 80")