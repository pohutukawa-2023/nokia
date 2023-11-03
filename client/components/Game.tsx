import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Game() {
  const numRows = 30
  const numCols = 30
  const [grid, setGrid] = useState<number[][]>([])
  const [snake, setSnake] = useState<number[][]>([[5, 5]])

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
      const newSnake = [...snake]
      const [snakeRow, snakeCol] = newSnake[0]

      switch (e.key) {
        case 'ArrowUp':
          newSnake[0] = [snakeRow - 1, snakeCol]
          break
        case 'ArrowDown':
          newSnake[0] = [snakeRow + 1, snakeCol]
          break
        case 'ArrowLeft':
          newSnake[0] = [snakeRow, snakeCol - 1]
          break
        case 'ArrowRight':
          newSnake[0] = [snakeRow, snakeCol + 1]
          break
        default:
          break
      }
      setSnake(newSnake)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [snake])

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

export default Game
