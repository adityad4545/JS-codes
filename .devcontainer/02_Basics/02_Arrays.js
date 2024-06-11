//Join to arrays using the concat  method
const retroIndia=['sahcin','sehwag','dravid','ganguly'];
const newIndia=['rohit','virat','bumrah','rishabh'];
const concatop=retroIndia.concat(newIndia);
console.log(retroIndia);
console.log(concatop);
console.log(concatop[5]);
const youngIndia=['shubhman','Ishan','avesh','yashaswi']
const spreadop=[...retroIndia,...newIndia,...youngIndia];
console.log(spreadop);
console.log(spreadop[11]);

/*instead of using concat we will use most of the times spread beacause 
concat only joins two arrays but spread method joins two or more arrays*/
console.log("\n\n");

const firstArr=[1,2,3,[4,5,6,[7,8,9]],9,0];
console.log("original array :",firstArr);
const flatop=firstArr.flat(2);
console.log("after modifying",flatop);

/*by using flat method we can print whole array(including subarrays) in single differet array the value(e.g (2)) put in flat method is depth of operation*/

const name1=new String("aditya");
console.log(Array.from(name1));
/* from method is use to convert any datatype in array*/
const name2=new Object({nav:'aditya',number:'45'});
console.log(name2);
console.log(Array.from(name2))
console.log("\n\n\n\n\n");
let num1=100;
let num2=200;
let num3=300;
let op=Array.of(num1,num2,num3);
console.log(op);
/* of method is use to convert multiple values/variables in single array*/



