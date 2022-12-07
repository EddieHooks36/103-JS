console.log("Script file");
var age=100;//Initialization and Assignation
let userName="Mike";
let taxes = 11.5;
const URL = "http://www/thisisprivateEndPoint/project";

console.log(age,userName,URL);//displaying the age, userName and URL


userName="Edward";//changing the userName and value
taxes=12;//changing the taxes value
console.log(userName,URL);//displaying the userName and URL

let numberOfChildren = 3;
let partnerName = "Jennifer";
let geoLocation = "Los Angeles";
let jobTitle = "IT Specialist";

console.log("I have" + numberOfChildren, "Married to" + partnerName,"I live" + geoLocation,"I am an IT Specialist" + jobTitle)

//Concatenation
document.write("<p>You will be a" + jobTitle + "in" + geoLocation + "and married to" + partnerName + "with" + numberOfChildren + "kids</p>");

//template string
document.write(`<p> You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren + 1} kids</p>`);