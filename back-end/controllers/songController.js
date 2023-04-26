const express = require('express');
const song = express.Router();

const { getAllSongs, getSong, createSong, updateSong, deleteSong } = require('../queries/songsQueries.js');

song.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
  if(allSongs) {
    res.status(200).json(allSongs)
  } else {
    res.status(404).json({error: "Resource not found"})
  }
});



module.exports = song;