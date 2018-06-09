var name = 'Drew';
const states = 50;
var sum = 4 + 5;

// Checks whether name starts with letter after 'L'
if (name.charCodeAt(0) > 76) {
  alert('Back of Line!')
} else {
  alert('Next!')
};

// Alerts 'Hello World'
function sayHello() {
  alert('Hello World');
};
sayHello();


// Checks if age is greater than 21 to view page
function checkAge(name, age) {
  if (age < 21) {
    alert('Sorry ' + name + ', you aren\'t old enough to view this page!')
  }
};

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);


// Array of my favorite vegatables
var myFavVegs = ['squash', 'asparagus', 'tomatoes', 'peppers'];

// Uses loop to display my favorite vegetables to console
for (var i = 0; i < myFavVegs.length; i++) {
  console.log(myFavVegs[i]);
};

// Create array of 5 objects
var nameAge = [
  { name: 'Brandon', age: 32 },
  { name: 'Mariah', age: 26 },
  { name: 'Nathan', age: 19 },
  { name: 'Rachel', age: 27 },
  { name: 'Ryan', age: 18 }
];

// Loops through array to call checkAge function
for (var i = 0; i < nameAge.length; i++) {
  checkAge(nameAge[i].name, nameAge[i].age);
};

// Create function that checks length of the string
function getLength(word){
  return word.length;
}

let wordLength = getLength('HelloWorld');
if (wordLength % 2 == 0) {
  console.log('This world is nice and even!');
} else {
  console.log('This world is an odd place!');
};