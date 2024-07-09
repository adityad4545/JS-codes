//1.for of loop
const greetings = "hello world";
for(greet of greetings){
    console.log(greet);
}

//2.Map
const printMap=new Map()
printMap.set('cricketer','rohit sharma');
printMap.set('footballer','sunil chetri');
printMap.set('tennis','rogeror fedoror');
printMap.set('bgmi','jonathan gaming');

for([key,value] of printMap){
    console.log(key+' -> '+value);
}
console.log('\n\n\n\n\n\n');
// let myObj1={
//     cricName : 'rohit sharma',
//     age : 38
// }    
// for(let[key,value] of myObj1){
//     console.log(key + '-->' +value);
// }


//for in loop

let movies={
    'allu arjun' : 'sarainodu',
    'ram charan' : 'RRR',
    'prabhas' : 'bahubali',
    'thalapathy vijay' : 'master'
}
for(let actors in movies){
    console.log(`${actors} act in ${movies[actors]} movie `);
}
console.log('\n\n\n\n\n\n\n\n\n')

let laptops=['lenovo','macbook','dell','asus'];
for(let print in laptops){
    console.log(`${laptops[print]}`)
}
console.log('\n\n\n\n\n\n\n\n');
//2.Map
const printMap1=new Map()
printMap.set('cricketer','rohit sharma');
printMap.set('footballer','sunil chetri');
printMap.set('tennis','rogeror fedoror');
printMap.set('bgmi','jonathan gaming');

for(key in printMap1){
    console.log(key+' -> '+printMap[key]);
}