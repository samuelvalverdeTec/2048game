//Erick Kauffmann Porcar
//Samuel Valverde Arguedas
//TC0

var game = null;
var fichaAct;
var tiempo = 600;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Ficha {

    numero;
    valores = [2,4];
    posX;
    posY;

    constructor() {



        this.posX = getRandomInt(4);    // 0 to 3
        //console.log("posX: " + this.posX);
        this.posY = 0;

        this.numero = this.valores[getRandomInt(2)];
        //console.log("numero ficha: " + this.numero);


    }

    keylisten() {



    }

}


function crearFicha(){
    const fichaAct = new Ficha();
    //console.log("numero en la ficha: " + fichaAct.numero);
    //console.log("posicion ficha: " + fichaAct.posX);    

    return fichaAct;
}

function modifFicha(ficha){
    casilla = document.getElementById("F" + ficha.posY + "C" + ficha.posX);
    if(ficha.numero == 2){
        casilla.style.backgroundColor = 'orange';
    }
    else{
        casilla.style.backgroundColor = 'red';
    }
    //casilla.style.backgroundColor = 'red';
    //casilla.classList.add('f' + ficha.numero);
    //casilla.classList.remove('casilla'); 
    casilla.innerHTML = ficha.numero;
    casilla = document.getElementById("F" + (ficha.posY -1) + "C" + ficha.posX);
    casilla.style.backgroundColor = 'rgb(163, 150, 150)';
    //casilla.classList.add('casilla');
    //casilla.classList.remove('f' + ficha.numero);
    casilla.innerHTML = null;
}


function check_pp() {

    if(!game.play_pause){
        texto.innerText = "PAUSE";
    } else {
        texto.innerText = "PLAY";
    }

}


//crearFicha();

class Game {

    size;   // 4x4
    board;
    gameOver;
    score;
    gameWon;
    boton;
    play_pause;
    sumaFichas;
    cantidadMovimientos;
    tiempo;
    maximo;
    //botonPlay;

    constructor(){

        this.fichaAct = crearFicha();
        this.size = 4;
        this.board = new Array(this.size + 1);
        for(var y = 0; y < this.size + 1; y++){
            this.board[y] = new Array(this.size);
            this.board[y].fill(0);
        }  //fill(Array(this.size).fill(0));
        this.gameOver = false;
        this.score = 0;
        this.gameWon = false;
        this.play_pause = true;
        this.boton = document.getElementById("header_pp");
        this.sumaFichas = 0;
        this.cantidadMovimientos = 0;
        this.tiempo = 0;
        this.maximo = 2048;
        //this.botonPlay = document.getElementById("play-pause");
        //this.botonPlay.style.backgroundColor = 'white';
        //this.boton.onclick = check_pp();    // event listener del click al boton
        //const texto = document.querySelector("#header_pp");
    }

    /*start() {

        const game = new Game();
        game.random();

        crearFicha();

    }*/

    agregarFicha(){
        this.board[this.fichaAct.posY][this.fichaAct.posX] = this.fichaAct.numero;
        this.sumaFichas += this.fichaAct.numero;
    }

    mostrarTablero(){
        var casilla;
        for(var y = 0; y < this.size +1; y++){
            for(var x = 0; x < this.size; x++){
                if(this.board[y][x] == this.maximo){
                    this.gameWon = true;
                }
                casilla = document.getElementById("F" + y +"C" + x);
                if(this.board[y][x] == 0){                   
                    casilla.style.backgroundColor = 'rgb(163, 150, 150)';
                    casilla.innerHTML = "";
                }
                else{
                    casilla.innerHTML = this.board[y][x];
                    if(this.board[y][x] == 2){
                        casilla.style.backgroundColor = 'rgb(213, 175, 126)';
                    }
                    else if(this.board[y][x] == 4){
                        casilla.style.backgroundColor = 'rgb(91, 131, 187)';
                    }
                    else if(this.board[y][x] == 8){
                        casilla.style.backgroundColor = 'rgb(136, 91, 187)';
                    }
                    else if(this.board[y][x] == 16){
                        casilla.style.backgroundColor = 'rgb(138, 182, 42)';
                    }
                    else if(this.board[y][x] == 32){
                        casilla.style.backgroundColor = 'rgb(182, 42, 131)';
                    }
                    else if(this.board[y][x] == 64){
                        casilla.style.backgroundColor = 'rgb(42, 154, 182)';
                    }
                    else if(this.board[y][x] == 128){
                        casilla.style.backgroundColor = 'rgb(188, 100, 5)';
                    }
                    else if(this.board[y][x] == 256){
                        casilla.style.backgroundColor = 'rgb(189, 95, 103)';
                    }
                    else if(this.board[y][x] == 512){
                        casilla.style.backgroundColor = 'rgb(182, 152, 42)';
                    }
                    else if(this.board[y][x] == 1024){
                        casilla.style.backgroundColor = 'rgb(42, 182, 147)';
                    }
                    else{
                        casilla.style.backgroundColor = 'rgb(182, 42, 42)';
                    }
                }
            }
        }

        var score = document.getElementById("score");
        var movimientos = document.getElementById("movimientos");

        score.innerHTML = this.sumaFichas;
        movimientos.innerHTML = this.cantidadMovimientos;
    }

