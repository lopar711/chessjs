class Pieza{
    

    constructor(tipo, pos, color){
        this.tipo = tipo;
        this.pos = pos;
        this.color = color;
    }

    crearPieza(){
        let piezaContenedor = document.createElement('div');
        piezaContenedor.classList.add('pieza');
        piezaContenedor.style.backgroundImage ="url(assets/"+this.tipo+".fw.png)";
        //piezaContenedor.setAttribute("ondrop", 'drop(event)');
        //piezaContenedor.setAttribute("ondragover","allowDrop(event)");
        piezaContenedor.setAttribute("draggable","true");
        piezaContenedor.setAttribute("ondragstart","drag(event)");
      
        return piezaContenedor;
    }
    colocarPieza(){

    }
}

export default Pieza;
