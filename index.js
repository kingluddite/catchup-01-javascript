console.log('###############');
console.log('#####Simple Data Types#####');

// data types
var name = 'John Doe';
var age = 40;
var isSoccerFan = false;

console.log(name); // John Doe
console.log(age); // 40
console.log(isSoccerFan); // false

console.log('###############');
console.log('#####Complex Data Types#####');
// more complex data types
// array
var friends = ['Manny', 'Moe', 'Jack'];
console.log(friends[0]);

// length of array
console.log('The length of the friends array is ' + friends.length);

// last element in an array
console.log(
  'The last element in the friends array is ' + friends[friends.length - 1]
);

// object
var angela = {
  name: 'Angela',
  age: 32,
  profession: 'Artist',
};
console.log(angela.profession);
