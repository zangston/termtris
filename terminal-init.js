function terminalInit(xterm) {
    xterm.open(document.getElementById('terminal'));
    xterm.resize(34, 22);
    xterm.write("\x1B[0;32m");   // Note: colors dictated by ANSI scheme: https://bixense.com/clicolors/ 
}
