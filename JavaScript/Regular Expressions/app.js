// 1. What are Regular Expressions
// 2. How to Write Regular Expressions
// 3. Matching patterns => test,match
// 5. Using flags
// 6. Matching one of different patterns => |
// 7. Matching anything
// 8. Matching at specific positions => ^,$
// 9. Using Quantifiers => *,+,?,{}


// 1. Regexp Constructor

//let pattern = new RegExp('Mike');

// 2. Literal Notation
let pattern = /./ig
let sentence = "This is a mike Mike"


//test method
console.log(pattern.test(sentence))

// match
//console.log(sentence.match(pattern))


// const matchOneOfMany = /[ou|o]/
// const spellingOne = 'favorite'
// const spellingTwo = 'favourite'
// console.log(matchOneOfMany.test(spellingOne))
// console.log(matchOneOfMany.test(spellingTwo))

// const allNumbersPattern = /[0-9]/
// const numberListOne = "765763";
// const numberListTwo = 8

// console.log(allNumbersPattern.test(numberListTwo))
// console.log(allNumbersPattern.test(numberListOne))



// const pattern = /z{3}/
// const testInput = "wazzzzzup"
// console.log(pattern.test(testInput))

