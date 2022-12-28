
const totalScore = {AIScore: 0, playerScore: 0}
 

 function getAIChoice() {
    const rpsChoice =['Rock','Paper','Scissors']
const randomPick = Math.floor(Math.random() * 3)
return rpsChoice[randomPick]
}
 function getResult(playerChoice, AIChoice) {
    let score;

    if (playerChoice == AIChoice) {
        score = 0
    }else if (playerChoice == 'Rock' && AIChoice == 'Scissors'){
        score = 1
    }else if (playerChoice == 'Scissors' && AIChoice == 'Paper'){
        score = 1
    }else if (playerChoice == 'Paper' && AIChoice == 'Rock'){
        score = 1
    }else {
      score = -1
    }
    return score
}


function showResult(score, playerChoice, AIChoice) {
   
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    if (score == -1) {
    resultDiv.innerText ='You Lose!'
    }else if (score == 0){  
    resultDiv.innerText ='Draw!'
    }else{
    resultDiv.innerText ='You Win!'
    }
    handsDiv.innerText = `🧑 ${playerChoice} vs 🤖 ${AIChoice}`
    playerScoreDiv.innerText =`Your Score: ${totalScore['playerScore']} AI Score: ${totalScore['AIScore']}`
}

function onClickRPS(playerChoice){
console.log({playerChoice})
const AIChoice = getAIChoice()
console.log({AIChoice})
const score = getResult(playerChoice, AIChoice)
totalScore['playerScore'] += score
console.log({score})
console.log(totalScore)
showResult(score, playerChoice, AIChoice)
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
        rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS (rpsButton.value)
        })
    const endGAmeButton = document.getElementById('endGameButton')
    endGAmeButton.onclick =() => endGame(totalScore)
}

function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['AIChoice'] = 0
    
    const resultDiv = document.getElementById('result')
   const handsDiv = document.getElementById('hands')
   const playerScoreDiv = document.getElementById('player-score')

   resultDiv.innerText = ''
   handsDiv.innerText = ''
   playerScoreDiv.innerText = ''
}

 playGame()


                        