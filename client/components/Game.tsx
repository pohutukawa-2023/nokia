import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// random number for food
function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Game() {
  const numRows = 30
  const numCols = 30
  const game = true
  const [grid, setGrid] = useState<number[][]>([])
  const [snake, setSnake] = useState<number[][]>([[0, 0]])
  const [direction, setDirection] = useState('right')
  //set food position
  const rowNumber = getRandomNumber(1, numRows)
  const columnNumber = getRandomNumber(1, numCols)
  const [food, setFood] = useState<number[][]>([[rowNumber, columnNumber]])

  const [score, setScore] = useState(0)

  const [secondsLeft, setSceondsLeft] = useState(60)

  //setting the grid
  useEffect(() => {
    const newGrid = []
    for (let i = 0; i < numRows; i++) {
      const row = []
      for (let j = 0; j < numCols; j++) {
        row.push(0)
      }
      newGrid.push(row)
    }
    setGrid(newGrid)
  }, [])

  //set timers
  useEffect(() => {
    if (secondsLeft <= 0) {
      alert('Game Over!')
      // game = false
    } else {
      const timeout = setTimeout(() => {
        setSceondsLeft(secondsLeft - 1)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [secondsLeft])

  // user input function

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault()

      switch (e.key) {
        case 'ArrowUp':
          setDirection('up')
          break
        case 'ArrowDown':
          setDirection('down')
          break
        case 'ArrowLeft':
          setDirection('left')
          break
        case 'ArrowRight':
          setDirection('right')
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    const moveSnakeInterval = setInterval(() => {
      const newSnake = [...snake]
      const [snakeRow, snakeCol] = newSnake[0]

      switch (direction) {
        case 'up': {
          if (snakeRow < numRows) {
            newSnake[0] = [snakeRow - 1, snakeCol]
          } else {
            newSnake[0] = [0, snakeCol]
          }
          break
        }
        case 'down': {
          if (snakeRow < numRows) {
            newSnake[0] = [snakeRow + 1, snakeCol]
          } else {
            newSnake[0] = [0, snakeCol]
          }
          break
        }
        case 'left': {
          if (snakeCol < numCols) {
            newSnake[0] = [snakeRow, snakeCol - 1]
          } else {
            newSnake[0] = [snakeRow, 30]
          }
          break
        }
        case 'right': {
          if (snakeCol < numCols) {
            newSnake[0] = [snakeRow, snakeCol + 1]
          } else {
            newSnake[0] = [snakeRow, 0]
          }
          break
        }

        default:
          break
      }

      setSnake(newSnake)
    }, 80)

    return () => {
      clearInterval(moveSnakeInterval)
    }
  }, [snake, direction])

  // // newfood funciton

  function generateFood() {
    const rowNumber = getRandomNumber(1, numRows)
    const columnNumber = getRandomNumber(1, numCols)
    setFood([[rowNumber, columnNumber]])
    setScore(score + 1)
  }

  const [snakeRow, snakeCol] = snake[0]
  const [foodRow, foodCol] = food[0]

  if (snakeRow === foodRow && snakeCol === foodCol) {
    generateFood()
  }

  return (
    <div>
      <h2>Main Gameplay Page</h2>
      <div>
        <h3>
          Score: {score} || Time: {secondsLeft}
        </h3>
      </div>
      <div>
        <table>
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`cell${
                      food[0][0] === rowIndex && food[0][1] === colIndex
                        ? 'Food'
                        : ''
                    }${
                      snake[0][0] === rowIndex && snake[0][1] === colIndex
                        ? 'Snake'
                        : ''
                    }`}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to={'/'}>
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  )
}

//getting a value  and console log from the table ??
console.log()
//

//

export default Game

// {if(rowNumber === snakeRow && columnNumber === snakeCol){
//   setFood(getRandomNumber(1, numRows), getRandomNumber(1, numCols))
// }}
