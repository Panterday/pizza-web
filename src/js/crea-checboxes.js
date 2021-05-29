const creaBoxes = ()=>{
    const divFormulario = document.querySelector('.divFormulario')

    const html =`
            <label class="ingrediente"> 
                Aceitunas negras <input type="checkbox" class="miCaja" value=0>
            </label>
            <label class="ingrediente"> 
                Jalapeño <input type="checkbox" class="miCaja" value=1>
            </label>
            <label class="ingrediente"> 
                Piña <input type="checkbox" class="miCaja" value=2>
            </label>
            <label class="ingrediente"> 
                Aguacate <input type="checkbox" class="miCaja" value=3>
            </label>
            <label class="ingrediente"> 
                Peperoni <input type="checkbox" class="miCaja" value=4>
            </label>
    `;
    const div = document.createElement('div'); 
    div.classList.add('ingredientes');
    
    div.innerHTML = html;

    document.getElementById('arma-pizza').replaceChild(div, divFormulario); 
}

export{
    creaBoxes
}