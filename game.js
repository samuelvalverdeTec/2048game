class Game {

    size;   // 4x4
    level;  // 0, 1 o 2 (facil, medio, dificil)
    board;
    final;

    constructor(){

        this.size = 4;
        this.board = Array(size).fill( Array(size).fill("") )
        this.final = false;
        //this.level = document.getElementsByClassName("radiobutton").
        /*if(this.level == null){

        } else {
            document.getElementById("header_play-pause").addEventListener('click', start());
        }*/

    }

    start() {

        const game = new Game();
        game.random();

    }

    random

    

}