export class Pawn {
    positionY;

    constructor(positionY) {
        this.positionY = positionY;
    }

    Print(board,j)
    {
        board[this.positionY][j] = "p";
    }

}
