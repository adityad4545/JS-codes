const myArr=[1,2,3,4,5];
console.log(myArr);
const myArr2 = new Array("abc", "xyz", "pqr");
myArr2.push("ajay");
console.log(myArr2);
myArr2.pop()
console.log(myArr2);
myArr2.unshift("ajit");
console.log(myArr2);
myArr2.shift();
console.log(myArr2);
console.log(myArr2[1]);
console.log(myArr2.indexOf("xyz"))
console.log(myArr2.includes("pqr"))//checks element are present in array or not


const newArr=myArr2.join();
console.log(newArr);
console.log(typeof(newArr))
console.log("\n\n");


const a=[1,2,3,4,5];
console.log("A",a)
const aa=a.slice(1,4);
console.log(aa)
const bb=a.splice(1,4);
console.log(bb);
console.log("B",a)

// +++++ the main difference between slice and splice is slice do not modify the array and cut the array in range without adding last range of element 
// +++++ In splice it modifies the original array and cut the array according to range