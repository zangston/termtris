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
board[0]    = "\n\r";
board[1]    = "                <! . . . . . . . . . .!>    SCORE\n\r";
board[2]    = "                <! . . . . . . . . . .!>    \n\r";
board[3]    = "                <! . . . . . . . . . .!>\n\r";
board[4]    = "                <! . . . . . . . . . .!>    LEFT/RIGHT: Move piece\n\r";
board[5]    = "                <! . . . . . . . . . .!>    X: Rotate clockwise\n\r";
board[6]    = "                <! . . . . . . . . . .!>    Z: Rotate counterclockwise\n\r";
board[7]    = "    NEXT        <! . . . . . . . . . .!>    Down: Soft drop\n\r";
board[8]    = "                <! . . . . . . . . . .!>    Space: Hard drop\n\r";
board[9]    = "                <! . . . . . . . . . .!>    Shift: Hold piece\n\r";
board[10]   = "                <! . . . . . . . . . .!>\n\r";
board[11]   = "                <! . . . . . . . . . .!>\n\r";
board[12]   = "                <! . . . . . . . . . .!>\n\r";
board[13]   = "    HOLD        <! . . . . . . . . . .!>\n\r";
board[14]   = "                <! . . . . . . . . . .!>\n\r";
board[15]   = "                <! . . . . . . . . . .!>\n\r";
board[16]   = "                <! . . . . . . . . . .!>\n\r";
board[17]   = "                <! . . . . . . . . . .!>\n\r";
board[18]   = "                <! . . . . . . . . . .!>\n\r";
board[19]   = "                <! . . . . . . . . . .!>\n\r";
board[20]   = "                <! . . . . . . . . . .!>\n\r";
board[21]   = "                <! . . . . . . . . . .!>\n\r";
board[22]   = "                <!====================!>\n\r";
board[23]   = "                  \\/\\/\\/\\/\\/\\/\\/\\/\\/\\/";

/**
 * Main function for running the game
 * @param {*} xterm - xterm instance
 */
function main(xterm) {
    updateScreen(xterm, board);
}

/**
 * Prints new game-state/board-snapshot to the terminal
 * @param {*} xterm - xterm instance passed from main function
 * @param {*} board - string array representing the tetris board
 */
function updateScreen(xterm, board) {
    for (let i = 0; i < board.length; i++) {
        xterm.write(board[i]);
    }
}