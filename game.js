class Ficha {

    numero;
    valores = [2,4];
    posX;
    posY;

    constructor() {

        const index = Math.random();    // 0 o 1
        this.numero = valores[index];   // 2 o 4
        this.posY = 0;
        posXtemp = [0,0];
        const index2 = Math.random();
        const index3 = Math.random();
        posX1 = [1,2];
        posX2 = [3,4];
        posX1temp = posX1[index2];
        posX2temp = posX2[index3];
        posXtemp[0] = posX1temp;
        posXtemp[1] = posX2temp;
        const index4 = Math.random();
        this.posX = posXtemp[index4];


    }

    keylisten() {



    }

}

class Game {

    size;   // 4x4
    board;
    gameOver;
    score;
    gameWon;
    boton;
    play_pause;

    constructor(){

        this.size = 4;
        this.board = Array(size).fill(Array(size).fill(0));
        this.gameOver = false;
        this.score = 0;
        this.gameWon = false;
        this.play_pause = true;
        this.boton = document.querySelector("#play-pause");
        this.boton.onclick = check_pp();    // event listener del click al boton
        const texto = document.querySelector("#header_pp");
    }

    start() {

        const game = new Game();
        game.random();

        crearFicha();

    }

}


function crearFicha(){
    fichaAct = new Ficha();
    if(fichaAct.posX == 1){
        casilla = document.getElementById(F0C1);
        casilla.style.backgroundColor = 'red';
    }
    else if(fichaAct.posX == 2){
        casilla = document.getElementById(F0C2);
        casilla.style.backgroundColor = 'red';
    }
    else if(fichaAct.posX == 3){
        casilla = document.getElementById(F0C3);
        casilla.style.backgroundColor = 'red';
    }
    else {
        casilla = document.getElementById(F0C4);
        casilla.style.backgroundColor = 'red';
    }

}


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

function check_pp() {

    if(!game.play_pause){
        texto.innerText = "PAUSE";
    } else {
        texto.innerText = "PLAY";
    }

}

reactions();