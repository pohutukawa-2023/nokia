import React, { cloneElement, useEffect, useState } from 'react'
import Game from './Game'

function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// function Food() {
//   const rowNumber = getRandomNumber(1, 20)
//   const columnNumber = getRandomNumber(1, 100)
//   const foodPosition = (rowNumber, columnNumber)

//   return (
//     foodPosition
//   )

// }

// export default Food

const Food = () => {
  const style = {
    rowNumber: `${getRandomNumber(1, 20)}`,
    columnNumber: `${getRandomNumber(1, 100)}`,
  }

  return <div className="food" style={style}></div>
}

export default Food
