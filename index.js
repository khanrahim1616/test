// 1.Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

//  var num=0;
//  if(num%3==0){
//  console.log("Number is  divisible by 3")
//  }
//  else{console.log("Number is not divisible by 3")
//  }

//  2. Write a program that checks whether the given input is an even
//  number or an odd number.

// let numCheck = false;
//  do {
//  var spec = prompt("write a Number you will get a answer that number is");
//  if (!isNaN(spec) && spec > 0) {
//  numCheck = true;
//  if (spec % 2 == 0) {
//  document.write(spec + " is a even number");
//  } else {
//  document.write(spec + " is a odd number");
//  }
//  } else {
//  alert("Please write a number or  positive number");}}while(numCheck === false);

//  var hour = 19;
// if (hour < 18) {
//   greeting = "Good day";// let numCheck = false;
//  do {
//  var spec = prompt("write a Number you will get a answer that number is");
//  if (!isNaN(spec) && spec > 0) {
//  numCheck = true;
//  if (spec % 2 == 0) {
//  document.write(spec + " is a even number");
//  } else {
//  document.write(spec + " is a odd number");
//  }
//  } else {
//  alert("Please write a number or  positive number");}}while(numCheck === false);
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// }

// // // If the variable age is equal and greater than 18, output "you are eligible to vote",
// otherwise output "you are not eligible to vote".
//  var age = 17;// let numCheck = false;
//  do {
//  var spec = prompt("write a Number you will get a answer that number is");
//  if (!isNaN(spec) && spec > 0) {
//  numCheck = true;
//  if (spec % 2 == 0) {
//  document.write(spec + " is a even number");
//  } else {
//  document.write(spec + " is a odd number");
//  }
//  } else {
//  alert("Please write a number or  positive number");}}while(numCheck === false);
//  if (age >= 18) {
//    console.log("you are eligible to vote");
//  } else {
//    console.log("you are not eligible to vote");
//  }

//  11. Write a program that adds an else statement to the following
//  script to display “You are not Fahad”

//  var firstName = "ali";
//  if (firstName === "Fahad") {
//  console.log("Hello Fahad");
//  } else {
//  console.log("You are not Fahad");
//  }

// 12. This if/else statement does not work. Try to fix it:
// var hour = 19;
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// }

// // "ARRAYS"

// 3. Declare and initialize a strings array.
// var string =["hello world","how are you"]
// string.forEach(function(value){
//          console.log(value)
//      })
// number.forEach(function(value){
//          console.log(value)
//      })

// 5. Declare and initialize a boolean array.
// var boolean =[false, true]
// boolean.forEach(function(value){
//          console.log(value)
//      })

// 6. Declare and initialize a mixed array.
// var mixedarray =[0,-0,null,true, false ,1,2,3,4,5,"hello world","how are you"]
// mixedarray.forEach(function(value){
//          console.log(value)
//      })

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.
// var availablemobilenetworksinPakistan=['Jazz','Zong','Telenor','Warid','Ufone']
// availablemobilenetworksinPakistan.forEach(function(value){
//          console.log(value)
//      })Avengers:Age of ultron

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browserlike:
// var availableeducationqualificationsinPakistan =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// console.log("qualifications:")
// availableeducationqualificationsinPakistan.forEach(function(value,index){
//     console.log(index + 1 + ') ' + value)
// })

// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
// var topmoviesof2015 =[]
// topmoviesof2015.push('Avengers:Age of ultron')
// topmoviesof2015.push('Spectre')
// topmoviesof2015.push('Jurassic world')
// topmoviesof2015.push('Inside out')
// topmoviesof2015.forEach(function(value, index){
//     console.log(index + 1 + ') ' + value)
// })
// console.log("length of the array :" + topmoviesof2015.length)

// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array
// var car=['Audi','Volvo','Ford','Lamborghini']
// console.log('First index of the array: ' + car.indexOf('Audi'))
// console.log('Car at first index of the array: ' + car[0])
// console.log('Last index of the array: ' + car.indexOf('Lamborghini'))
// console.log('Car at first index of the array: ' + car[3])

// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assumespec
// that total marks are 500 for each student, display the scores &
// percentages of students like;
// var students =['Michael','John','Tony'];
// var score    =[320,230,480];
// for(var i=0;i<students.length;i++)[
// document.write('score of ' + students[i] +' is '+ score[i] +'.Percentage; '+score[i]*100/500+'% <br/>')
// ]

// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var colors =['red','blue','yellow'];
// colors.unshift('purple');
// console.log(colors)
// var colors =['red','blue','yellow'];
// colors.push('purple');
// console.log(colors)
// var colors =['red','blue','yellow'];
// colors.unshift('purple','green');
// console.log(colors)
// var colors =['red','blue','yellow'];
// console.log(colors)
// console.log(colors.pop())
// console.log(colors)
// var colors =['red','blue','yellow'];
// console.log(colors)
// console.log(colors.shift())
// console.log(colors)

