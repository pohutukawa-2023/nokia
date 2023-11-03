import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2 className="title">Main Gameplay Page</h2>
      <div>
        <Link to={'/game'}>
          <button className="start-button">Start Game</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
