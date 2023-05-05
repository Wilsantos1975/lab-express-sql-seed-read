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

const createSong = async (song) => {
  try {
    const { name, artist, album, time, is_favorite } = song;
    const newSong = await db.one( "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *", [name, artist, album, time, is_favorite]);
    return newSong;
  } catch (error) {
    return error;
  }
};







// const createSong = async (song) => { // maverick edition
//   try {
//     if (!song.name) {
//       throw 'You must specify a value for "name"';
//     }
//     const newSong = await db.one(
//       "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",

//       [song.name, song.artist, song.album, song.time, song.is_favorite]
//     );
  
//     return newSong;
//   } catch (error) {
//     return error;
//   }
// };

// update query

const updateSong = async (id, song) => {
    try {
        const { name, artist, album, time, is_favorite } = song;
        const updatedSong = await db.one("UPDATE songs SET name=$1, artist=$2, album=$3,time=$4, is_favorite=$5 WHERE id=$6 RETURNING *", [name, artist, album, time, is_favorite, id]);
        return updatedSong;
    } catch (error) {   
        return error;
    }
};

// delete query

// const deleteSong = async (id) => {
    
//     try {
//         const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
//         return deletedSong;
//     } catch (error) {
//         return error;
//     }
// };


const deleteSong = async (id) => {
    try {
        // Check if song exists in database
        const songExists = await db.oneOrNone("SELECT id FROM songs WHERE id=$1", id); // oneOrNone returns null if no record found in database or an object if a record is found in the database (see https://vitaly-t.github.io/pg-promise/Database.html#oneOrNone)
        // If song doesn't exist, return an error message
        if (!songExists) {
            return { error: `Song with ID ${id} not found in database` };
        } 
        // If song exists, perform the deletion and return the deleted song
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error;
    }
};



module.exports = { getAllSongs, getSong, createSong, updateSong, deleteSong };
