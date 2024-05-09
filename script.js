var game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
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
        
        if (checkWin()){
            alert("QUALCUNO HA VINTO");
        }
    }
}

function checkWin(){
    let temp = 0;
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length - 1; j++) {
            if (game[i][j] === game[i][j + 1] && game[i][j] !== 0){
                temp++;
                if (temp === 3){
                    return true;
                }
            }
        }
    }
    temp = 0;
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[j].length - 1; i++) {
            if (game[i][j] === game[i + 1][j] && game[i][j] !== 0){
                temp++;
                if (temp === 3){
                    return true;
                }
            }
        }
    }
    
    return false;
}