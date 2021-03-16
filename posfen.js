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

const piezasFen = {
  "r" : "torreNegra",
  "n" : "caballoNegro",
  "b" : "alfilNegro",
  "q" : "reinaNegra",
  "k" : "reyNegro",
  "p" : "peonNegro",
  "R" : "torreBlanca",
  "N" : "caballoBlanco",
  "B" : "alfilBlanco",
  "Q" : "reinaBlanca",
  "K" : "reyBlanco",
  "P" : "peonBlanco"

}

var stockfish = STOCKFISH();


const crearPosFila = (fenPos, fila) =>{
  //console.log("fila =" + fila)
  let piezaPos = "A0";
  for(let c = 0 ; c < fenPos.length; c++){
   // console.log(fenPos[c]);
   piezaPos = columnas[c+1]+fila;
   //console.log(piezaPos)
    if(typeof piezasFen[fenPos[c]] === "string") {
      let pieza = new Pieza(piezasFen[fenPos[c]], "[]", "loquesea", "", fenPos[c]+""+piezaPos);
      document.getElementById(piezaPos).appendChild(pieza.crearPieza());
      
    }
   
  }
}

const SplitFen = (jugada) =>{

  let arrFen = jugada.split("/");
  let arrLastPosSplt = arrFen[7].split(" ");
  arrFen[7] = arrLastPosSplt[0];
  arrLastPosSplt.splice(0,1);
 
  for(let i = 0; i< arrFen.length; i++ ){
      arrFen[i] = arrFen[i].replaceAll(/[1]/g,"x").
      replaceAll(/[2]/g,"11").
      replaceAll(/[3]/g,"111").
      replaceAll(/[4]/g,"1111").
      replaceAll(/[5]/g,"11111").
      replaceAll(/[6]/g,"111111").
      replaceAll(/[7]/g,"1111111").
      replaceAll(/[8]/g,"11111111")
      ;
  }
  
  return { fenPos: arrFen, gameMetadata: arrLastPosSplt};

}

const armarTableroJugada = (jugada)=>{
  
  let fenArr = SplitFen(jugada);
  
  for (let i = 0; i < fenArr.fenPos.length; i++){
      crearPosFila(fenArr.fenPos[i], parseInt((i-8)) * -1);
  }
}

const jugadaActual = ()=>{
fetch('http://127.0.0.1/chessjs/jagada_150321_italiana.json')
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

    




