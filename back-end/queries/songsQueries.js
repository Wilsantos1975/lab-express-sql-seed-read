const db = require("../db/dbConfig.js");

//index  query
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

// show query

const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// create query 

const createSong = async (song) => { // maverick edition
  try {
    if (!song.title) {
      throw 'You must specify a value for "Title"';
    }
    const newSong = await db.one(
      "INSERT INTO songs (title, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",

      [song.title, song.artist, song.album, song.time, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

// update query

const updateSong = async (id, song) => {
    try {
        const { title, artist, album, genre, time, is_favorite } = song;
        const query = "UPDATE songs SET title=$1, artist=$2, album=$3, genre=$4 ,time=$5, is_favorite=$6 WHERE id=$7 RETURNING *";
        const updatedSong = await db.one(query, [title, artist, album, genre, time, is_favorite, id]);
        return updatedSong;
    } catch (error) {   
        return error;
    }
};

// delete query

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error;
    }
};





module.exports = { getAllSongs, getSong, createSong, updateSong, deleteSong };
