// 'tasks from wasif'

// function minimum(){
//     let arr=[5,9,6,7,8,2,3]
//     let min = arr[0]
//     for(var i=0;i<arr.length;i++){
//             if(min>arr[i]){
//                 min=arr[i]
//             }
//     }
//     console.log(`The minimum value is `+min+'</br>')
// }
// minimum()

// function maximum(){
//     let arr=[5,9,6,7,8,2,3]
//     let max = arr[0]
//     for(var i=0;i<arr.length;i++){
//             if(max<arr[i]){
//                 max=arr[i]
//             }
//     }
//     console.log(`The maximum value is `+max)
//     // document.write(`The maximum value is `+max)
// }
// maximum()

// function minimum(){
//     let arr=[4,5,6,7,8,9];
//     let min=arr[0];
//     for(var i=0;i<arr.length;i++){
//         if(min>arr[i])
//         min=arr[i]
//     }
// console.log(min)
// }
// minimum()

// var promp =Number(prompt('Enter your subjects'))
// var arr =[]
// var total=0;
//     for(var i=0;i<promp;i++){
//     arr[i] = Number(prompt('Enter your subjects '+ (i+1) + ' marks '))
//     total += arr[i]
//     }
//     document.writeln(total+"<br />")
// document.write(total*100/(50*promp))

// var arr = [1,2,3,5,9,2,5]
// var total=0;
// for(var i=0;i<arr.length;i++){
//     total = total+arr[i]
// }
// console.log(total)

// var num = 1;
// while(num <=10){
//   table=8;
//     console.log(table + " x " +num+" = "+table*num);
//     num++;
// }

// var num =[2,4,5,6,8,]
// var newnum=num.filter((currElem)=>{
//     return currElem%2!==0
// })
// console.log(newnum)

// var newnum=num.map((curElem,index)=>{
//     return curElem*(index+1)
// })
// console.log(newnum)

// remove duplicates from an array using for loop

// let number = [1, 2, 3, 4, 2, 3, 8];
// let removedn = [];
// for (var i = 0; i < number.length; i++) {
//   if (removedn.indexOf(number[i]) === -1) {
//     removedn.push(number[i]);
//   }
// }
// console.log(removedn);

// const number = +prompt("Enter a positive number: ");
// let Prime = true;

// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }
//     if (Prime==true) {
//         document.write  (`${number} is a prime number`);
//     } else {
//         document.write  (`${number} is  not a prime number`);
//     }
// }
// else {
//     document.write  ("The number is not a prime number.");
// }

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// var numcheck= false;
// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// numcheck=true;
// break;
// }
// }
// if (numcheck==true) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not the cleanest city");
// }

// var time=21
// if (time < 10) {
//     greeting1 = "Good morning";
//     console.log(greeting1)
// } else if (time < 20) {
//     greeting2 = "Good day";
//     console.log(greeting2)
//   } else {
//     greeting3 = "Good evening";
//     console.log(greeting3)
//   }

// const number = prompt("Enter a positive number: ");
// let Prime = true;

// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }
//     if (Prime==true) {
//         document.write  (`${number} is a prime number`);
//     } else {
//         document.write  (`${number} is  not a prime number`);
//     }

// function isPrimeNum(num) {
//   for (let index = 2; index <num; index++) {
//     if (num % index == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// var user=+prompt("Enter a number")
// var arr=[]
// for (let index = 2; arr.length<user; index++) {
//     if (isPrimeNum(index)) {
//         arr.push(index)
//     }
// }
// document.write(arr)

// var num = 1;
// while(num <=10){
//   table=8;
//     console.log(table + " x " +num+" = "+table*num);
//     num++;
// }

// var num =[2,4,5,6,8,]

// var newnum=num.filter((currElem)=>{
//     return currElem%2!==0
// })
// console.log(newnum)

// var newnum=num.map((curElem,index)=>{
//     return curElem*(index+1)
// })
// console.log(newnum)

