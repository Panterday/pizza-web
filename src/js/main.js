import '../styles.css';
import { añandeIngrediente, crearHTML, eliminaDiv } from './funciones';

const init = ()=>{
    crearHTML();
    añandeIngrediente(); 
    eliminaDiv();   
}

export{
    init
}