// // 13. Write a program to store student scores in an array & sort
// // the array in ascending order using Array’s sort method.
// var studentsscore =[320,230,480,120]
// console.log(studentsscore)
// console.log(studentsscore.sort())

// // 14. Write a program to sort the below mentioned array:
// var fruits = ["strawberry", "apple", "orange", "banana"];
// console.log(fruits)
// console.log(fruits.sort())

// // 15. Write a program to initialize an array with city names. Copy
// // 3 array elements from cities array to selectedCities array.
// var citieslist = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// const values = citieslist.filter((item) => {
//   if (item === "quetta" || item === "islamabad") {
//     return item;
//   }
// });
// console.log(values);

// // 16. Write a program to create a single string from the below
// // mentioned (Use array’s join method)
// var arr = ["This" , " is" , " my ", "cat"];
// console.log(arr)
// console.log(arr.join(''))

// 17.Create a new array. Store ues one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
// var devices=['Keyboard','Mouse','Printer','Monitor']
// console.log("Devices:")
// console.log('Keyboard,','Mouse,','Printer,','Monitor,')
// devices.forEach(function(value){
//     console.log('Out:')
//     console.log(value)
// })

// 18. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)
// var devices=['Keyboard','Mouse','Printer','Monitor']
// console.log("Devices:")
// console.log('Keyboard,','Mouse,','Printer,','Monitor,')
// devices.reverse()
// devices.forEach(function(value){
//   console.log('Out:')
//       console.log(value)
//   })

// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var matrix=[[],[],[]]

// 21. Declare and initialize a multidimensional array representing
// the following matrix:

// var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(var i=0;i<matrix.length;i++){
// var result="";
//   for(var j=0;j<matrix[i].length;j++){
//     result=result+matrix[i][j]+" "
//   }
//   console.log(result)
// }

// "Functions"

// 4.Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// var spec =Number(prompt('Enter any number '))
// var spec1 =Number(prompt('Enter any number '))
// console.log(spec)
// function sum(a,b){
//     var total=a+b;
//     console.log(total)
//     document.write(total)
// }
// sum(spec,spec1)

// USER INPUT & CONDITIONAL STATEMENTS

// 1. Write a program that takes input a name from user & greet the
// user like this:
// var promp=prompt("Please enter your name")
// if (!isNaN(promp) || promp === "") {
//     alert("Please type alphabet")
// }else{
//     alert("Hi " + promp)
// }

//2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.
// var promp = prompt("Please type a number", 5);
// for (let i = 1; i <= 10; i++) {
//   document.write(`${promp}  *  ${i}  =  ${promp * i} <br/>`);
// };

// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”
// var promp = prompt("Enter your city name");
// if (promp==="karachi") {
//     alert("Welcome to city of lights")
// }else{
//     alert("Its not your city")
// }

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.
// var promp = prompt("Enter your city name");
// if (promp==="male") {
//     alert("Good Morning Sir.")
// }else if(promp==="female"){
//     alert("Good Morning Ma,am.")
// }else if (promp==="") {
//     alert("please enter your gender")
// }else{
//     alert("please enter your gender")
// }

//5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:

// var promp = prompt("Enter color of road traffic signal");
// promp = promp.toLowerCase()
// if (promp==="") {
//         alert("please enter color of signals")
// }else if (promp==="red") {
//     alert("vehicles must stop")
// }else if (promp==="yellow" ) {
//     alert("vehicles should get ready to move")
// }else if (promp==="green") {
//     alert("vehicles can move now")
// }else{
//     alert("You can only enter signal colours")
// }

// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show
// the message “You are welcome”

// var promp1 = prompt("Enter max age");
// var promp = prompt("Enter your age");
// if (promp==="") {
//         alert("please enter age")
// }else if(isNaN(promp) || isNaN(promp1)){
//     alert("please enter a number")
// }else if (promp<=promp1) {
//     alert("You are welcome")
// }else{
//     alert("You are not able to come")
// };

// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”
// var promp = +prompt("Enter a fuel in your car");
// if (promp=="") {
//     alert("Please enter a number")
// }else if(isNaN(promp)){
//     alert("please enter a number")
// }else if (promp===0.25) {
//     alert("Please refill the fuel in your car")
// };

// 8. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:

// var promp1 = +prompt("Enter first subject marks");
// var promp2 = +prompt("Enter second subject marks");
// var promp3 = +prompt("Enter third subject marks");
// if (promp1 == "") {
//   alert("plz enter marks");
// }
// var marksobtained = promp1 + promp2 + promp3;
// var totalmarks = 300;
// var result = marksobtained * 100 / totalmarks;
// if (isNaN(promp1) || isNaN(promp2) || isNaN(promp3)) {// promp = promp.toLowerCase()

