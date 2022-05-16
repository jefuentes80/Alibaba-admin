/* Descripción del algoritmo 
    La funcionalidad del algoritmo es la de evaluar el usuario ingresado 
    e indicar si se encontró el nombre de usuario o correo electrónico.

    PARAMETROS:
    - data: solicita la base de datos en que se busca la información
    - user: el usuario que se desea buscar en la base de datos.

    PROCEDIMIENTO:
    - for: recorre la matriz iniciando desde el 0 al 6
    - if: evalua el usuario ingresado con el indica [i][1], posición
      del username en la data.
    - else if: si el user name no existe se evalua el dato ingresado con el
      indice [i][5], posición del correo electronico.
    - else: inda que el dato ingresado no existe en la base de datos.
*/

/* Librería de componentes */
export var section_administrador = document.getElementById("section-administrador");
export var section_login = document.getElementById("section-login");

// Librería de usuario
import {user} from "./user.js";
import { adminstrador } from "./administrador.js";

// Función de verificación de credenciales
export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Ahora tienes acceso");
                adminstrador();
            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Usuario incorrecto");
        }
    }

}