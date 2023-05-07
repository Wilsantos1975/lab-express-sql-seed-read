const db = require("../db/dbConfig.js");

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlist");
    return allPlaylists;
  } catch (error) {
    return error;
  }
};

const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlist WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

const createPlaylist = async (playlist) => {
  const { name, is_favorite } = playlist;
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlist (name, is_favorite) VALUES($1, $2) RETURNING *",
      [name, is_favorite]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

const updatePlaylist = async (id, playlist) => {
    try {
        const { name, is_favorite } = playlist;
      const updatedPlaylist = await db.one(
        "UPDATE playlist SET name=$1, is_favorite=$2 WHERE id=$3 RETURNING *",
        [name, is_favorite, id]
        );
        return updatedPlaylist;
    } catch (error) {
        return error;
    }
};

const deletePlaylist = async (id) => {
    try {
        const deletedPlaylist = await db.one(
            "DELETE FROM playlist WHERE id=$1 RETURNING *",
            id
        );
        return deletedPlaylist;
    } catch (error) {
        return error;
    }
};
    



module.exports = { getAllPlaylists, getPlaylist, createPlaylist, updatePlaylist, deletePlaylist };
