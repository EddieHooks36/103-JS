  //let yourName = "Edward"
  //if(confirm("Are you "+ yourName + "?")){
  // console.log("Hello " + yourName);
  //}else{
  // console.log("Then what is your name?");
  // }

  // let number = 199;
  //if(number == 99){
  //console.log("The number is correct");
  //}else{
 //  console.log("The number is not correct");
 //}

//let num1 = Number (prompt ("Please enter number1:")); //Number() convert a string to a number
//let num2 = Number (prompt ("Please enter number2:"));

//console.log(num1,num2);

//if(num1 < num2){
 //console.log("num1 is smaller than num2");
//}else if(num2 < num1){
  //  console.log("Num1 is greater than num2");
//}else{
    //console.log("The numbers are equal");
//}

//let num1 = 1;
//let num2 = 2;
//let num3 = 3;
//let notTrue = false;//boolean (true or false)

//if(num1<num2 && num3>num2){
//0 console.log("num1 is smaller than num2 AND num3 is larger than num2");
//}
//if(num1 == 1 || num2 == 1 || num3 == 1){ // || means OR
//console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
//}
//if(!notTrue){ // ! NOT
// console.log("not not true is true!");
//}

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('Mangos and Papayas are $2.79 a ponud.');
      //expected output: "Mangos and Papayas are $2.79 a pound."
      break;
     default:
        console.log(`Sorry, we are out of ${expr}.`); 
}

let op = '+';
switch(op){
    case'+':
        console.log(1+1);
        break;
    case'-':
        console.log(1-1);
        break;
}

console.log("-----------Loop---------");

// loops
//brute force
//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//console.log(6);
//console.log(7);
//console.log(8);
//console.log(9);
//console.log(10);

//for loop
//start point ; stop condition ; increment
let database = ["Eddie","Jen", "Gavin"];
//i=i+1 is the same as i++
for(let i=0;i<=5;i+=1){
    console.log("test");
    document.write(`<p> ${i} ${database[i]} </p>`);
}

//document.write(`<p> ${0} ${database[0]} </p>);
//document.write(`<p> ${1} ${database[1]} </p>);
//document.write(`<p> ${2} ${database[2]} </p>);


for(let i=0;i<12;i=2){
    document.write(`<p> ${i} </p>`);
}