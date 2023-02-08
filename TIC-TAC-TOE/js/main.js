var turn = document.getElementById('turn');
var cells = document.querySelectorAll('.cell');
var result = document.getElementById('result');
let player1 = true;
let counter = 0;



function startGame(){
    cells.forEach(cell=>{
        cell.addEventListener("click",executeGame,{once:true});
    })
}

function executeGame(){
    if(player1){
        this.innerHTML = '<img src = "./images/x.png" class = "img"></img>';
    }else{
        this.innerHTML = '<img src = "./images/o.png" class = "img"></img>';
    }
    counter ++;

    let val1 = cells[0].innerHTML;
    let val2 = cells[1].innerHTML;
    let val3 = cells[2].innerHTML;
    let val4 = cells[3].innerHTML;
    let val5 = cells[4].innerHTML;
    let val6 = cells[5].innerHTML;
    let val7 = cells[6].innerHTML;
    let val8 = cells[7].innerHTML;
    let val9 = cells[8].innerHTML;

     if(
       (val1 != "" && val1 == val2 && val2 == val3) ||
       (val4 != "" && val4 == val5 && val5 == val6) ||
       (val7 != "" && val7 == val8 && val8 == val9) ||
       (val1 != "" && val1 == val4 && val4 == val7) ||
       (val2 != "" && val2 == val5 && val5 == val8) ||
       (val3 != "" && val3 == val6 && val6 == val9) ||
       (val1 != "" && val1 == val5 && val5 == val9) ||
       (val3 != "" && val3 == val5 && val5 == val7)
    ){
       if(player1 == true){
        result.innerText = 'PLAYER X WON';
        turn.innerText = '';
        setTimeout(resetGame, 2000);
        return;
        
       }else{
         result.innerText = 'PLAYER O WON';
         turn.innerText = '';
         setTimeout(resetGame, 2000);
         return;
       }
    }

    if(counter == 9){
        result.innerText = "TIE";
        turn.innerText = '';
        setTimeout(resetGame, 2000);
        return;
    }

    player1=!player1;

    if(player1){
        turn.innerText = 'Player X turn';
    }else{
        turn.innerText = 'Player O turn';
    }

}

function resetGame(){

    result.innerText = '';
    cells.forEach(cell=>{
        cell.innerText = "";
    })
    startGame();
    player1=true;
    counter = 0;

    turn.innerText = "Player X turn";
}

startGame();