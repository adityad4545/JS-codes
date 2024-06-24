let userInfo={
    name1:"aditya",
    price : 999,
    welcomeMsg : function(){
    console.log(`${this.name1},welcome to website`)  //this keyword is used to refer the current context("the code in curly braces{}(scope)")
    }
}
// userInfo.welcomeMsg();
// userInfo.name1="adiii";
// userInfo.welcomeMsg();
console.log(this);
console.log("\n\n\n\n\n\n\n\n\n\n");
const chai=()=>
{
console.log(this);
}
chai();
const addition=(...str1)=> (str1)  //this is littble bit confusing we can remove return by removing curly braces and wrap code(i.e str) in round brackets
//when we used the return keyword it is called as explicit return when we not it is known as implicit keyword
console.log(addition("aditya","anuj","adiii"));
console.log("\n\n\n\n\n\n\n");
const obj=(name1)=>{return{
        name1:"lappy"
    }
}
console.log(obj());

