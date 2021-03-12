import Pieza from './pieza.class';

const jugadaActual = ()=>{
fetch('http://127.0.0.1/chessjs/jugada001110321.json')
  .then(response => response.json())
  .then(data => {

    for( let mov in data.posicion.blancas){
       
            console.log(mov);
            console.log(data.posicion.blancas[mov])
      
        
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

/*
    let torreBlanca = new Pieza('torreBlanca','[1,1]', 'blanca',"I",'torreBlanca'); 
    let caballoBlanco = new Pieza('caballoBlanco','[1,2]', 'blanca','I','caballoBlanco'); 
    let alfilBlanco = new Pieza('alfilBlanco','[1,3]', 'blanca','I','alfilBlanco'); 
   
    let reinaBlanca = new Pieza('reinaBlanca','[1,4]', 'blanca'); 
    let reyBlanco = new Pieza('reyBlanco','[1,5]', 'blanca'); 
   
    let alfilBlancoII = new Pieza('alfilBlanco','[1,6]', 'blanca','II','alfilBlancoII');
    let caballoBlancoII = new Pieza('caballoBlanco','[1,7]', 'blanca','II','caballoBlancoII'); 
    let torreBlancaII = new Pieza('torreBlanca','[1,8]', 'blanca',"II",'torreBlancaII'); 

    for( let p = 1; p <= 8; p++){
        let peon = new Pieza('peonBlanco',"[2,"+p+"]", 'blanca','I',"peon"+1+","+p+"");
        document.getElementById(columnas[p]+"2").appendChild(peon.crearPieza());
    }
    

*/
/*
document.getElementById("A1").appendChild(torreBlanca.crearPieza());
document.getElementById("B1").appendChild(caballoBlanco.crearPieza());
document.getElementById("C1").appendChild(alfilBlanco.crearPieza());
document.getElementById("D1").appendChild(reinaBlanca.crearPieza());
document.getElementById("E1").appendChild(reyBlanco.crearPieza());
document.getElementById("F1").appendChild(alfilBlancoII.crearPieza());
document.getElementById("G1").appendChild(caballoBlancoII.crearPieza());
document.getElementById("H1").appendChild(torreBlancaII.crearPieza());

*/


