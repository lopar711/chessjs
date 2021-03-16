const drag = (ev)=>{
    ev.dataTransfer.setData("piezaId", ev.target.id);
    console.log(ev.target)
}

const drop = (ev)=>{
    ev.preventDefault();
   // console.log(ev.target.childNodes)
    var data = ev.dataTransfer.getData("piezaId");
    try{
        
        if(ev.target.parentNode.classList.contains("casilla")){
            acciones.comer(ev.target.parentNode, data)
        }else{
           acciones.mover(ev.target, data);
        }
    }
    catch(e){
        console.log("nada, mismo lugar")
    }
    
}

const allowDrop = (ev)=>{
    ev.preventDefault();
}
const noAllowDrop = (ev)=> {
   // ev.stopPropagation();
}