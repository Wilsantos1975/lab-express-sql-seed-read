const express = require("express");
const song = express.Router();

const {
  getAllSongs,
  getSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songsQueries.js");

//index route
song.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(400).json({ error: "Resource not found" });
  }
});

//show route
song.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  console.log(song);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(400).json({ error: "Resource not found" });
  }
});

//create route
song.post("/", async (req, res) => {
  const newSong = req.body;
  try {
    const song = await createSong(newSong);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//update route
song.put("/:id", async (req, res) => {
    const { id } = req.params;
    const song = req.body;
    const updatedSong = await updateSong(id, song);
    if (updatedSong.error) {
        res.status(404).json({ error: updatedSong.error });
    } else {
        res.status(200).json(updatedSong);
    }
});

//delete route
song.delete("/:id", async (req, res) => { // maverick edition
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.error) {
        res.status(404).json({ error: deletedSong.error });
    } else {
        res.status(200).json(deletedSong);
    }
});
module.exports = song;
