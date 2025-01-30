
//--------- Selección de Elementos---------//
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnValidar = document.querySelector(".boton");//".btn-enviar"
const aviso = document.querySelector(".texto-aviso");

const correoRegex = /^[^@\s]+@[^\s]+\.[^\s]{1,4}$/;
const contraseñaRegex = /^.{5}$/;

//------- Validación -------//
btnValidar.addEventListener("click", e=>{
    e.preventDefault();
    let correo = email.value.trim();
    let contraseña = password.value.trim();
    
    if(!correo){
        mostrarAviso("Ingresa una dirección de correo válida");
    }
    else if(!correoRegex.test(correo)){
        mostrarAviso("Ingresa un correo electrónico válido");
    }
    else if(!contraseña){
        mostrarAviso("Ingresa una contraseña válida");
    }
    else if(!contraseñaRegex.test(contraseña)){
        mostrarAviso("Ingresa una contraseña válida debe contener 5 caracteres");
    }

    else {
         document.getElementById('formU').submit();
    }

});


function mostrarAviso(mensaje){
    aviso.style.color = "#FF2020";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;
    aviso.style.visibility = "inherit";
}

///---------------------------------------

