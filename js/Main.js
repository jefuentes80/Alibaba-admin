
/* Librería de los programas */
import {login} from "./login.js"


/** 
    RECUPERACIÓN DE DATOS
    la función @recuperar_datos tiene las sigueintes funciones:
    - Evitar que la página se recargue con preventDefault
    - Recuperar el usuario ingresado en el input @username
    - Recuperar la contraseña del input @password
    - Ejecutar la función @login agregando como parámetros los datos
      recuperados.
    - La función es activada por el boton del formulario @login por
      medio de un evento de tipo submit.
*/
function recuperar_datos(e) {
    e.preventDefault(); //<-- Evita que el formulario se recargue

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    login(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('submit',recuperar_datos); //<-- Evento
