const drag = (ev)=>{
    ev.dataTransfer.setData("piezaId", ev.target.id);
    console.log(ev.target)
}

const drop = (ev)=>{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("piezaId");
    try{
        ev.target.appendChild(document.getElementById(data));
    }
    catch(e){
        console.log("nada, mismo lugar")
    }
    
}

const allowDrop = (ev)=>{
    ev.preventDefault();
}