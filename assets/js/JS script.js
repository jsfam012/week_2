// var name = 'JD';
// var address = '555 something st';
// var age = 44;

// var bobData = [99, 'Bob', '999 old street', 'another', true, ['one', 'two', [1, 2, 3]]];
// var bobName = bobData[0];

// var fruits = ['orange', 'apple', 'kiwi', 'grape'];

// var ex = Math.random;


var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`'];

var characterSet = [];

var password = '';
var passwordLength = 15;

var wantsLowercase = true;
var wantsUppercase = true;
var wantsNumbers =true;
var wantsSpecialCharacters = false;

function generatePassword() {

// If the user wants lowercase, then we combine the characterSet aray with the lowerCase array

if (wantsLowercase) {
    characterSet = characterSet.concat(lowercase);
}

if (wantsUppercase) {
    characterSet = characterSet.concat(uppercase);
}

if (wantsNumbers) {
    characterSet = characterSet.concat(numbers);
}

if (wantsSpecialCharacters) {
    characterSet = characterSet.concat(specialCharacters);
}

for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[ranIndex];
}
g
return password;

}

var pass = generatePassword();

var textBox = document.querySelector('textarea');

textBox.value = pass;


// console.log('completed password: \n\n', password);


// new code after generating password

// function someFunc() {
//     console.log('hi');
//     console.log('there');
// }

// someFunc();

// function add(a, b) {
//     // console.log(a + b)
//     return a + b;
// }

// var sum1 = add(5, 15);
// var sum2 = add(30, 75);

// console.log(sum1);
// console.log(sum2);


// var password = '';
// var passwordLength = 15;
// for (var count = 0; count < passwordLength; count++) {
//     var ranIndex = Math.floor(Math.random() * lowercase.length); 
//     password += lowercase[ranIndex];
// }




// var range = lowercase.length;
// var ranIndex = Math.floor(ranNum * range);

// console.log(rainIndex);

// var raiIndex = Math.floor(Math random() 8 lowercase.length);


// console.log(str);


// for (var index = 0; index < fruits.length; index ++){
//     console.log(index);
//     console.log(fruits[index]);
// }



// for (var count = 0; count < 6 ) {
   
   
   // console.log('hi');
// }
// 
// console.log(bobData[5][1][2]);

// var num = 2;
// var someStr = 'something'
// someStr = += tometi=thing


// console.log(num);




// var age = 20;
// var oldEnough = age >= 18;

// if (age > 3 && age < 13) {
//     console.log('You are not yet a teenager');
// }
// else if (age > 1 && age < 4) {
//     console.log('You are a toddler');
// }
// else if (age > 12 && age < 20) {
//     console.log('You are a teenager');
// }
// else {
//     alert('You do not meet any of the');
// }

// Can you build a calculator?
// var a = 5;
// var b = 10;
// var operator = '+';

// // Check if the operator is equal to a plus sign, and if it is, then console log the sum of a & b

// if (operator === '+') {
//     console.log(a+b);
// } else if (operator === '-') {
//     console.log(a-b)
// }






// var firstName = 'JD';
// var count = 5;
// var lastName = 'Ahn'
// var seanisawesome = true;
// var oldEnough = false;
// var nothing = null;
// var un = undefined;

// var sum = 10 + 5;

// var fullName = firstName + ' ' + lastName

// var mathOperators = '+, -, *, /, %';

// var isEven = count % 2 === 0;
// var greater = count > 0;
// var less = count < 0 ;


// var result = 100 <= 90;

// var same = 10 === '10';

// var strNum = '50';

// // Logical Comparison Operators
// var falsey = 0 || null || undefined || '' || false || NaN;
// var output1 = 0 || null || '' || false;

// var output2 = NaN && false && '';

// var result = oldEnough && 'You are old enough';

// console.log(!count);

// console.log(output1);
// console.log(typeof un);
// console.log(seanisawesome);
// console.log(oldEnough);

// console.log(firstName);

// console.log(5 + 5);

// console.log(firstName);

// console.log(count);

// console.log(count +7);

// console.log(firstName + ' ' + lastName);

// console.log('works!');