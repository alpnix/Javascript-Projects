// defining my own IndexOf function for nodeLists
function getIndex(iterable,element){
    var counter = 0
    for (var i of iterable){
        if (i == element){
            return counter
        }
        counter ++;
    }
}

// defining all the variables and constants 
var gameOver = false;
const turn = document.querySelector(".turn")
let player = document.querySelector(".turn span");
const blocks = document.querySelectorAll(".block");
const board = document.querySelector(".board");
const xMarks = document.querySelectorAll(".block h1:nth-child(1)");
const oMarks = document.querySelectorAll(".block h1:nth-child(2)");

// setting all the marks to hidden
for (const x of xMarks){
    x.style.display = "none"
}
for (const o of oMarks){
    o.style.display = "none"
}

// checking if some of the player has won
function checkWin(matrix){
    matrix = new Array([matrix[0].style.display,matrix[1].style.display,matrix[2].style.display],
                        [matrix[3].style.display,matrix[4].style.display,matrix[5].style.display],
                        [matrix[6].style.display,matrix[7].style.display,matrix[8].style.display])
    if (matrix[0][0] == "block" && matrix[1][0] == "block" && matrix[2][0] == "block"){
        setTimeout(function(){
            blocks[0].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[3].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[6].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over";
    }
    else if (matrix[0][0] == "block" && matrix[0][1] == "block" && matrix[0][2] == "block"){
        setTimeout(function(){
            blocks[0].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[1].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[2].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over";
    }
    else if (matrix[2][0] == "block" && matrix[2][1] == "block" && matrix[2][2] == "block"){
        setTimeout(function(){
            blocks[6].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[7].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[8].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over"; 
    } 
    else if (matrix[0][2] == "block" && matrix[1][2] == "block" && matrix[2][2] == "block"){
        setTimeout(function(){
            blocks[2].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[5].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[8].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over"; 
    } 
    else if (matrix[1][0] == "block" && matrix[1][1] == "block" && matrix[1][2] == "block"){
        setTimeout(function(){
            blocks[3].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[4].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[5].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over"; 
    } 
    else if (matrix[0][1] == "block" && matrix[1][1] == "block" && matrix[2][1] == "block"){
        setTimeout(function(){
            blocks[1].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[4].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[7].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over"; 
    } 
    else if (matrix[0][0] == "block" && matrix[1][1] == "block" && matrix[2][2] == "block"){
        setTimeout(function(){
            blocks[0].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[4].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[8].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over"; 
    } 
    else if (matrix[0][2] == "block" && matrix[1][1] == "block" && matrix[2][0] == "block"){
        setTimeout(function(){
            blocks[2].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[4].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";
            blocks[6].style.background = "radial-gradient(circle, white 25%,lightblue,transparent 45%)";    
        },400)
        gameOver = true;
        return "over";
    }
}

// looping over all of the blocks and adding them events
for (const block of blocks){
    block.addEventListener("click", displayMark)
    block.addEventListener("mouseover",previewMark)
    block.addEventListener("mousemove",previewMark)
    block.addEventListener("mouseleave",hidePreview)
}

// displaying the preview of the mark when mouse is over it
function previewMark(e){
    var index = getIndex(blocks,this);
    if (!gameOver){
        if (oMarks[index].style.display == "none" && xMarks[index].style.display == "none"){
            var playerMark = player.innerHTML;
            if (playerMark == "X"){
                xMarks[index].style.display = "flex";
                xMarks[index].style.opacity = "30%"
            }
            else if (playerMark == "O"){
                oMarks[index].style.display = "flex";
                oMarks[index].style.opacity = "30%"
            }
        }
    } else{
        for (const block of blocks){
            block.style.cursor = "auto";
        }
    }
}

// function for hiding the preview
function hidePreview(e){
    var index = getIndex(blocks,this);
    if (!gameOver){
        if (xMarks[index].style.opacity == 0.3 && xMarks[index].style.display == "flex"){
            xMarks[index].style.display = "none";
        }
        if (oMarks[index].style.opacity == 0.3 && oMarks[index].style.display == "flex"){
            oMarks[index].style.display = "none";
        }    
    }
}

// display each players mark when one of the blocks is clicked
function displayMark(e){
    var index = getIndex(blocks,this);
    if (!gameOver){
        if (!(oMarks[index].style.display == "block") && !(xMarks[index].style.display == "block")){
            var playerMark = player.innerHTML;
            if (playerMark == "X"){
                xMarks[index].style.opacity = "90%"
                xMarks[index].style.display = "block";
                xMarks[index].style.fontSize = "6rem"
                blocks[index].style.cursor = "auto"
                player.innerHTML = "O";
            }
            else if (playerMark == "O"){
                oMarks[index].style.opacity = "90%"
                oMarks[index].style.display = "block";
                oMarks[index].style.fontSize = "6rem";
                blocks[index].style.cursor = "auto"
                player.innerHTML = "X";
            }
            let result = checkWin(xMarks);
            if (result){
                turn.innerHTML = `X has won!`
            }
            result = checkWin(oMarks);
            if (result){
                turn.innerHTML = `O has won!`
            }
        }    
    } else{
        for (const block of blocks){
            block.style.cursor = "auto";
        }
    }
}