import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

const gameBoard = document.getElementById('game-board')

let lastRenderTime = 0

requestAnimationFrame(main)

function main(currentTime){
    
    requestAnimationFrame(main)

    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()

}

function update(){
    
    updateSnake()

}

function draw(){
   
    drawSnake(gameBoard)

}