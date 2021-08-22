// MAP
// ######################################################
// make all capitalized
let words = ["these", "words", "need", "capitalized"]
let caps = words.map(words => words.toUpperCase())
console.log(caps)

// square using let
let numbers = [1, 2, 3, 4]
let squared = numbers.map(number => number*number)
console.log(squared)

// square using var
var number = [1,2,3,4,5];
var doubled = number.map(function(num){
    return num * 2;
});
console.log(doubled);

// square using anonymous function
var int = [1,2,3,4,5];
var doubled = int.map(function(integer) {
    return integer * 2;
});
console.log(doubled);

// adding five using the anonymous function
var addFive = [1,2,3,4,5];
var doubled = addFive.map(function(integer) {
    return integer + 5;
});
console.log(doubled);

// return the population from an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulation = cities.map(function(population){
    return population.population;
});
console.log(cityPopulation);

// FILTERS
// #############################
// filter for even numbers
let numbers = [13, 22, 36, 54, 55]
let evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers);

// filter by greater than
var numLarge = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// find words that begin with 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var filteredWords = words.filter(function(word) {
    return /^s/.test(word);
});
console.log(filteredWords)

// ARROWS
// ###########################
// square using anonymous function
var int = [1,2,3,4,5];
var doubled = int.map(num => num * 2);
console.log(doubled)

// sort
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// another sort
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);

// append reverse to a sort (need help)
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort.reverse((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);

// SLICING
// #######################################
// slice on the index
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

// slice the first three words
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice3 = words.slice(0,3)
console.log(slice3)

// slice the end of the array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice3 = words.slice(3, )
console.log(slice3)
