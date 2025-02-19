import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

//no parent, need id from params to work is to display the details of a song

function SongsDetail() {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate("/songs");
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  };

  return (
    <div className="song-details">
      <h3 className="artist">
        Artist: <span>{song.name}</span>
      </h3>
      <h3 className="song">
        Song: <span>{song.artist}</span>
      </h3>
      <h3 className="album">
        Album: <span>{song.album}</span>
      </h3>
      <div className="show-navigation">
        <div className="nav-buttons">
          <div>
            {" "}
            <Link to={`/songs/${id}/edit`}>
              <button>edit</button>
            </Link>
          </div>
          <div>
            <button onClick={deleteSong}>delete</button>{" "}
          </div>

          <div>
            {" "}
            <Link to={`/songs`}>
              <button>back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongsDetail;