    modifFichaPosY(){
        if(this.fichaAct.posY + 1 < this.size + 1){
            if((this.board[this.fichaAct.posY + 1][this.fichaAct.posX] == 0)||(this.board[this.fichaAct.posY + 1][this.fichaAct.posX] == this.board[this.fichaAct.posY][this.fichaAct.posX])){
                this.board[this.fichaAct.posY + 1][this.fichaAct.posX] += this.board[this.fichaAct.posY][this.fichaAct.posX];
                this.board[this.fichaAct.posY][this.fichaAct.posX] = 0;
                this.fichaAct.posY += 1;
                this.cantidadMovimientos += 1;
            } 
            else{
                if(this.fichaAct.posY != 0){
                    this.fichaAct = crearFicha();
                    this.agregarFicha();
                }
                else{
                    this.gameOver = true;
                    //alert("GAME OVER");
                }
            }   
        }
        else{
            this.fichaAct = crearFicha();
            this.agregarFicha();
        }
    }

    modifFichaIzq(){
        if(this.fichaAct.posX > 0){
            if((this.board[this.fichaAct.posY][this.fichaAct.posX - 1] == 0)||(this.board[this.fichaAct.posY][this.fichaAct.posX - 1] == this.board[this.fichaAct.posY][this.fichaAct.posX])){
                this.board[this.fichaAct.posY][this.fichaAct.posX - 1] += this.board[this.fichaAct.posY][this.fichaAct.posX];
                this.board[this.fichaAct.posY][this.fichaAct.posX] = 0;
                this.fichaAct.posX -= 1;
                this.cantidadMovimientos += 1;
                this.mostrarTablero();
            }
        }
    }

    modifFichaDer(){
        if(this.fichaAct.posX < this.size - 1){
            if((this.board[this.fichaAct.posY][this.fichaAct.posX + 1] == 0)||(this.board[this.fichaAct.posY][this.fichaAct.posX + 1] == this.board[this.fichaAct.posY][this.fichaAct.posX])){
                this.board[this.fichaAct.posY][this.fichaAct.posX + 1] += this.board[this.fichaAct.posY][this.fichaAct.posX];
                this.board[this.fichaAct.posY][this.fichaAct.posX] = 0;
                this.fichaAct.posX += 1;
                this.cantidadMovimientos += 1;
                this.mostrarTablero();
            }
        }
    }

    pause(){
        this.play_pause = false;
    }
    resume(){
        this.play_pause = true;
    }

}

function revisarFinal(){
    if((game.gameWon)||(game.gameOver)){
        return true;
    }
    else{
        return false;
    }
}

function moveFicha(ficha){
    game.modifFichaPosY(ficha);
}

function jugarFichas(){
    moveFicha(fichaAct);
    game.mostrarTablero();

    //moveFicha(fichaAct);

}

function revisarDificultad(){
    document.getElementById("facil").blur();
    document.getElementById("medio").blur();
    document.getElementById("dificil").blur();
    var facil = document.getElementById("facil").checked;
    var medio = document.getElementById("medio").checked;
    var dificil = document.getElementById("dificil").checked;

    if(facil){
        tiempo = 1000;
    }
    else if(medio){
        tiempo = 800;
    }
    else {
        tiempo = 600;
    }
}

function cicloJuego(){
    revisarDificultad();
    if(game.play_pause){
        jugarFichas();
    }
       
    if(! revisarFinal()){
        setTimeout(cicloJuego, tiempo);
    }
    else{
        if(game.gameOver){
            alert("GAME OVER");
        }
        if(game.gameWon){
            alert("GAME WON");
        }
    }

}

function contadorTiempo(){
    game.tiempo += 1;
    var tiempo = document.getElementById("tiempo");
    tiempo.innerHTML = game.tiempo + " s";
    setTimeout(contadorTiempo, 1000);
}

function start() {
    
    game = new Game();

    setTimeout(contadorTiempo, 1000);

    botonPlay = document.getElementById("play-pause");
    //botonPlay.style.backgroundColor = 'white';

    //game.random();
    

    //fichaAct = crearFicha();
    game.agregarFicha();
    game.mostrarTablero();
    setTimeout(cicloJuego, tiempo);

    //setTimeout(moveFicha(fichaAct), 5000);
    //fichaAct = crearFicha();
    /*while(fichaAct.posY != 4){
        setTimeout(5000);
        modifFichaPosY(fichaAct);
        modifFicha(fichaAct);
    }*/
    //modifFichaPosY(fichaAct);
    //modifFicha(fichaAct);
    /*while(true){        
        if(fichaAct.posY != 4){
            modifFichaPosY(fichaAct);
            modifFicha(fichaAct);
        }
        else{
            fichaAct = crearFicha();
        }
        setTimeout(2000);
    }*/
    

}

//start();


document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode == 13) {
    //alert("PAUSA");
    if(game.play_pause){
        game.boton.innerHTML = "RESUME";
        game.pause();
    }
    else{
        game.boton.innerHTML = "PAUSE";
        game.resume();
    }
  } 
  else if(keyCode == 37){
    game.modifFichaIzq();
  }
  else if(keyCode == 39){
    game.modifFichaDer();
  }
}

function start_pause(){
    //var boton = document.getElementById("header_pp");
    if(game == null){
        start();
        game.boton.innerHTML = "PAUSE";
    }
    else{
        if(game.play_pause){
            game.boton.innerHTML = "RESUME";
            game.pause();
        }
        else{
            game.boton.innerHTML = "PAUSE";
            game.resume();
        }
        //alert("PAUSA");
    }
}




//reactions();