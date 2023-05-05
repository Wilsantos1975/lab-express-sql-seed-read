import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>Welcome to The Tuner App</h2>
        <h3> Greatest Tunes Ever</h3>
<div className="option-buttons">

        <div>
          <Link to="/songs">
            <button>See All Songs</button>
          </Link>
          </div>
<br></br>
          <div>
            <Link to="/albums">
              <button>See All Albums</button>
            </Link>
          </div>
</div>
      
    </div>
  )
}

export default Home
