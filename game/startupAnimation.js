/**
 * Prints new game-state/board-snapshot to the terminal with a loading effect
 * @param {*} xterm - xterm instance passed from main function
 * @param {*} board - array of strings representing the game board
 * @param {*} startupPrintSpeed - speed at which board is printed line-by-line
 */
async function startUpAnimation(xterm, board, startupPrintSpeed) {
    xterm.write("\n\r"); // top margin line
    xterm.write("\n\r"); // top margin line

    let i = 0;

    function printLine() {
        if (i < board.length) {
            xterm.write(board[i]);
            i++;
            setTimeout(printLine, startupPrintSpeed); // Adjust the delay (in milliseconds) as needed
        } else {
            xterm.write("\n\r"); // bottom margin line
        }
    }

    printLine();
}

// Expose the startUpAnimation function to the global scope
window.startUpAnimation = startUpAnimation;
