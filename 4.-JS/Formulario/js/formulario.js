const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const errorEmail = document.getElementById("emailError");
const errorPassword = document.getElementById("passwordError");


//EXPRESIONES REGULARES
const regexEmail = /\w+\@\w{3,7}\.com/;
const regexPassword = /\w{5}/;
//La contraseña debe comenzar con Mayuscula debe tener 5 digitos



//Validacion de correo
inputEmail.addEventListener("input", ()=>{
    if(regexEmail.test(inputEmail.value)){
        inputEmail.classList.remove("invalid");  
        errorEmail.style.display = "none";      
        inputEmail.classList.add("valid");//Verdadero 
        console.log("entre");
    }else{
        inputEmail.classList.remove("border-indigo-700");
        inputEmail.classList.add("invalid");//Falso        
        errorEmail.classList.add("block");      
    }

})

//Validacion de Contraseña 

inputPassword.addEventListener("input", ()=>{
    if(regexPassword.test(inputPassword.value)){
        inputPassword.classList.remove("invalid");
        errorPassword.style.display = "none";
        inputPassword.classList.add("valid");//Verdadero           
    }else{
        inputPassword.classList.remove("border-indigo-700");
        inputPassword.classList.add("invalid");//False
        errorPassword.classList.add("block");      
    }

})

//Validar envio de formulario 

document.getElementById("Formulario").addEventListener("submit", (event)=>{
    event.preventDefault(); //Prevenir que el formulario sea enviado con su config. predeterminada    
    if(!regexEmail.test(inputEmail.value) || !regexPassword.test(inputPassword.value)){
    alert("Por favor, rellene los campos correctamente");
    }else{
        alert("Formulario enviado");
    }
})