// Notes:
// camel case your variable names

// alert("YOLO!");        
// console.log("BAM!!!");
// prompt("PROMPT YO!");


// Fortune Teller (Excercise #1)
function tellFortune(jobTitle, location, partner, numKids) {
  var future = "You wll be a " + jobTitle + " in " + location +  " and married to " + partner + " with " + numKids + " kids"
  return future;
};

document.write(tellFortune("Entrepreneur", "Spain", "Aliya", 2));
document.write("</br><br>");



// Age Calculator (Exc #2)
function ageCal(currentYear, birthYear) {
  var age = "They are either " + (currentYear-birthYear) + " or " + (currentYear-birthYear+1) + " substituting the values"
  return age;
};

document.write(ageCal("2013", "1990"));
document.write("</br><br>");


// Lifetime Supply Calculator (Exc #3)
function lifeSupply(currentAge, maxAge, amountPerDay) {
  var supply = "You will need " + ((maxAge-currentAge)*365)*amountPerDay  + " to last you until the ripe old age of " + maxAge
  return supply;
};

document.write(lifeSupply("23", "100", "4"));
document.write("</br><br>");


// The Geometrizer
function circleProp(radius) {
  var circumference = "The circumference is " + ((3.142)*(radius*2))
  return circumference;
};

document.write(circleProp("4"));
document.write("</br><br>");

// The Temperature Converter
function tempConverter(celcius) {
  var convert = celcius + "C" + " is " + (celcius*(9/5)+32) + "F"
  return convert
};

document.write(tempConverter("1"));
document.write("</br><br>");


/*

//  Learing Functions

var myFunction = function(greeting) {
  return greeting;
};

var x = myFunction ("hello!");
console.log(x);
*/

/*// Do While loop
var num = 1;
do {
  num++;
  console.log(num); 
} while (num < 10);
*/

/*
// for loop
for (var i = 0; i <= 20; i++) {
  var evenOrOdd;
  if (i % 2 === 0) {
    evenOrOdd = "even";
  } else {
    evenOrOdd = "odd";
  }
  console.log(i + "is " + evenOrOdd);
};*/

/*
 // Excersize 1
var time = 12;
var x;

if (time < 11) {
  x = "Good morning!";
} else if (time < 20) {
  x = "Good day!";
}  
else {
  x = "Good evening!";  
};

document.write("<h1>" + x + "</h1>");
*/

/*
 // Excersize 2
var day = new Date().getDay();
var dayOfTheWeek;
switch (day) {
  case 0:
   dayOfTheWeek ="Today is Sunday";
    break;    // break stops execution without giving a value
     case 1:
   dayOfTheWeek ="Today is Monday";
    break;
     case 2:
   dayOfTheWeek ="Today is Tuesday";
    break;
     case 3:
   dayOfTheWeek ="Today is Wednesday";
    break;
     case 4:
   dayOfTheWeek ="Today is Thursday";
    break;
     case 5:
   dayOfTheWeek ="Today is Friday";
    break
     case 6:
   dayOfTheWeek ="Today is Saturday";
    break;

};

document.write("<h1>Today is " + dayOfTheWeek + ".</h1>")

*/

