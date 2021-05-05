let randomNumber = 0
let userInput = 0

document.getElementById('submit').addEventListener('click', randomizer)

function randomizer () {
  userInput = document.getElementById('textbox').value
  userInput = parseInt(userInput)
  randomNumber = Math.random() * 6 * 1
  randomNumber = parseInt(randomNumber)
  if (userInput == randomNumber) {
    document.getElementById('answer').value = "Correct"
  }
  if (userInput != randomNumber) {
    document.getElementById('answer').value = "Incorrect"
  }
}