// remove duplicates from an array using for loop

// let number = [1, 2, 3, 4, 2, 3, 8];
// let removedn = [];
// for (var i = 0; i < number.length; i++) {
//   if (removedn.indexOf(number[i]) === -1) {
//     removedn.push(number[i]);
//   }
// }
// console.log(removedn);

// const number = +prompt("Enter a positive number: ");
// let Prime = true;

// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }
//     if (Prime==true) {
//         document.write  (`${number} is a prime number`);
//     } else {
//         document.write  (`${number} is  not a prime number`);
//     }
// }
// else {
//     document.write  ("The number is not a prime number.");
// }

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// var numcheck= false;
// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// numcheck=true;
// break;
// }
// }
// if (numcheck==true) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not the cleanest city");
// }

// var time=21
// if (time < 10) {
//     greeting1 = "Good morning";
//     console.log(greeting1)
// } else if (time < 20) {
//     greeting2 = "Good day";
//     console.log(greeting2)
//   } else {
//     greeting3 = "Good evening";
//     console.log(greeting3)
//   }

// const number = prompt("Enter a positive number: ");
// let Prime = true;

// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }
//     if (Prime==true) {
//         document.write  (`${number} is a prime number`);
//     } else {
//         document.write  (`${number} is  not a prime number`);
//     }

// function isPrimeNum(num) {
//   for (let index = 2; index <num; index++) {
//     if (num % index == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// var user=+prompt("Enter a number")
// var arr=[]
// for (let index = 2; arr.length<user; index++) {
//     if (isPrimeNum(index)) {
//         arr.push(index)
//     }
// }
// document.write(arr)

// var num = 1;
// while(num <=10){
//   table=8;
//     console.log(table + " x " +num+" = "+table*num);
//     num++;
// }

// var num =[2,4,5,6,8,]

// var newnum=num.filter((currElem)=>{
//     return currElem%2!==0
// })
// console.log(newnum)

// var newnum=num.map((curElem,index)=>{
//     return curElem*(index+1)
// })
// console.log(newnum)

// remove duplicates from an array using for loop

// let number = [1, 2, 3, 4, 2, 3, 8];
// let removedn = [];
// for (var i = 0; i < number.length; i++) {
//   if (removedn.indexOf(number[i]) === -1) {
//     removedn.push(number[i]);
//   }
// }
// console.log(removedn);

// const number = +prompt("Enter a positive number: ");
// let Prime = true;

// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }
//     if (Prime==true) {
//         document.write  (`${number} is a prime number`);
//     } else {
//         document.write  (`${number} is  not a prime number`);
//     }
// }
// else {
//     document.write  ("The number is not a prime number.");
// }

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// var numcheck= false;
// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// numcheck=true;
// break;
// }
// }
// if (numcheck==true) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not the cleanest city");
// }

// var time=21
// if (time < 10) {
//     greeting1 = "Good morning";
//     console.log(greeting1)
// } else if (time < 20) {
//     greeting2 = "Good day";
//     console.log(greeting2)
//   } else {
//     greeting3 = "Good evening";
//     console.log(greeting3)
//   }

// const number = prompt("Enter a positive number: ");
// let Prime = true;

// if (number === 1) {
//     document.write("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             Prime = false;
//             break;
//         }
//     }
//     if (Prime==true) {
//         document.write  (`${number} is a prime number`);
//     } else {
//         document.write  (`${number} is  not a prime number`);
//     }

// function isPrimeNum(num) {
//   for (let index = 2; index <num; index++) {
//     if (num % index == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// var user=+prompt("Enter a number")
// var arr=[]
// for (let index = 2; arr.length<user; index++) {
//     if (isPrimeNum(index)) {
//         arr.push(index)
//     }
// }
// document.write(arr)

// var a ='3'
// var b=1
// var c =6
// a+=a+b-c//"3"+(31-6)25
// console.log(a)
