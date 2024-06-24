function checkUserStatus(userName="aditya"){  //if we want to set the default value then the following systax can be used.
    return `${userName} logged successfully`;
}
console.log(checkUserStatus("babu"))
console.log("\n\n\n\n\n\n\n\n\n\n");
function calculateCart(...products){
        let total=0;
        for(i=0;i<=products.length-1;i++)
        {
            total=total+products[i];
        }
        return `the total bill of yours is ${total}`;

}
const total=console.log(calculateCart(53000,300,200));
console.log("\n\n\n\n\n\n\n\n\n\n");

let studInfo={
    studName : "aditya",
    studClass : "TY"
}
function callObject(anyObject){
    console.log(`the name of student is ${anyObject.studName} and class of student is ${anyObject.studClass}`);
}
callObject({
    studName : "rohit",
    studClass : "top"
});

console.log("\n\n\n\n\n\n\n\n")

let cricketers=['rohit','virat','dhoni','shikhar'];
function cricket(india){
    for(i=0;i<=india.length-1;i++)
        {
            console.log("the",i+1+"st","player is" ,india[i])
        }
}
cricket(cricketers);
console.log("\n\n\n\n\n\n\n\n\n");

function callArray(...call1){
    return call1;
}
console.log(callArray("aditya","yash","ajay"));