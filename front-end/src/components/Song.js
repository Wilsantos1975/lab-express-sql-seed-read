import { Link } from "react-router-dom";

function Song({ song }) {
  //list of clickable songs, each song is a link to the song details page

  return (
    <div className="song-display">
      <div>
        {song.is_favorite ? <span>⭐</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </div>
      <div>
        <h3>{song.artist}</h3>
        <h4>{song.name}</h4>
        <h4>{song.album}</h4>
      </div>
      <Link to={`/songs/${song.id}`}>▶️</Link>
    </div>
  );
}

export default Song;
