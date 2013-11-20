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


// The Geometrizer (Exc #4)
function circleProp(radius) {
  var circumference = "The circumference is " + ((3.142)*(radius*2))
  return circumference;
};

document.write(circleProp("4"));
document.write("</br><br>");


// The Temperature Converter (Exc #5)
function tempConverter(celcius) {
  var convert = celcius + "C" + " is " + (celcius*(9/5)+32) + "F"
  return convert
};

document.write(tempConverter("1"));
document.write("</br><br>");




