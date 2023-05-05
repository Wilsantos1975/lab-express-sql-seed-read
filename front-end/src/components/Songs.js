import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  // console.log(API);

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        
        setSongs(response.data)
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  },[]);


  return (
    <div className="songs-display">
      <h1>songs list</h1>
      <div>
        {songs.map((song) => {
          return <Song key={song.id} song={song} />;
        })}
      </div>
    </div>
  );
}

export default Songs;
