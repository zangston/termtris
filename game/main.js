// Game board represented as an array of strings, one string per line
// Example board:
/*
                <! . . . .[] . . . . .!>    SCORE
                <! . . .[][][] . . . .!>    1,000,000
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>    LEFT/RIGHT: Move piece
                <! . . . . . . . . . .!>    X: Rotate clockwise
                <! . . . . . . . . . .!>    Z: Rotate counterclockwise
    NEXT        <! . . . . . . . . . .!>    Down: Soft drop
    [][][][]    <! . . . . . . . . . .!>    Space: Hard drop
                <! . . . . . . . . . .!>    Shift: Hold piece
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
    HOLD        <! . . . . . . . . . .!>
    [][]        <! . . . . . . . . . .!>
      [][]      <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                <! . . . . . . . . . .!>
                  \/\/\/\/\/\/\/\/\/\/
*/
var board = [];
board[0]    = "                <! . . . . . . . . . .!>    SCORE                        \n\r";
board[1]    = "                <! . . . . . . . . . .!>                                 \n\r";
board[2]    = "                <! . . . . . . . . . .!>                                 \n\r";
board[3]    = "                <! . . . . . . . . . .!>    LEFT/RIGHT: Move piece       \n\r";
board[4]    = "                <! . . . . . . . . . .!>    X: Rotate clockwise          \n\r";
board[5]    = "                <! . . . . . . . . . .!>    Z: Rotate counterclockwise   \n\r";
board[6]    = "    NEXT        <! . . . . . . . . . .!>    Down: Soft drop              \n\r";
board[7]    = "                <! . . . . . . . . . .!>    Space: Hard drop             \n\r";
board[8]    = "                <! . . . . . . . . . .!>    Shift: Hold piece            \n\r";
board[9]    = "                <! . . . . . . . . . .!>                                 \n\r";
board[10]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[11]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[12]   = "    HOLD        <! . . . . . . . . . .!>                                 \n\r";
board[13]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[14]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[15]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[16]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[17]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[18]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[19]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[20]   = "                <! . . . . . . . . . .!>                                 \n\r";
board[21]   = "                <!====================!>                                 \n\r";
board[22]   = "                  \\/\\/\\/\\/\\/\\/\\/\\/\\/\\/";


// Dictates speed at which board is printed line-by-line
var printSpeed = 50;

/**
 * Main function for running the game
 * @param {*} xterm - xterm instance
 */
async function main(xterm) {
    await startUpAnimation(xterm, board);
    //setTimeout(1200);
    // updateScreen(xterm, board);

    setTimeout(() => {
        const block = new Block(0, 1);
        console.log(block.x);
        console.log(block.y);

        console.log(board[block.x]);
        board[block.x] = setCharAt(board[block.x], 18 + block.x, "[");
        board[block.x] = setCharAt(board[block.x], 19 + block.x, "]");
        console.log(board[block.x]);

        updateScreen(xterm, board);
    }, 1600);
}

/**
 * Prints new game-state/board-snapshot to the terminal
 * @param {*} xterm - xterm instance passed from main function
 * @param {*} board - string array representing the tetris board
 */
function updateScreen(xterm, board) {
    
    xterm.write("\n\r");    // top margin line
    xterm.write("\n\r");    // top margin line

    for (let i = 0; i < board.length; i++) {
        xterm.write(board[i]);
    }

    xterm.write("\n\r");    // bottom margin line
}

/**
 * Prints new game-state/board-snapshot to the terminal with a loading effect
 * @param {*} xterm - xterm instance passed from main function
 * @param {*} board - string array representing the tetris board
 */
async function startUpAnimation(xterm, board) {
    xterm.write("\n\r"); // top margin line
    xterm.write("\n\r"); // top margin line

    let i = 0;

    function printLine() {
        if (i < board.length) {
            xterm.write(board[i]);
            i++;
            setTimeout(printLine, printSpeed); // Adjust the delay (in milliseconds) as needed
        } else {
            xterm.write("\n\r"); // bottom margin line
        }
    }

    printLine();
}

/**
 * 
 * @param {*} str 
 * @param {*} index 
 * @param {*} chr 
 * @returns 
 */
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}