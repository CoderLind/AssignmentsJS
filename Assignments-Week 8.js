//Write a program that capitalizes the first letter of each word in a string.

//let str = 'strings are immutable in javascript';
//let words = str.split(' ');
//for (let i = 0; i < words.length; i++) {
//    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//}
//let capitalizedStr = words.join(' ');
//console.log(capitalizedStr); 

console.log("==========================================================");

//const namesArr = ["roronoa zoro", "vinsmoke sanji", "tony tony chopper", "gold roger"];
//let initialsArr = [];
//for (let i = 0; i < namesArr.length; i++) {
//    let initials = namesArr[i][0].toUpperCase() + namesArr[i][namesArr[i].indexOf(' ') + 1].toUpperCase();
//    initialsArr.push(initials);
//}
//console.log(initialsArr); // Outputs: ["RZ", "VS", "TTC", "GR"]


console.log("==========================================================");

 //const today = new Date();
 //const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
 //if (dayOfWeek === 0 || dayOfWeek === 6) {
 //  console.log('Today is the weekend.');
 //} else {
 //  console.log('Today is not the weekend.');
 //}

 console.log("==========================================================");

//  const today = new Date();
//  const daysOfWeek = [
//     "Sunday", 
//     "Monday", 
//     "Tuesday", 
//     "Wednesday", 
//     "Thursday", 
//     "Friday", 
//     "Saturday"];
//  const monthsOfYear = [
//     "January", 
//     "February", 
//     "March", 
//     "April", "May", 
//     "June", "July", 
//     "August", 
//     "September", 
//     "October", 
//     "November", 
//     "December"];
​
//  const showDay = daysOfWeek[today.getDay()];
//  const showMonth = monthsOfYear[today.getMonth()];
​
​
//  console.log(`Day is: ${showDay} - Month is: ${showMonth} `)

 console.log("==========================================================");


const regex = /^[A-Z]{2} [0-9]{3} [0-9]{3}$/;
console.log(regex.test("AG 124 234")); 
console.log(regex.test("ZH 783 499"));