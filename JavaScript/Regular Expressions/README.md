# Regular Expressions in Javascript

A regular expression is sequence of characters that forms a pattern. We can then match the pattern to string or character combinations


## Writing Regular Expressions in JavaScript

JavaScript gives us two main ways of writing Regular Expressions.

We can either use the `Regexp` Constructor

```js

const regex - new RegExp('Mike');

```

or we  can use the literal notation:

```js
const regex = /Bruce/;

```

We define regular expressions as patterns. The word `Bruce` is a pattern, because only by combining those letters in that order will you get the word Wayne. 


So the next step is we want to check whether our string pattern exists in a sentence.

Let's start by first constructing the sentence. 

```js
let textInput = "It's not who I am underneath, but what I do that defines me. - Bruce Wayne"; 

```
To check whether our regex exists on the textinput, we simply use the `test` method to look for its existence

```js
let regex - = /Wayne/
console.log(regex.test(textInput))

```
This method is particularly useful when you're not interested in extracting values if we find a potential match. We simply want to see whethe the pattern is there then move on.

## match method

The match method gives us a bit more information compared to the test method. 

If we match out pattern, the method returns an array containing some information about the match


The match method is called on the text input and not on the regex itself.


## exec method

The exec method returns an identical response to the match method. The only difference being the match method is called on the string while the exec method is called on the regex itself.

```js
const pattern = /Wayne/;
const inputText = "I have some wayne in me."

console.log(pattern.exec(inputTex)) // null
```
We did not find our pattern in the inputText even though we can clearly see we have the pattern wayne in the input text. So what happened? Regex us case-sensitive. So Wayne is not the same as wayne.

To turn off case-sensitivity, we pass in what are called flags to the regex

```js


const pattern = /Wayne/i;
const inputText = "I have some wayne in me."

console.log(pattern.exec(inputTex)) // [...]

```

The above code will now match as we used the `i` flag to tell the regex engine to turn off case sensitivity.

What if we wanted to match all the occurences of a pattern and not just the first? We would use the `g` flag which will find all occurences of the word

# The wildcard metacharacter `.`

The dot character is used to match anything. From numbers to symbols to digits. 

```js
const wildCard = /./

const testInput = "Hi";
const testInputTwo = "o";
const testInputThree = "ey";
const testInputFour = "ello";

console.log(wildCard.test(testInput)) // true
console.log(wildCard.test(testInputTwo)) // true
console.log(wildCard.test(testInputThree)) // true
console.log(wildCard.test(testInputFour)) // true

```


## Matching specific characters

We can use brackets to match specific characters e.g `[abc]`. This will match eithe `a`, `b` or `c` in a single position.

```js

const matchOneOfMany = [ou|o]
const spellingOne = 'favorite'
const spellingTwo = 'favourite'
console.log(matchOneOfMany.test(spellingOne)) //true
console.log(matchOneOfMany.test(spellingTwo)) //true

```

## Excluding Specific Character

We can exclude specific character in our match using the `^` symbol. 

```js


```


## Character Ranges

We can also match a range of character using the square brackets then passing in the range.

```js
const allNumbersPattern = /[0-9]/
const numberListOne = "765763";
const numberListTwo = 8

```

## Matching repetiton

We can match repeating patterns using curly braces. 

```js
const pattern = /z{3}/
const testInput = "wazzzzzup"
console.log(pattern.test(testInput))
```

## Using the `*` and `+` to match

