DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE playlist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  is_favorite BOOLEAN
);


CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT NOT NULL,
  time TEXT NOT NULL,
  is_favorite BOOLEAN,
  playlist_id INTEGER REFERENCES playlist(id) ON DELETE CASCADE 

);



  
