const drag = (ev)=>{
    ev.dataTransfer.setData("piezaId", ev.target.id);
    console.log(ev.target)
}

const drop = (ev)=>{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("piezaId");
    ev.target.appendChild(document.getElementById(data));
}

const allowDrop = (ev)=>{
    ev.preventDefault();
}