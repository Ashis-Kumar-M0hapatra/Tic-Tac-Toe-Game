let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let theGameOver = false;

// Change the turn

const changeTurn = () => {
  if(turn === "X"){
    turn = "O"
  }else{
    turn = "X"
  }
}


// Check Win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let winner = wins.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won" 
        theGameOver = true;
        gameOver.play()
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        e.forEach(index => {
            boxtexts[index].parentElement.classList.add("winning-box");
        });

        }
    });
}


// Game run code

music.play()

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((e) => {
    let boxtext = e.querySelector('.boxtext')
    e.addEventListener('click', () => {
        if(boxtext.innerText === "" && !theGameOver){
            boxtext.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            if(!theGameOver){
                document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`
            }
        }
    })
})