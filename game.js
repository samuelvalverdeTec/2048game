/*class Ficha {

    numero;
    valores = [2,4];

    constructor() {

        const index = Math.random();    // 0 o 1
        this.numero = valores[index];   // 2 o 4

    }

}

class Game {

    size;   // 4x4
    board;
    final;

    constructor(){

        this.size = 4;
        this.board = Array(size).fill(Array(size).fill(0));
        this.final = false;
    }

    start() {

        const game = new Game();
        game.random();

    }

}
*/

    const GRID_SIZE = 4;
    var canvas;
    var grid;
    var gameOver;
    var score;
    var gameWon;

    reactions();

function keyPressed() {
    if (!gameOver && !gameWon) {
        switch (keyCode) {
            case UP_ARROW:
                verticalSlide(keyCode);
                updateGrid();
                break;
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
    else if (keyCode === ENTER) {
        if (gameWon) {
            location.reload();
        }
        else {
            location.reload();
        }
    }
}

function reactions() {

    // agregar funcionalidad a botones y agregar key listeners

    document.querySelector("#")

}