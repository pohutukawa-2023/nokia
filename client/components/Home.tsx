import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Main Gameplay Page</h2>
      <div>
        <Link to={'/game'}>
          <button>Start Game</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
