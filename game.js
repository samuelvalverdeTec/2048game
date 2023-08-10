function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Ficha {

    numero;
    valores = [2,4];
    posX;
    posY;

    constructor() {



        this.posX = getRandomInt(4) + 1;    // 0 o 1
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
    
    casilla = document.getElementById("F0C" + fichaAct.posX);
    casilla.style.backgroundColor = 'red';
    casilla.innerHTML = fichaAct.numero;
    

    return fichaAct;
}

function modifFicha(ficha){
    casilla = document.getElementById("F" + ficha.posY + "C" + ficha.posX);
    casilla.style.backgroundColor = 'red';
    casilla.innerHTML = ficha.numero;
    casilla = document.getElementById("F" + (ficha.posY -1) + "C" + ficha.posX);
    casilla.style.backgroundColor = 'rgb(163, 150, 150)';
    casilla.innerHTML = null;
}

function modifFichaPosY(ficha){
    ficha.posY = ficha.posY + 1;
}

function modifFichaPosX(ficha){
    //ficha.posX = ficha.posX + 1;
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
    //botonPlay;

    constructor(){

        this.size = 4;
        this.board = Array(this.size).fill(Array(this.size).fill(0));
        this.gameOver = false;
        this.score = 0;
        this.gameWon = false;
        this.play_pause = true;
        this.boton = document.querySelector("#play-pause");
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

}

function moveFicha(ficha){
    modifFichaPosY(ficha);
    modifFicha(ficha);
}

function start() {

    const game = new Game();

    botonPlay = document.getElementById("play-pause");
    //botonPlay.style.backgroundColor = 'white';

    //game.random();
    fichaAct = crearFicha();
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

start();

function keyPressed() {
    if (!gameOver && !gameWon) {
        switch (keyCode) {
            case DOWN_ARROW:
                verticalSlide(keyCode);
                updateGrid();
                break;
            case RIGHT_ARROW:
                horizontalSlide(keyCode);
                updateGrid();
                break;
            case LEFT_ARROW:
                horizontalSlide(keyCode);
                updateGrid();
                break;
        }
    }
}



//reactions();