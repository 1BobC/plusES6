// Section 18: More ES6 Features
// #148. Spread & Rest

//rest parameter
const double = (...nums) => {           //eg array of nums
    console.log(nums);
    document.getElementById('bob').innerHTML = 'the array looks like this: ' + nums;
    //do something soon
    return nums.map(num => num * 2);    
}
const result = double(9, 8, 7, 6, 9, 10, 55, 84);
console.log(result);
document.getElementById('bob1').innerHTML = 'the array elements have been doubled: ' + result;

//spread syntax - arrays
const people = ['june', 'shona', 'ben', 'freya', 'finn', 'kelly', 'shona' ];
console.log(...people);
document.getElementById('bob2').innerHTML = 'the people array elements are: ' + people;
const members = ['harry', 'josh', 'chloe', 'emma', ...people];
console.log(members);
document.getElementById('bob3').innerHTML = 'the members array elements are: ' + members;

//spread syntax - objects
const person = {name: 'bob', ages: 0, job: 'front end'};
console.log(person);
// return person;   //what syntax should I use?
document.getElementById('bob4').innerHTML = 'the person object elements are: ' + person;
const  personClone = {...person, location: 'Scotland', town: 'Gourock'};
console.log(personClone);
// return personClone;    //what syntax should I use?
document.getElementById('bob5').innerHTML = 'the personClone array elements are: ' + personClone;

// #149. Sets - like arrays (sort of) but don't allow duplicates!
const namesArray = ['Mike', 'Bob', 'Lindsay', 'Ben', 'Scott', 'Bob'];
console.log(namesArray);
document.getElementById('bob6').innerHTML = 'the names in the namesArray are: ' + namesArray;

 const nameSet = new Set(['Mike', 'Bob', 'Lindsay', 'Ben', 'Scott', 'Bob']);
// const nameSet = new Set(namesArray);        //two ways of creating the new Set
 console.log(nameSet);
//document.getElementById('bob6').innerHTML = 'the names in the nameSet are: ' + nameSet;

//so... to create an array fith no duplicates we can create a new Set and then...
//... using spread syntax...
// const uniqueNames = [...nameSet];  
//and now in one step...
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);
document.getElementById('bob7').innerHTML = 'the names in the uniqueNames set are: ' + uniqueNames;

//arrays and sets have different methods - see console
const ages = new Set();
ages.add(20);
ages.add(35).add(55).add(55).add(65).add(75);  //can do this with .has() below
ages.delete(75);

console.log(ages);
document.getElementById('bob8').innerHTML = 'the ages in the ages array are: ' + ages;

//arrays and sets have different properties - see console
console.log(ages.size);
document.getElementById('bob8').innerHTML = 'the length of the ages set (using ages.size) is: ' + ages.size;
console.log(ages.has(35));
document.getElementById('bob9').innerHTML = ' the ages set (using ages.has(35)) is: ' + ages.has(35);
console.log(ages.has(75));
document.getElementById('bob10').innerHTML = 'the ages set (using ages.has(75)) is: ' + ages.has(75);
//to clear the set:
console.log(ages.clear);
document.getElementById('bob11').innerHTML = "clearing the set with ages.clear gives: null and doesn't show"; //ages.clear gives null and doesn't show

//demonstrate the for each on a set
const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32}
  ]);
  
  ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
    document.getElementById('bob12').innerHTML = 'cycling through the set with forEach ends with: ' + (ninja.name, ninja.age);
  });

  //#150. Symbols
    const symbolOne = Symbol('a generic name');
    const symbolTwo = Symbol('a generic name');

    console.log(symbolOne, typeof symbolOne);
    console.log(symbolOne === symbolTwo);


    const ninja = {};

    ninja.age = 30;
    ninja['belt'] = 'orange';
    ninja['belt'] = 'black';

    ninja[symbolOne] = 'ryu';
    ninja[symbolTwo] = 'shaun';

    console.log(ninja);
    document.getElementById('bob13').innerHTML = 'Similar symbols but they are unique: ' + ninja;
    console.log(ninja[symbolOne], ninja[symbolTwo]);
    document.getElementById('bob14').innerHTML = 'Similar symbols but they are unique: ' + ninja[symbolOne] + " " + ninja[symbolTwo];
