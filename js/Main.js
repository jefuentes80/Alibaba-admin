/* Incio de  sesión*/
/*let user = prompt("User: ");
let password = prompt("Password: ");

login(user,password);*/

/* Libreria temporal */
import {user} from "./user.js";

/* Algoritmo de inicio de sesión */

let user_input = 'carol.campbell@aol.com';
let pass = "1234";

for(let i = 0; i<=6;i++){

    /* Comprobación del username */
    if(user[i][1] === user_input){
        console.log("true username");
    }else if(user[i][5] === user_input){
        console.log("true email");
    }else {
        console.log("user false");
    }

}