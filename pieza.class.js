class Pieza{
    

    constructor(tipo, pos, color, lado = null, id){
        this.tipo = tipo;
        this.pos = pos;
        this.color = color;
        this.lado = lado;
        this.id = id;
    }

    crearPieza(){
        let piezaContenedor = document.createElement('div');
        piezaContenedor.classList.add('pieza');
        piezaContenedor.style.backgroundImage ="url(assets/"+this.tipo+".fw.png)";
        piezaContenedor.setAttribute("id", this.id);
        piezaContenedor.setAttribute("draggable","true");
        piezaContenedor.setAttribute("ondragstart","drag(event)");
       // piezaContenedor.setAttribute("ondrop", "noAllowDrop(event)");
      
        return piezaContenedor;
    }
    colocarPieza(){

    }
}

export default Pieza;
