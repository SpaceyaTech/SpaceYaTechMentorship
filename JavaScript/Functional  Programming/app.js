// Problem 1
// Write a function that takes in an array and returns a new array with all the elements in the array multiplied by 2


//Problem 2
// Write a function that loops over an array of numbers and returns a new array that indicates whether the numbers are even or odd
// E.g input array => [23,45,67,44]
// E.g Solution => ["odd","odd","odd","even"]

const articles = [
    {
      title: 'A message to our customers',
      upvotes: 12,
      date: '2020-01-24',
    },
    {
      title: 'Alphabet earnings',
      upvotes: 22,
      date: '2019-11-23',
    },
    {
      title: 'Artificial Mountains',
      upvotes: 2,
      date: '2019-11-22',
    },
    {
      title: 'Scaling to 100k Users',
      upvotes: 72,
      date: '2019-01-21',
    },
    {
      title: 'the Emu War',
      upvotes: 24,
      date: '2019-10-21',
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: '2019-11-21',
    },
    {
      title: 'Simple text editor has 15k monthly users',
      upvotes: 7,
      date: '2010-12-31',
    },
  ];

  // Sort by 
  // (a) Ascending and Descending Order on the upvotes
//   const ascendingUpv = [...articles].sort((a,b)=>a.upvotes - b.upvotes)
//   const descendingUpv = [...articles].sort((a,b)=>b.upvotes - a.upvotes)
//   //console.log(descending)
  //console.log(articles)
  // (b) Ascending and Descending Order on the date
// const ascendingDate = [...articles].sort((a,b)=>a.date - new Date(b.date))
// console.log(ascendingDate)


  
  
  
  
  
  
  
  
  //const ascendingUpvotes = [...articles.sort((a,b)=>a.upvotes-b.upvotes)]
  //const descendingUpvotes = [...articles.sort((a,b)=>b.upvotes-a.upvotes)]
  // (b) Ascending and Descending Order data
  //const ascendingDates = [...articles.sort((a,b)=>new Date(a.date)-new Date(b.date))]
  //const descendingDates = [...articles.sort((a,b)=>new Date(b.date)-new Date(a.date))]

 const sortArrays = (arr,order,sortingProperty) =>{
      let arrCopy = [...arr]
      if(order === 'a' && sortingProperty === 'date'){
      return arrCopy.sort((a,b)=>new Date(a.date)-new Date(b.date))
      }
      if(order === 'd' && sortingProperty === 'date'){
       return arrCopy.sort((a,b)=>new Date(b.date)-new Date(a.date))
      }
      if(order === 'a' && sortingProperty === 'upvotes'){
        return arrCopy.sort((a,b)=>a.upvotes-b.upvotes)
        }
      if(order === 'd' && sortingProperty === 'upvotes'){
         return arrCopy.sort((a,b)=>b.upvotes-a.upvotes)
        }
 }
 // Sort by 
// (a) Ascending and Descending Order on the upvotes 
const ascendingUpvotes = sortArrays(articles,'a','upvotes')
const descendingUpvotes = sortArrays(articles,'d','upvotes') 
const ascendingDate = sortArrays(articles,'a','date')
const descendingDate = sortArrays(articles,'d','date')
console.log(ascendingUpvotes)
// console.log(descendingUpvotes)
//console.log(ascendingDate)


