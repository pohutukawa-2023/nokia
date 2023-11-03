import React, { cloneElement, useEffect, useState } from 'react'
import { Postion } from '../Position'

interface Props {}

function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Food() {
  //set food position
  const rowNumber = getRandomNumber(1, numRows)
  const columnNumber = getRandomNumber(1, numCols)
  const [food, setFood] = useState<number[][]>([[rowNumber, columnNumber]])

  return (
    <td
      key={colIndex}
      className={`cell ${
        food[0][0] === rowIndex && food[0][1] === colIndex ? 'food' : ''
      }`}
    ></td>
  )
}

export default Food
