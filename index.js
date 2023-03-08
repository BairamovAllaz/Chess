let board = [];
const letterCodes = ["A","B","C","D","E","F","G","H"];
const numberCodes = ["1","2","3","4","5","6","7","8"];


for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
        row.push(0);
    }
    board.push(row);
}

InitBoardPieces(board);
InitBoardToScreen(board);

function InitBoardPieces(board)
{
    let i;
    for (i = 0; i < 8; i++)
    {
        for (let j = 0; j < 8; j++)
        {
            if(i == 0 && i == 7)
            {
                let CodeElement = document.createElement("h1");
                CodeElement.innerText = board["A"];
                board[i][j].lineCodeVertical = "A";
            }
            if(i < 2 || i > 5)
            {
                board[i][j] = 1;
            }
        }
        board[i].lineCodeHorizontal = "88";
    }
}

function InitBoardToScreen(board)
{
    let isWhite = true;
    let boardDiv = document.getElementById("main");

    for (let i = 0; i < 8; i++)
    {
        let row = document.createElement("div");

        row.style.width = "500px";
        row.style.height = "50px";
        row.style.border = "solid 1px black";
        row.style.display = "flex";
        let side = 0;

        for (let j = 0; j < 8; j++)
        {
            let column = document.createElement("div");
            column.style.width = "65px";
            column.style.height = "50px";
            column.innerText = board[i][j];
            if(isWhite)
            {
                if(side % 2 == 0)
                {
                    column.style.backgroundColor = "black";
                }
            }else{
                if(side % 2)
                {
                    column.style.backgroundColor = "black";
                }
            }
            row.append(column);
            side++;

        }
        isWhite = isWhite ? false : true;
        boardDiv.append(row);
    }
}
console.log(board);