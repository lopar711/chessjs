import Pieza from './pieza.class';
const columnas = new Array();
columnas[1] = "A";
columnas[2] = "B";
columnas[3] = "C";
columnas[4] = "D";
columnas[5] = "E";
columnas[6] = "F";
columnas[7] = "G";
columnas[8] = "H"; 

var stockfish = STOCKFISH();

const SplitFen = (jugada) =>{

  let arrFen = jugada.split("/");
  let arrLastPosSplt = arrFen[7].split(" ");
  arrFen[7] = arrLastPosSplt[0];
  arrLastPosSplt.splice(0,1);
  return { fenPos: arrFen, gameMetadata: arrLastPosSplt};

}

const armarTableroJugada = (jugada)=>{
  
  let fenArr = SplitFen(jugada);
  console.log(fenArr.fenPos);
  let piezaPos = "A0";
  for (let i = 0; i < fenArr.fenPos.length; i++){
    
    if(i == 0){
      for(let c = 0 ; c < fenArr.fenPos[0].length; c++){
        console.log(fenArr.fenPos[0][c]);
        piezaPos = columnas[c+1]+"8";
        console.log(piezaPos);
        let pieza = new Pieza("torreNegra", "[]", "negra", "", piezaPos);
        document.getElementById(piezaPos).appendChild(pieza.crearPieza());
      }
      
    }
  }
}

const jugadaActual = ()=>{
fetch('http://127.0.0.1/chessjs/jagada_fem_test.json')
  .then(response => response.json())
  .then(data => {

    const fen = data.posicion.fen;
    const jugada = fen;
    stockfish.postMessage("uci");
    //stockfish.postMessage("ucinewgame");
    stockfish.postMessage("position fen " + jugada);
    stockfish.postMessage("go depth 6");
    armarTableroJugada(jugada);
    stockfish.onmessage = function(event) {
    //NOTE: Web Workers wrap the response in an object.
    //console.log(event.data ? event.data : event);
      
    let best_ponder = event.replace("bestmove","").replace("ponder","|").replace(/ /g,'');
    let movimientos = best_ponder.split("|");
      if(movimientos.length == 2){
        console.log(movimientos);
        
      }else{ movimientos = null }
    
    }
  });
}


jugadaActual();

    




