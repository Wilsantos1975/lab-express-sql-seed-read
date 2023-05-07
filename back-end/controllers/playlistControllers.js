const express = require("express");
const playlist = express.Router();
const {
    getAllPlaylists,
    getPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
} = require("../queries/playlistQueries.js");
const songController = require("./songController.js");


playlist.use("/:playlist_id/songs", songController);


// index route
playlist.get("/", async (req, res) => {
    const allPlaylists = await getAllPlaylists();
    if(allPlaylists) {
        res.json({success: true, payload: allPlaylists});
    } else {
        res.json({success: false, payload: "Error retrieving all playlists"});
    }       
}   
);

// show route
playlist.get("/:id", async (req, res) => {
    const { id } = req.params;
    const playlist = await getPlaylist(id);
    if(playlist) {
        res.json(playlist);
    } else {
        res.json({success: false, payload: "Error retrieving playlist"});
    }
});

// create route 
playlist.post("/", async (req, res) => {
    const newPlaylist = req.body;
    const result = await createPlaylist(newPlaylist);
    if(result) {
        res.json({success: true, payload: result});
    } else {
        res.json({success: false, payload: "Error creating playlist"});
    }
});

// update route
playlist.put("/:id", async (req, res) => {
    const { id } = req.params;
    const playlist = req.body;
    const result = await updatePlaylist(id, playlist);
    if(result) {
        res.json({success: true, payload: result});
    } else {
        res.json({success: false, payload: "Error updating playlist"});
    }
});

// delete route
playlist.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await deletePlaylist(id);
    if(result) {
        res.json({success: true, payload: result});
    } else {
        res.json({success: false, payload: "Error deleting playlist"});
    }
});






module.exports = playlist;