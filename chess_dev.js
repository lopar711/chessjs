let acciones = {

    comer : (casilla,data)=>{
        console.log(casilla);
        casilla.appendChild(document.getElementById(data));
            if(casilla.childNodes.length > 1){
                casilla.childNodes[0].remove();
            }
            
    },

    mover : (casilla, data)=>{
        casilla.appendChild(document.getElementById(data));
    }

}