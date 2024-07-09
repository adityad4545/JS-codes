let statesInIndia=['maharashtra','goa','rajastan','tamilnadu'];
statesInIndia.forEach( function(states){
    console.log(states);
})
statesInIndia.forEach(states=>{
    console.log(states)
})
statesInIndia.forEach((states,indexes,arrays)=>{
    console.log(states,indexes,arrays)
})
console.log('\n\n\n\n\n\n\n\n\n\n');
let information=[
    {
        programmingLang : 'java',
        difficuly : 'hard'
    },
    {
        programmingLang : 'python',
        difficuly : 'easy'
    },
    {
        programmingLang : 'javascript',
        difficuly : 'medium'
    }

]
information.forEach(getValues=>{
    console.log(getValues.programmingLang + '---> '+getValues.difficuly);
})
