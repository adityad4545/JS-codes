let arr=[1,2,3,4,5,6,7];
let output=arr.filter(nums=>{
    return nums>4
})
// console.log(output);
// console.log('\n\n\n\n\n');
// arr.forEach(nums=>{
//     if(nums>4)
// })
//console.log(print)
console.log('\n\n\n\n\n\n');
let a1=[];
arr.forEach(a2=>{
    if(a2>4){
        a1.push(a2);
}
})
console.log(a1);
console.log('\n\n\n\n\n\n\n')
const books = [
    {
      bookName: "To Kill a Mockingbird",
      genre: "Fiction",
      publishYear: 1960,
      edition: "1st"
    },
    {
      bookName: "1984",
      genre: "Dystopian",
      publishYear: 1949,
      edition: "1st"
    },
    {
      bookName: "The Great Gatsby",
      genre: "Classic",
      publishYear: 1925,
      edition: "1st"
    },
    {
      bookName: "Pride and Prejudice",
      genre: "Romance",
      publishYear: 1813,
      edition: "1st"
    },
    {
      bookName: "Moby Dick",
      genre: "Adventure",
      publishYear: 1851,
      edition: "1st"
    }
  ];
let output1=books.filter(book=>book.publishYear>1900 && book.genre=='Classic');
console.log(output1)

  
