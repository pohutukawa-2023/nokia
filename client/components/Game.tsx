import { Link } from 'react-router-dom'

function Game() {
  return (
    <div>
      <h2>Main Gameplay Page</h2>
      <div></div>
      <div>
        <Link to={'/'}>
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  )
}

export default Game
