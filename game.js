class Game {

    size;   // 4x4
    board;
    final;

    constructor(){

        this.size = 4;
        this.board = Array(size).fill( Array(size).fill("") )
        this.final = false;

    }
}

const game = new Game();