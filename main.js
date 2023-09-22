//? Chapter No 17 - 20

//TODO Question No.01

// var multiArr=[[],[],[]];

//TODO Question No.02

// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(var i=0; i<3 ; i++){

//     document.write(arr[i] + "<br>");
    
// }

//TODO Question No.03

// for(var i=1; i<=10 ; i++){

//         document.write(i + "<br>");
        
//     }

//TODO Question No.04

// var num = +prompt("Enter a Number to show its Multiplication table");
// var length = +prompt("Enter Length Multiplication table");

// for(var i=1; i<=length ; i++){

//         document.write(num + " + " + i + " = " + num*i + "<br>");
        
//     }

//TODO Question No.05

// var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];

// for (var i=0; i<5 ; i++){

//     document.write(fruits[i] + "<br>");
        
// }

// for (var i=0; i<5 ; i++){

//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
        
// }

//TODO Question No.06

// // ! Counting

// document.write("<h1>Counting</h1>");

// var counting = 0 ;

// for(var i=counting ; i<15 ; i++){

//     document.write(i+1 + ",");

// }

// // ! Reverse Counting

// document.write("<h1>Reverse Counting</h1>");

// var reverse = 10 ;

// for(var i=reverse ; i>0 ; i--){

//     document.write(i + ",");

// }

// // ! Even

// document.write("<h1>Even</h1>");

// var even = 1 ;

// for(var i=even ; i<=10 ; i++){

//     document.write(i*2 + ",");

// }

// // ! Odd

// document.write("<h1>Odd</h1>");

// var odd = 1 ;

// for(var i=odd ; i<20 ; i++){

//     if(i%2==0) {
//         continue;
//     }

//     else {

//         document.write(i + ",");

//     }

// }

// // ! Series

// document.write("<h1>Series</h1>");

// var series = 2000 ;

// for(var i=series ; i<22000 ; i++){

//     if(i%2000 == 0) {

//         document.write(i + ",");

//     }

//     else {

//         continue;

//     }

// }

//TODO Question No.07

// var A = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];

// var food = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// for(i=0 ; i<5 ; i++){

//     if (food == A[i]){

//         document.write(food + " is available at index " + i + " in our bakery.");

//     }

// }

// if(food !== A) {
//     document.write("We are sorry." + food + " is not available in our bakery.");
// }

//TODO Question No.08

// var A = [24, 53, 78, 91, 12];

// var large = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > large) {
//     large = A[i];
//   }
// }
// document.write("Array Items : " + A + "<br>");
// document.write("The Largest number is " + large);

//TODO Question No.09

// var A = [24, 53, 78, 91, 12];

// var small = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < small) {
//     small = A[i];
//   }
// }
// document.write("Array Items : " + A + "<br>");
// document.write("The smallest number is " + small);

//TODO Question No.10

// for (var i = 1; i <= 100; i++) {

//     if (i % 5 === 0) {

//       document.write(i + ", ");

//     }

//   }

//? Chapter No 21 - 25

//TODO Question No.01

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");

// var fullName = firstName+ " " +lastName;

// alert("Assalamualaikum " + fullName);

// document.write("Assalamualaikum " + fullName);

//TODO Question No.02

// var modelName = prompt("Enter Your Favourite Mobile Phone Model");

// document.write("My Favourite Phone is : " + modelName + "<br>");
// document.write("Length of String : " + modelName.length);

//TODO Question No.03

// var string = "Pakistani";
// var letter = "n";
// var show = [];

// document.write("String : " + string  + "<br>");

// for(var i=0 ; i<string.length ; i++){

//     if(string.charAt(i) == letter){

//         show.push(i);

//     }

// }

// document.write("Index of 'n' : " + show.join(", "));

//TODO Question No.04

// var word = prompt("Write a Word");
// var lastIndex = word.lastIndexOf('l');

// if (lastIndex !== -1) {
//   document.write("The last 'l' in the word '" + word + "' is at index: " + lastIndex);
// } 

// else {
//   document.write("The letter 'l' was not found in the word.");
// }

//TODO Question No.05

// var string = "Pakistan";

// var thirdCharacter = string[2];
// document.write("The letter at the third character position is : " + thirdCharacter);

//TODO Question No.06

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");

// document.write("Assalamualaikum " + firstName+ " " +lastName);

//TODO Question No.07

// var originalString = "Hyderabad";
// var replacedString = originalString.replace(/Hyder/g, "Islam");

// document.write(replacedString);

//TODO Question No.08

// var originalString = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedString = originalString.replace(/and/g, "&");

// document.write(replacedString);

//TODO Question No.09 

// var str = "472";

// document.write("Value : " + str + "<br>");
// document.write("Type : " + typeof str + "<br>");

// var num = parseInt(str);

// document.write("Value : " + num + "<br>");
// document.write("Type : " + typeof num + "<br>");

//TODO Question No.10

// var text = "peanuts";
// var capital = text.toUpperCase();

// document.write(capital);

//TODO Question No.11

// var text = "javascript";

// var capitalizedInput = text.charAt(0).toUpperCase() + text.slice(1);

// document.write("Original input : " + text + "<br>");
// document.write("Capitalized input : " + capitalizedInput);

//TODO Question No.12

// var num = 123.45;

// var string = parseFloat(num.toString().replace(".", ""));

// document.write("Number : " + num + "<br>");

// document.write("Result : " + string);

//TODO Question No.13

// var username = prompt("Enter a username:");

// while (/[,@.!]/.test(username)) {
//   username = prompt("Please Enter a valid Username.");
// }

// document.write("Username : " + username);

//TODO Question No.14

// var snacks = ["cake" , "apple pie" , "cookies" , "chips" , "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// var userInputLowerCase = userInput.toLowerCase();
// var snacksLowerCase = snacks.map(snack => snack.toLowerCase());

// const snackIndex = snacksLowerCase.indexOf(userInputLowerCase);

// if (snackIndex !== -1) {
//     document.write(userInput + " is available at index " + snackIndex + " in our bakery." );
//   } 
//   else {
//     document.write("We are sorry. " + userInput + " is not available in our bakery.");
//   }

//TODO Question No.15

// var password = prompt("Enter a password:");

// do {
//     if(password.length >= 6 && /[a-zA-Z]/.test(password) && /^[^0-9]/.test(password) && /\d/.test(password)){
//         document.write("Enter Password : " + password)
//     }

//     else {
//         password = prompt("Password must contain alphabets and numbers, not start with a number, and be at least 6 characters long. Enter a valid password:");
//     }
// }

// while(!(password.length >= 6 && /[a-zA-Z]/.test(password) && /^[^0-9]/.test(password) && /\d/.test(password)));

//TODO Question No.16

// var university = "University of Karachi";

// var charArray = university.split("");

// for(var i=0 ; i<university.length ; i++){

//     document.write(charArray[i] + "<br>");

// }

//TODO Question No.17

// var string = "Pakistan";

// var lastCharacter = string[string.length-1];
// document.write("User Input : " + string + "<br>");
// document.write("Last Character of Input : " + lastCharacter);

//TODO Question No.18

// var string = "The quick brown fox jumps over the lazy dog";
// var lowercase = string.toLowerCase();
// var wordToCount = "the";
// var words = lowercase.split(" ");

// var count = 0;

// for (var word of words) {
//   if (word === wordToCount) {
//     count++;
//   }
// }

// document.write("The word '" + wordToCount + "' appears " + count + " times in the string.");







