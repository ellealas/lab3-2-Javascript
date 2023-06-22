//Question One

// Create a function that takes a string as a parameter and returns the string 
//with the first character of each word changed into a capital letter, as in the 
//example below. 
//Test it with different strings.

function capitalizeEachWord(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => capitalizeFirstLetter(word));
    return capitalizedWords.join(' ');
  }
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const inputString = 'hello my name is rochelle nice to meet you';
  const result = capitalizeEachWord(inputString);
  console.log(result);








//Question Two

//2. Create a function truncate(str, max) that truncates a given string of text if 
//its total length is greater than the max length. It should return either the truncated text, 
//with an ellipsis (...) added to the end if it was too long, or the original text otherwise.

function truncate(str, max) {
  if (str.length <= max) {
    return str; // Return the original string if its length is less than or equal to the max length
  } else {
    return str.slice(0, max) + "..."; // Truncate the string and add ellipsis (...) at the end
  }
}

console.log(truncate("she sells seashells by the seashore", 30)); // Output: "This is a..."
console.log(truncate("A little string", 10)); // Output: "Short string"
console.log(truncate("Another one", 5)); // Output: "Another ex..."

// b) Write another variant of the truncate function that uses a conditional operator.

function truncateTwo(str, max) {
  return str.length <= max ? str : str.slice(0, max) + "...";
}

console.log(truncateTwo("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", 30)); // Output: "This is a..."
console.log(truncateTwo("one two three four five six seven eight nine ten", 10)); // Output: "Short string"
console.log(truncateTwo("testing testing testing", 7)); // Output: "Another ex..."







//Question Three
// Use the following animals array for the below tasks. Test each one by printing the result to
// the console.

const animals = ['Tiger', 'Giraffe']

// a) Add 2 new values to the end
animals.push('Caterpillar', 'cat');

// b) Add 2 new values to the beginning
animals.unshift('Turtle', 'Dog')

// c) Sort the values alphabetically
animals.sort();

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value 
//    in the  middle of the animals array with newValue

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal('Elephant');
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith) 
//    that returns a new array containing all the animals 
//    that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

function findMatchingAnimals(beginsWith) {
  const beginsWithLower = beginsWith.toLowerCase(); 
  return animals.filter(animal =>
    animal.toLowerCase().startsWith(beginsWithLower)
  );
}

const matchingAnimals = findMatchingAnimals('ca');
console.log(matchingAnimals);








// Question 4
// Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.

function camelCase(cssProp) {
  const words = cssProp.split('-');
  let camelCased = words[0];
  for (const word of words.slice(1)) {
    camelCased += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return camelCased;
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display





// Question 5
// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004


//We can sometimes avoid this using the toFixed function to force the number of decimal
//places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(twentyCents.toFixed(2) + tenCents.toFixed(2)) //why is this not working?



// a) Explain why the above code returns the wrong answer

//The toFixed(2) method is used to round a number to a specified number 
//of decimal places and returns a string representation of the rounded number.
//When you concatenate two strings using the + operator, JavaScript performs string 
//concatenation

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.


function myFunction(float1, float2) {
  return (float1 + float2).toFixed(2);
}

let answer = myFunction(0.20, 0.10);
console.log(answer);

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result.

function currencyOperation(float1, float2, operation) {
  let result;

  switch (operation) {
    case '+':
      result = float1 + float2;
      break;
    default:
      console.log('Invalid operation');
      return undefined;
  }

  return parseFloat(result.toFixed(2));
}

console.log(currencyOperation(0.20, 0.10, '+'));


// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.










//Question 6
// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.


function unique(duplicatesArray) {
  return Array.from(new Set(duplicatesArray));
}
// Test with the following arrays and create another one of your own.
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
  






//Question 7
// Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];


  // a) Write a function getBookTitle(bookId) that uses the find function to return the
  // title of the book object with the matching id.

  function getBookTitle(bookId) {
    const book = books.find((book) => book.id === bookId);
    return book ? book.title : 'Book not found';
  }
  
const bookId = 5;
const bookTitle = getBookTitle(bookId);
console.log(bookTitle);

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}

const oldBooks = getOldBooks();
console.log(oldBooks);

//c) Write a function addGenre() that uses the map function to add a new genre property
//to all of the above books, with the value ‘classic’.
function addGenre() {
  return books.map((book) => {
  return { ...book, genre: 'classic' };
  });
  }


const booksWithGenre = addGenre();
console.log(booksWithGenre);

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
function getTitles(authorInitial) {
  
  const filteredBooks = books.filter((book) => book.author.startsWith(authorInitial));
  const bookTitles = filteredBooks.map((book) => book.title);

  return bookTitles;
}

console.log(getTitles('F')); 
console.log(getTitles('A')); 

// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

function latestBook() {
  let latest = null;

  books.forEach((book) => {
    if (!latest || book.year > latest.year) {
      latest = book;
    }
  });

  return latest;
}

console.log(latestBook());




// Question 8
// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map()
//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
phoneBookDEF.set('Daniel', '0407898878')
phoneBookDEF.set('Erin', '0433221117')
phoneBookDEF.set('Frank', '0455221182')

//c) Update the phone number for Caroline
phoneBookDEF.set('Caroline', '0407867765');

//d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
  });
}
printPhoneBook(phoneBookDEF);



//e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

//f) Print out the full list of names in the combined phone book
console.log(phoneBook);






// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  "Timothy" : 35000,
  "David" : 25000,
  "Mary" : 55000,
  "Christina" : 75000,
  "James" : 43000
  };

//a) Write a function sumSalaries(salaries) that calculates 
// and returns the total of all salaries

function sumSalaries(salaries) {
  let salaryValues = Object.values(salaries);
  let totalSalary = salaryValues.reduce((acc, curr) => acc + curr, 0);
  return totalSalary;
}

console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary
function topEarner(salaries) {
  let maxSalary = 0;
  let topEarnerName = '';

  for (let person in salaries) {
    if (salaries[person] > maxSalary) {
      maxSalary = salaries[person];
      topEarnerName = person;
    }
  }

  return topEarnerName;
}

console.log(topEarner(salaries));


// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')



// a) Print the total number of minutes that have passed so far today
const now = new Date();
const minutes = now.getHours() * 60 + now.getMinutes();
console.log("Total minutes passed today:", minutes);

// b) Print the total number of seconds that have passed so far today
// Get the current date and time
const seconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
console.log("Total seconds passed today:", seconds);



// c) Calculate and print your age as: 'I am x years, y months and z days old'
const birthdate = new Date(1999, 10, 15); 
const currentDate = new Date();

const ageInMilliseconds = currentDate - birthdate;
const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; 

const years = Math.floor(ageInMilliseconds / millisecondsPerYear);
const months = Math.floor((ageInMilliseconds % millisecondsPerYear) / (millisecondsPerYear / 12));
const days = Math.floor((ageInMilliseconds % (millisecondsPerYear / 12)) / (1000 * 60 * 60 * 24));

console.log(`I am ${years} years, ${months} months, and ${days} days old.`);


// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.
function daysInBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; 
  const timeDiff = Math.abs(date2.getTime() - date1.getTime()); 

  return Math.floor(timeDiff / oneDay); 
}

const date1 = new Date('2022-01-01');
const date2 = new Date('2022-02-15');

const day = daysInBetween(date1, date2);
console.log(day); 















