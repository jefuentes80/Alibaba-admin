/* Elementos del dom */
import {section_administrador, section_login} from './login.js';

export function adminstrador(){
    alert('soy administrador');
    section_administrador.classList.add("activar-block");
    section_login.classList.remove("activar-flex");
}