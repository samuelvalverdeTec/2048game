class Ficha {

    numero;
    valores = [2,4];

    constructor() {

        const index = Math.random();    // 0 o 1
        this.numero = valores[index];   // 2 o 4

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