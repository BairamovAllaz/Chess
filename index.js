//TODO ALIGN DIV TO CENTER
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
InitVerticalLineCodes();

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

        let codeKeeperLeft = document.getElementById("CodeKepperLeft");
        let codeKeeperRight = document.getElementById("CodeKepperRight");
        let textKeeperLeft = document.createElement("div");
        let textKeeperRight = document.createElement("div");
        textKeeperLeft.style.width = (420 / numberCodes.length).toString();
        textKeeperLeft.style.height = "48px";
        textKeeperLeft.innerText = numberCodes[numberCodes.length - i - 1];
        textKeeperLeft.style.textAlign = "center";
        textKeeperLeft.style.marginTop = "6px";

        textKeeperRight.style.width = (420 / numberCodes.length).toString();
        textKeeperRight.style.height = "48px";
        textKeeperRight.style.textAlign = "center";
        textKeeperRight.style.marginTop = "6px"
        textKeeperRight.innerText = numberCodes[numberCodes.length - i - 1];
        board[i].lineCodeHorizontal = numberCodes[numberCodes.length - i];
        codeKeeperLeft.appendChild(textKeeperLeft);
        codeKeeperRight.appendChild(textKeeperRight);
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

function InitVerticalLineCodes()
{
    for (let i = 0;i < 2;++i)
    {
        for (let j = 0;j < board.length;++j)
        {
            if(i == 0)
            {
                let codeKeeper = document.getElementById("CodeKepperTop");
                let textKeeperRight = document.createElement("div");
                textKeeperRight.style.width = "65px";
                textKeeperRight.style.height = "30px";
                textKeeperRight.innerText = letterCodes[j];
                codeKeeper.appendChild(textKeeperRight);
            }else{
                let codeKeeper = document.getElementById("CodeKepperBottom");
                let textKeeperBottom = document.createElement("div");
                textKeeperBottom.style.width = "65px";
                textKeeperBottom.style.height = "30px";
                textKeeperBottom.innerText = letterCodes[j];
                codeKeeper.appendChild(textKeeperBottom);
            }
        }
    }
}

console.log(board);