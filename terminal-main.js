terminalMain() {
    var xterm = new Terminal();
    xterm.open(document.getElementById('terminal'));
    xterm.resize(34, 26);
    xterm.write("\x1B[0;32m");   // Note: colors dictated by ANSI scheme: https://bixense.com/clicolors/ 
}