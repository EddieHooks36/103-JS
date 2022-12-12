//global variables (database)
let dbUser = "admin@myamazon.com";
let dbPass = "sharedpass1234"
function login(){
    

    //get the name and pass from the users
    let username = prompt("Enter your username");
    let password = prompt("Enter your password");

    console.log(username,password);
    //comapre the name and pass with the database values
    if(username==dbUser){
           //display login success HTML
            document.getElementById("login-result"). innerHTML=`<h2 style="font-family:aerial;">Welcome to the admin site!</h2>`;
            
    }else{
        document.getElementById("login-result"). innerHTML=`<p class="alert-error">Invalid credentials. Please try again</p>`;
    }
}