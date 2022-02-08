// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameToEvaluate = document.querySelector('.name');
var lastName = document.querySelector('.surname');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var form = document.querySelector(".form");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email


    //Evaluacion longitud del nombre usuario
    if(nameToEvaluate.value.length < 3){
        nameToEvaluate.style.border = '2px solid red';
        document.getElementById('#errorName').style.color = 'red';
    }else{
        console.log('Nombre correcto');
    }

    //Evaluacion longitud apellido
    if(lastName.value.length < 3){
        lastName.style.border = '2px solid red';
    }else{
        console.log('Apellido correcto');
    }

    //Evaluacion del mail
    if(email.value.length < 3){
        email.style.border = '2px solid red';
    }else{
        console.log('Email correcto');
    }
    
    //Evaluacion de la longitud del password
    if(password.value.length < 3){
        password.style.border = '2px solid red';
    }else{
        console.log('Password correcto');
    }

    //Evaluacion de la direccion 
    if(address.value.length < 3){
        address.style.border  = '2px solid red';
    }else{
        console.log('Direccion correcta');
    }

    //Evaluacion del numero de telefono
    if(phone.value > 0 && phone.value < 999999999){
        console.log('Telefono correcto');
        
    }else{
        console.log('Telefono incorrecto')
        phone.style.border = '2px solid red';
    }
}

//Codigo añadido
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validate();
})





