let inputslider = document.getElementById("inputslider");
let slidevalue = document.getElementById("slidevalue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let getBtn = document.getElementById("getBtn");

//below function for slide value
slidevalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=> {
    slidevalue.textContent = inputslider.value;
});


getBtn.addEventListener('click',() => {
    passBox.value = generatepassword();
});

let lowerchars= "abcdefghijklmnopqrstuvwxyz";
let upperchars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

// functions for generate password
function generatepassword(){
    let genpassword= "";
    let allchars ="";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? allnumbers : "";
    allchars += symbols.checked ? allsymbols : "";

    if(allchars == "" || allchars.length == 0){
        return genpassword
    }

    let i =1;
    while(i<=inputslider.value){
        genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }
     
    return genpassword;
}

