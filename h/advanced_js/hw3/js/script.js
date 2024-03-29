const cells = document.querySelectorAll(".cell")

const scoreText = document.querySelector(".score-text")

let playerScore = 0
let enemyScore = 0
let lastCell
let timeUp = false

function game(gameDiff) {
  const r = Math.floor(Math.random() * cells.length)

  function randomCell(cells) {
    const r = Math.floor(Math.random() * cells.length)

    const selectedCell = cells[r]

    if (
      selectedCell == lastCell ||
      selectedCell.classList.contains("red") ||
      selectedCell.classList.contains("green")
    ) {
      return randomCell(cells)
    }
    lastCell = selectedCell
    return selectedCell
  }
  //randomCell(cells)

  function gameRun(gameDiff) {
    const cell = randomCell(cells)
    cell.classList.add("blue")
    cell.addEventListener("click", active)

    function active() {
      cell.classList.remove("blue")
      cell.classList.add("green")
    }

    let cellFired = false
    setTimeout(() => {
      cell.classList.add("red")
      cell.classList.remove("blue")

      if (cell.classList.contains("red")) {
        enemyScore++
      }

      if (cell.classList.contains("green")) {
        cell.classList.remove("red")
        enemyScore--
        playerScore++
      }

      cell.removeEventListener("click", active)
      if (playerScore === 50 || enemyScore === 50) {
        timeUp = true
      }
      if (!timeUp) game(gameDiff)

      const playerScoreText = document.querySelector(".player-score")
      playerScoreText.textContent = `Your score: ${playerScore}  `
      scoreText.append(playerScoreText)

      const computerScore = document.querySelector(".computer-score")
      computerScore.textContent = `Enemy score: ${enemyScore}`

      scoreText.append(computerScore)
    }, gameDiff)
  }

  gameRun(gameDiff)
}

// Game modes

const easyBtn = document.querySelector(".easy")
easyBtn.addEventListener("click", () => {
  gameDiff = 2000
})
const mediumBtn = document.querySelector(".medium")
mediumBtn.addEventListener("click", () => {
  gameDiff = 1000
})
const hardBtn = document.querySelector(".hard")
hardBtn.addEventListener("click", () => {
  gameDiff = 500
})

const newGameBtn = document.querySelector(".new-game-btn")
newGameBtn.addEventListener("click", () => {
  game(gameDiff)

  // playerScore = 0
  // enemyScore = 0
})
