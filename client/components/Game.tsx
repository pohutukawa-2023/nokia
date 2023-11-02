import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Food from './Food'

// random number for food
function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Game() {
  const numRows = 10
  const numCols = 10

  const [grid, setGrid] = useState<number[][]>([])
  //set food position
  const rowNumber = getRandomNumber(1, 10)
  const columnNumber = getRandomNumber(1, 10)
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
                    className={`cell ${
                      food[0][0] === rowIndex && food[0][1] === colIndex
                        ? 'food'
                        : ''
                    }`}
                  >
                    .
                  </td>
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
