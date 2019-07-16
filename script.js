// proekts JS
// za login page


let login = document.getElementById("btn-log");
let errorMsg = document.getElementById("error-msg");

login.addEventListener("click", function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username != "sedc" && password != "sedc2019"){
        errorMsg.innerText = `Error: Please use valid input, check with office`; 
    } else{
    window.open('manage1.html','_blank');
    }
});



