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
  const [grid, setGrid] = useState<number[][]>([])
  const [snake, setSnake] = useState<number[][]>([[0, 0]])
  const [direction, setDirection] = useState('right')
  //set food position
  const rowNumber = getRandomNumber(1, numRows)
  const columnNumber = getRandomNumber(1, numCols)
  const [food, setFood] = useState<number[][]>([[rowNumber, columnNumber]])

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
            newSnake[0] = [snakeRow, 0]
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
    }, 50)

    return () => {
      clearInterval(moveSnakeInterval)
    }
  }, [snake, direction])

  return (
    <div>
      <h2>Main Gameplay Page</h2>
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
