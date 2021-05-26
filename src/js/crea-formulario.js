const creaForm = ()=>{

    const divIngredientes = document.querySelector('.ingredientes')

    const html =`
        <form class="formulario" action="" id="miForm">
            <label class="etiqueta" name="nombre">Ingresa nombre: <br><input class="caja" type="text"></label>
            <br>
            <label class="etiqueta">Municipio: <br><input class="caja" type="text"></label>
            <br>
            <label class="etiqueta">Calle: <br><input class="caja" type="text"></label>
            <br>
            <label class="etiqueta">Número: <br><input class="caja" type="text"></label>
            <br>
            <label class="etiqueta">Teléfono: <br><input class="caja" type="text"></label>
            <div>
                <input type="submit" value="Confirmar"  class="boton-aceptar">
            </div>
        </form>
    `;
    const div = document.createElement('div'); 
    div.classList.add('divFormulario');
    
    div.innerHTML = html;

    document.getElementById('arma-pizza').replaceChild(div, divIngredientes); 

}

export{
    creaForm
}