//   alert("its not a number plz enter a number")
// }
// else if (result >= 80) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:A-one; <br/> Remarks:Excellent`
//   );
// }else if (result >= 70) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:A; <br/> Remarks:Good`
//   );
// }else if (result >= 60) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:B; <br/> Remarks:You need to improve`
//   );
// }else if (result < 60) {
//   document.write(
//     `Total marks; ${totalmarks} <br/> Marks obtained;${marksobtained} <br/> Percentage;${result} <br/> Grade:Fail; <br/> Remarks:SORRY`
//   );
// };

// 10. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.

// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// samajh nahi aya
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var random = Math.ceil(Math.random() * 10);
// while (promp !== random) {
//     var promp =  +prompt("Enter a number  between 1 to 10");
//   if (promp > 10 || promp < 1) {
//     alert("enter a number between 1 and 10");
//   } else if (promp > random) {
//     alert("its greater than our random number");
//   } else if (promp < random) {
//     alert("its less than  our random number");
//   } else if (isNaN(promp)) {
//     alert("Not a number");
//   } else {
//     alert("Bingo! Correct answer");
//   }
// }


// 12. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.
// var promp = +prompt("Enter a number to check that number is divisible by 3");
// if (isNaN(promp) || promp=="") {
//   alert("Plz enter a number");
// } else if (promp % 3 == 0) {
//   alert("Number is  divisible by 3");
// }  else {
//   alert("Number is not divisible by 3");
// };


// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)
// var team1=prompt("name of  Team one");
// var score1=prompt("score of  Team one")
// var team2=prompt("name of  Team two");
// var score2=prompt("score of  Team two")
// if (team1=="" || score1=="" || team2=="" || score2=="") {
//   alert("plz type something")
// }else if (score1===score2) {
//   alert(`its a tie between team ${team1} and ${team2}`)
// }else if(score1>score2){
//   alert(`team ${team1} won the game`)
// }else if(score2>score1){
//   alert(`team ${team2 } won the game`)
// }


// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :
// var promp=prompt("enter something to check typeOf")
// alert(`${promp} is a ${typeof(promp)}`)


// 15. Write a program that checks whether the given input is an
// even number or an odd number.
// var promp=prompt("the given number is an even number or an odd number");
// if (isNaN(promp) || promp=="") {
//   alert("plz enter a number")
// }else if (promp%2===0) {
//   alert(`${promp} is a even number`)
// } else{
//   alert(`${promp} is not a even number`)
// }

// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var promp=prompt("enter a temprature greater than 10 to check weather");
// if (isNaN(promp) || promp=="") {
//   alert("plz enter a number")
// }else if (promp>40) {
//   alert("It is too hot outside")
// }else if (promp>30) {
//   alert("The Weather today is Normal")
// }else if (promp>20) {
//   alert("Today’s Weather is cool")
// }else if (promp>10) {
//   alert("OMG! Today’s weather is so Cool")
// };


// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var promp1=+prompt("first number")
// var promp2=+prompt("second number")
// var promp3=prompt("operator")
// var  mult= promp1*promp2;
// var  plus= promp1+promp2;
// var  divide= promp1/promp2;
// var  reminder= promp1%promp2;
// var  minus= promp1-promp2;
// if (isNaN(promp1) || isNaN(promp1) ) {
// alert("plz enter a number")   
// if (promp3==="*") {
//   alert(`${promp1} * ${promp2} is ${mult}`)
// }else if (promp3==="+") {
//   alert(`${promp1} + ${promp2} is ${plus}`)  
// }else if (promp3==="/") {
//   alert(`${promp1} / ${promp2} is ${divide}`)  
// }else if (promp3==="%") {
//   alert(`${promp1} % ${promp2} is ${reminder}`)  
// }else if (promp3==="-") {
//   alert(`${promp1} - ${promp2} is ${minus}`)  
// }
// }


// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

// var promp=prompt("day name (enter full name) ")
// promp=promp.toLowerCase()
// if (promp=="" || !isNaN(promp)) {
//     alert("plz enter a day")
// }else if (promp==="monday" || promp==="tuesday" || promp==="wednesday" || promp==="thursday" || promp==="friday"
// ) {
//   alert("It’s a week day")
// }else if(promp==="saturday"){
//   alert("It’s weekend")
// }else if(promp==="sunday"){
//   alert("Yay! It’s a holiday")
// };


// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

// var promp=prompt("day name (enter full name) ")
// if (promp=="" || isNaN(promp)) {
//         alert("plz enter a score")
// }else if()


















