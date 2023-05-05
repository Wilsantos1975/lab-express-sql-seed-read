import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNew() {
  const navigate = useNavigate();

  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addNewSong = (songToAdd) => {
    axios
      .post(`${API}/songs`, songToAdd)
      .then(
        () => {
          navigate("/songs");
        },
        (error) => {
          console.error(error);
        }
      )
      .catch((e) => {
        console.warn("catch", e);
      });
  };

  const handleTextChange = (e) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setNewSong({ ...newSong, is_favorite: !newSong.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewSong(newSong);
    console.log(newSong)
    };

  return (
    <div className="Form">
      <h1>add a song</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newSong.name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="artist">artist</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={newSong.artist}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="album">album</label>
        <input
          type="text"
          id="album"
          name="album"
          value={newSong.album}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="time">time</label>
        <input
          type="text"
          id="time"
          name="time"
          value={newSong.time}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="is_favorite">is_favorite</label>
        <input
          type="checkbox"
          id="is_favorite"
          name="is_favorite"
          value={newSong.is_favorite}
          onChange={handleCheckboxChange}
        />
        <input type="submit" />
      </form>
      <Link to={`/songs`}>
        <button>back</button>
        </Link>
    </div>
  );
}

export default SongNew;
