const rock = document.querySelector('.ellipse1')
const paper = document.querySelector('.ellipse2')
const container = document.querySelector('.container')
const scissor = document.querySelector('.ellipse3')
const heading = document.querySelector('.picked')
const pc = document.querySelector('.pc-value')
const user = document.querySelector('.user-value')
const pick = document.querySelector('.pick')
const element = document.querySelector('.element')
const result = document.querySelector('.re')
const res = document.querySelector('.res')
const housePick = document.querySelector('.house-pick')
const restartButton = document.querySelector('.restart')
const title = document.querySelector('.title')
const arr = ['rock', 'paper', 'scissor']
let randomNumber = Math.floor(Math.random() * 3)
function playRock() {
    title.classList.remove('hidden')
    restartButton.classList.remove('hidden')
    housePick.innerHTML = "THE HOUSE PICKED"
    element.classList.remove('hidden')
    if(arr[randomNumber] == "rock"){
        pc.value = "rock"
        element.classList.add('rock')
    }else if(arr[randomNumber] == "paper"){
        element.classList.add('paper')
        pc.value = "paper"
    }else if(arr[randomNumber] == "scissor"){
        element.classList.add('ellipse')
        pc.value = "scissor"
    }
    game(pc.value, user.value)
}
function game(pc, user){
    if(pc == "rock"){
        if(user == "rock"){
            result.innerHTML = "DRAW"
            res.value = "DRAW"
        }else if(user == "paper"){
            result.innerHTML = "YOU LOSE"
            res.value = "YOU LOSE"
        }else{
            result.innerHTML = "YOU WIN"
            res.value = "YOU WIN"
        }
    }else if(pc == "paper"){
        if(user == "rock"){
            result.innerHTML = "YOU WIN"
            res.value = "YOU WIN"
        }else if(user == "paper"){
            result.innerHTML = "DRAW"
            res.value = "DRAW"
        }else{
            result.innerHTML = "YOU LOSE"
            res.value = "YOU LOSE"
        }
    }else if(pc == "scissor"){
        if(user == "rock"){
            result.innerHTML = "YOU LOSE"
            res.value = "YOU LOSE"
        }else if(user == "paper"){
            result.innerHTML = "YOU WIN"
            res.value = "YOU WIN"
            
        }else{
            result.innerHTML = "DRAW"
            res.value = "DRAW"
        }
    }
}
rock.addEventListener('click', e => {
    user.value = "rock"
    heading.classList.remove('hidden')
    paper.classList.add('hidden')
    scissor.classList.add('hidden')
    rock.classList.add('position')
    pick.innerHTML = "YOU PICKED"
    housePick.innerHTML = "THE HOUSE IS CHOOSING..."
    setInterval(playRock, 1200)
    
})
paper.addEventListener('click', e => {
    user.value = "paper"
    heading.classList.remove('hidden')
    rock.classList.add('hidden')
    scissor.classList.add('hidden')
    paper.classList.add('position')
    pick.innerHTML = "YOU PICKED"
    housePick.innerHTML = "THE HOUSE IS CHOOSING..."
    setInterval(playRock, 1200)
})
scissor.addEventListener('click', e => {
    user.value = "scissor"
    heading.classList.remove('hidden')
    paper.classList.add('hidden')
    rock.classList.add('hidden')
    scissor.classList.add('position')
    pick.innerHTML = "YOU PICKED"
    housePick.innerHTML = "THE HOUSE IS CHOOSING..."
    setInterval(playRock, 1200)
})