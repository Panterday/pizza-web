import aceitunas from '../assets/aceitunas.png';
import aguacate from '../assets/aguacate.png';
import armaPizza from '../assets/armaPizza.png'; 
import jalapeño from '../assets/jalape.png';
import peperoni from '../assets/peper.png';
import piña from '../assets/piña.png';

import logoFacebook from '../assets/logos/logoF.png';
import logoPlayStore from '../assets/logos/logoPlayStore.png';
import logoTwitter from '../assets/logos/logoT.png';
import logoTel from '../assets/logos/logoTel.png';
import logoWhatsApp from '../assets/logos/logoW.png';
import { creaForm } from './crea-formulario';

let todosIngredientes = [aceitunas, jalapeño, piña, aguacate, peperoni];
let todosIngredientesTxt = ["aceitunas", "jalapeño", "piña", "aguacate", "peperoni"];

const contIzq = document.getElementById('cont-izq'); 
const divDer = document.querySelector('#arma-pizza');

const crearHTML = ()=>{
    console.log('inside of main')
    const logos = document.getElementById('logos');
    const llamanos = document.getElementById('llamanos'); 
    
    const img = document.createElement('img');
    const logoF = document.createElement('img');
    const logoT = document.createElement('img');
    const logoW = document.createElement('img');
    const logoMiTel = document.createElement('img');


    logoF.classList.add('logoF')
    logoF.setAttribute('src', logoFacebook);
    logoT.classList.add('logoF')
    logoT.setAttribute('src', logoTwitter);
    logoW.classList.add('logoF')
    logoW.setAttribute('src', logoWhatsApp);
    logoMiTel.classList.add('logoF')
    logoMiTel.setAttribute('src', logoTel);
    

    img.classList.add('pizzaImg')
    img.setAttribute('src', armaPizza);

    contIzq.append(img);
    logos.append(logoF);
    logos.append(logoT);
    logos.append(logoW);
    llamanos.append(logoMiTel);
}

const creaImagen = (nombre)=>{
    const imgIngrediente = document.createElement('img');
    imgIngrediente.setAttribute('src', nombre)
    imgIngrediente.classList.add('ing'); 
    return(imgIngrediente); 
}

//Eventos

const añandeIngrediente = ()=>{
    let listaCheckbox = document.querySelectorAll('.miCaja')
    let listaImg = []; 
    for(let x of listaCheckbox){
        listaImg.push(creaImagen(todosIngredientes[x.value]))
    }
    for(let x of listaCheckbox){
        x.addEventListener('change', ()=>{
            if(x.checked){
                contIzq.append(listaImg[x.value]);
            }else{
                contIzq.removeChild(listaImg[x.value]);
            }
        }) 
    } 
}


const eliminaDiv = ()=>{
    let nuevaIng = []; 
    const botonAceptar = document.querySelector('#botonAceptar');
    botonAceptar.addEventListener('click', ()=>{
        let listaCheckbox = document.querySelectorAll('.miCaja')
        for(let x of listaCheckbox){
            console.log(x.checked)
            if(x.checked){
                nuevaIng.push(todosIngredientesTxt[x.value])
            }
        }
        console.log(nuevaIng)
        botonAceptar.style.display  = 'none'; 
        creaForm();  
    }) 
}

export{
    crearHTML,
    añandeIngrediente,
    eliminaDiv
}