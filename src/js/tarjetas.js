
const eliminaTarjeta = ()=>{
    const btnEnviado = document.querySelectorAll('.btnEnviado');
    for(let btn of btnEnviado){
        btn.onclick = function elimina(){
            btn.parentElement.remove(); 
        } 
    }
}

export{
    eliminaTarjeta
}