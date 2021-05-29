import { muestraPedidos } from "./pedidos";

const creaForm = ()=>{

    const divIngredientes = document.querySelector('.ingredientes')

    const html =`
        <form class="formulario" action="" id="miForm">
            <label class="etiqueta">Ingresa nombre: <br><input class="caja" type="text" name="nombre" placeholder="Nombre"></label>
            <br>
            <label class="etiqueta">Municipio: <br><input class="caja" type="text" name="municipio" placeholder="Municipio"></label>
            <br>
            <label class="etiqueta">Calle: <br><input class="caja" type="text" name="calle" placeholder="Calle"></label>
            <br>
            <label class="etiqueta">Número: <br><input class="caja" type="text" name="numero" placeholder="Número"></label>
            <br>
            <label class="etiqueta">Teléfono: <br><input class="caja" type="text" name="telefono" placeholder="Teléfono"></label>
            <div>
                <input type="submit" value="Confirmar"  class="boton-aceptar" id="btnConfirm" disabled = true>
            </div>
        </form>
    `;
    const div = document.createElement('div'); 
    div.classList.add('divFormulario');
    
    div.innerHTML = html;

    document.getElementById('arma-pizza').replaceChild(div, divIngredientes); 

    muestraPedidos(); 
}

export{
    creaForm
}