let myNums=[1,2,3,4,5];
let num1 = myNums.reduce((acc,res)=>{`${acc} is accumulator and ${res} is result`});
console.log(num1);
console.log("\n\n\n\n\n\n\n\n\n\n\n\n");
let shoppingCart=[
    {
        itemName: "oppo",
        price : 26000
    },
    {
        itemName : "vivo",
        price : 24000
    },
    {
        itemName : "iqoo",
        price : 20000
    },
    {
        itemName : "motorola",
        price : 17000
    },
    {
        itemName : "redmi",
        price : 13000
    }
];
const finalAmount=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log("you final bill is",finalAmount.toLocaleString('en-In'),"rupees");