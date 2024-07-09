//let arr=[1,2,3,4,5,6,7,8,9,10];
// let output=arr.map(print=>{return print+10})
// console.log(output);
//*******************notes********************
//if we use '{}' in filter,map then there is mandotory to use the return keyword
let arr=[1,2,3,4,5,6,7,8,9,10];
let output=arr.map(val1=>val1*10).map(val1=>val1+1).filter(val1=>val1<=40)
console.log(output)
//the main difference between filter and map is filter is use for conditional statements(i.e if,if-else) and map is used to perform some operations
