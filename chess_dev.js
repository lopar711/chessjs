//tablero
let tablero = document.getElementById('tablero');


let colorBool = true;
const columnas = new Array();
columnas[1] = "A";
columnas[2] = "B";
columnas[3] = "C";
columnas[4] = "D";
columnas[5] = "E";
columnas[6] = "F";
columnas[7] = "G";
columnas[8] = "H";

for(let x = 1; x <= 8; x++){

    let fila = document.createElement('div');
    fila.classList.add("columna");
    fila.setAttribute("data-columna",columnas[x]);

    for(let y = 1; y <= 8; y++){

    if(colorBool){
        let casilla = document.createElement('div');
        casilla.classList.add("casilla");
        casilla.setAttribute("data-pos","["+x+","+y+"]");
        casilla.setAttribute("data-color","negra");
        casilla.classList.add("casillaN");
        casilla.id = columnas[x]+""+y+"";
        fila.appendChild(casilla);
        colorBool = false;
    }else{
        let casilla = document.createElement('div');
        casilla.classList.add("casilla");
        casilla.setAttribute("data-pos","["+x+","+y+"]");
        casilla.setAttribute("data-color","blanca");
        casilla.classList.add("casillaB");
        casilla.id = columnas[x]+""+y+"";
        colorBool = true;
        fila.appendChild(casilla);
    }
    
    }//otro for
    tablero.appendChild(fila);
    if(colorBool){
        colorBool = false;
    }else{
        colorBool = true;
    }
}//for



