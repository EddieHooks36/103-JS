
//let = userName = "Edward"; prompt("Enter your name");//JS function
//let = userEmail = "eddie@gmail.com"; prompt("Enter your email
//let = userPassword = "seven";
//let = userAge = "33"; 
//let = userCountry = "US";
//let = monthlySalary = "$6200/month";

//console.log(userName,userEmail,monthlySalary);

//document.write(`
    //<p>user: ${userName}</p>
    //<p>Email: ${userEmail}</p>
    //<p>Salary: ${monthlySalary}</p>
    //`)
   
//console.log(userName,userEmail,monthlySalary);

//creating functions

//function declaration
function greeting(){
    //body of the function
    console.log("Hello");
    //alert("Hello");
    //document.write("Hello");
    return "Edward";
}
//gllobal variable
let global;

function sum(a,b){
    //loacl variable
    global="affected";
    return 10+10;
}
console.log (sum(10,50));
console.log(global);
//function expression

let displayValues = function(){
    console.log("Displaying values ...")
}
displayValues();

//arrow function
let traveling = country => "Traveling values ..." + country;

travel = traveling("Italy");
console.log(travel);

let total = 0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
}

  function calculateTaxes(){
    subtotal = addCart(2);

    let totalTax = subtotal * 1.11;

    document.getElementById("receipt").
    innerHTML=
    
        `<p>Subtotal = ${subtotal}</p>
        <p>Total = ${totalTax}</p>`;

}

 

  //total = addCart(2);
  //console.log(total);
  //total = addCart(2);
  //console.log(total);