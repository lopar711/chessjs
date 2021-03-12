import Pieza from './pieza.class';

const jugadaActual = ()=>{
fetch('http://127.0.0.1/chessjs/jugada110321_ruy_lopez.json')
  .then(response => response.json())
  .then(data => {

    for( let mov in data.posicion.blancas){
       
           // console.log(mov);
           // console.log(data.posicion.blancas[mov]);

            let pieza = new Pieza(mov,'[]', 'blanca','I',mov);
            document.getElementById(data.posicion.blancas[mov]).appendChild(pieza.crearPieza());
        
    }

    for( let mov in data.posicion.negras){
       
 // console.log(mov);
       // console.log(data.posicion.negras[mov]);

        let pieza = new Pieza(mov,'[]', 'negra','I',mov);
        document.getElementById(data.posicion.negras[mov]).appendChild(pieza.crearPieza());
    
    }
    console.log(data)
  });
}


jugadaActual();

const columnas = new Array();
columnas[1] = "A";
columnas[2] = "B";
columnas[3] = "C";
columnas[4] = "D";
columnas[5] = "E";
columnas[6] = "F";
columnas[7] = "G";
columnas[8] = "H";    




