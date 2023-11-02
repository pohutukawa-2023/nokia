import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Game() {
  const numRows = 20
  const numCols = 100

  const [grid, setGrid] = useState<number[][]>([])
  const [snake, setSnake] = useState<number[][]>([[0], [0]])

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
    console.log(typeof newGrid)
  }, [])

  // function getSnake() {
  //   const cells = document.getElementsByTagName('TD')
  //   const rowPos = 0
  //   const colPos = 0
  //   const playerPosition = cells[(rowPos, colPos)]
  // }

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
                    className={` cell ${
                      snake === rowIndex * numCols + colIndex ? 'snake' : '.'
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

export default Game
