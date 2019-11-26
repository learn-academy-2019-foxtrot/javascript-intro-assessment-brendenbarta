// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions
//***i forgot to save my progress and my only laptop in the house stoped working friday, im sorry for the lack of progress****
// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.

var mantra = "Be the dev"

console.log(mantra.includes("B"));



// 1b. Write the code that determines if there is an 'x' in mantra.

var mantra = "Be the dev"

console.log(mantra.includes("x"));

-----------
var mantra = "be the dev"
if(mantra.tolowercase()).incldues("B")){
 console.log("it does!")
}



// 1c. Write the code that determines if there is a 'v' in mantra.

var mantra = "Be the dev"

console.log(mantra.includes("v"));



// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
const existanceReporter = (text, testletter) =>{
  if(testLetter.tolowercase().includes(text)){
    return `congrats!` ${testLetter} exists in the string
  }
}
// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
var myDog = "Snoopy"
var myCat = "Garfield"

function sizer(myDog,Mycat){
  if (myDog.length > myCat.length){
    return  myDog
  } else {
    return  myCat
  }
}

}

console.log(sizer(myDog,myCat))




// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
\
const joiner = (word1, word2) =>[word1, word2]
console.log("joiner", joiner(myDog, myCat));

    
// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"
const lowercaser = (word1, word2) => {
  return `${word1.tolowercase()} ${word2.tolowercase()}`
}
console.log("lowercaser", lowercaser(myDog, myCat));

    
}



// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

for(i=0; o < myMessage.length, i++){
  console.log(myMessage[i])
}

// 3b. Write the code that logs each letter of the message using map.

var myMessage = "Learning is fun!"
myMessage.split('').map((letter) => console.log(letter))

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
var i = 0
while(i < myMessage.length){
 console.log(myMessage[i]);
 i++
}


// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

onst catFinder = (objects) =>{
  objects.filter()
}




// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.






// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
const catFinder = (objects) =>{
 const nonCats = objects.filter((object) => {
  return object.animal ! == 'cat'
 })
 return nonCats.mao((object) => object.name)
}
 console.log("cat finder, catFinder(toonimals"))


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
const catFinder =(objects) =>
 const nonCats=objects.filter(object)) => {
  return object.animal != 'cat'
 })
 return nonCats.map((object)) => object.name)
 }
 console.log("catFinder",catFinder(toonanimals))



//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
  
  const toonanimalreporter = function(object){
   return `${object.name} is a ${object.name}`
 
  }
  toonimalColletionReporter = function(toonimals){
   return toonimals.map((toonimal) =>toonanimalreporter (toonimal))
  }
  return
  console.log("toonanimalreporter", toonanimals)
  
  
