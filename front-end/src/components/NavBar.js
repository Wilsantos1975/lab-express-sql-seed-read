import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/">tuner app</Link>
      </h1>
      <button>
        <Link to="/songs/new">add a song</Link>
      </button>
    </nav>
  );
}

export default NavBar;
