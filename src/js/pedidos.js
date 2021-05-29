export let contador = 1;
let idCajas = 1;

import { creaBoxes } from './crea-checboxes';
import {nuevaListaIng, nuevaIng, añandeIngrediente} from './funciones'
import { eliminaTarjeta } from './tarjetas';

const muestraPedidos = ()=>{
    
    const btnConfirm = document.getElementById('btnConfirm');  
    btnConfirm.addEventListener('click', (e)=>{
        const form = document.forms['miForm'];
        const cuadros = document.getElementById('cuadros-pedidos'); 
        let ingrediente = nuevaIng.join(', '); 

        if(ingrediente == ''){
            ingrediente = 'ingredientes tradicionales'
        }

        let html = `
            <h3>Pedido ${contador++}</h3>
            <p>Pizza con ${ingrediente}. </p>
            <h3>Datos</h3>
            <p>Pedido de ${form.nombre.value}, Municipio: ${form.municipio.value}, Calle: ${form.calle.value}, Número: ${form.numero.value}, Teléfono: ${form.telefono.value}</p>
            <button class="btnEnviado">Enviada</button>
        `;
        
        const div = document.createElement('div'); 
        div.classList.add('cuadro');
        
        div.innerHTML = html; 

        cuadros.appendChild(div);

        e.preventDefault(); 
        form.reset();
        
        //Llama otra vez los checkboxes
        /* creaBoxes(); */
        creaBoxes(); 
        document.querySelector('#botonAceptar').style.display = 'inline'; 

        //Refresca la imagen de la pizza
        const divIzq = document.querySelector('#cont-izq'); 
        for(let x of document.querySelectorAll('.ing')){
            divIzq.removeChild(x); 
        }

        //Refresca arreglo de ingredientes
        nuevaListaIng([]);
        
        //Refresca listeners
        añandeIngrediente();

        eliminaTarjeta(); 
         
    }) 

    const inputs = document.querySelectorAll('.caja');
    let flags = [];
    let desabilita; 
    for(let input of inputs){
        flags.push(false)
    } 
    for(let i=0; i<inputs.length; i++){
        inputs[i].addEventListener('input', ()=>{
            if(inputs[i].value != ''){
                flags[i] = true; 
            }else{
                flags[i] = false; 
            }
            for(let flag of flags){
                if(!flag){
                    desabilita = false; 
                    break; 
                }else{
                    desabilita = true; 
                }
            }
            if(desabilita){
                btnConfirm.disabled = false; 
            }else{
                btnConfirm.disabled = true; 
            }
        })
    }
}

export{
    muestraPedidos
}