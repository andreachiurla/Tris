 var game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var player = true; /* true: O false: X*/

function loadPlayer(){
    document.querySelector("#actual-player").innerHTML = "X";
}

function move(x_axis, y_axis){
    console.log(player);
    
    box = document.querySelector("#r" + x_axis + "c" + y_axis);
    
    if (game[x_axis - 1][y_axis - 1] !== 0){
        alert("Già usato");
    }else{
        if (player){
            box.classList.add("x");
            game[x_axis - 1][y_axis - 1] = 1;
            document.querySelector("#actual-player").innerHTML = "O";
        }else{
            box.classList.add("o");
            game[x_axis - 1][y_axis - 1] = 2;
            document.querySelector("#actual-player").innerHTML = "X";
        }
        player = !player;
        
        checked= checkWin();
        if (checked === 1){
            alert("Giocatore con X ha vinto");
        }else if (checked === 2){
            alert("Giocatore con O ha vinto");
        }
    }
}

function checkWin() {
    // Verifica righe e colonne
    for (let i = 0; i < 3; i++) {
        if (game[i][0] === game[i][1] && game[i][1] === game[i][2] && game[i][0] !== 0) {
            return game[i][0];
        }
        if (game[0][i] === game[1][i] && game[1][i] === game[2][i] && game[0][i] !== 0) {
            return game[0][i];
        }
    }
    // Verifica diagonali
    if ((game[0][0] === game[1][1] && game[1][1] === game[2][2] && game[0][0] !== 0) ||
        (game[0][2] === game[1][1] && game[1][1] === game[2][0] && game[0][2] !== 0)) {
        return game[1][1];
    }
    return 0; // Nessun tris trovato
}

function reload(){
    window.location.reload();
}