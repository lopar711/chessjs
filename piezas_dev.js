import Pieza from './pieza.class';

var stockfish = STOCKFISH();

const jugada = "r3kr2/p1N2p1p/Bpn1pnpB/4P3/8/8/PPPN1PPP/R2QK2R b KQq - 0 14";
stockfish.postMessage("uci");
stockfish.postMessage("ucinewgame");
stockfish.postMessage("position fen " + jugada);
stockfish.postMessage("go depth 8");


console.log(stockfish)
stockfish.onmessage = function(event) {
//NOTE: Web Workers wrap the response in an object.
console.log(event.data ? event.data : event);

}
//https://www.chess.com/live/game/5517413860
const jugadaActual = ()=>{
fetch('http://127.0.0.1/chessjs/jugada110321_pos_inicial.json')
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




