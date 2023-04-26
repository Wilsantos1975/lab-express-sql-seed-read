DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  artist VARCHAR(255),
  album VARCHAR(255),
  genre VARCHAR(255),
  time VARCHAR(255),
  is_favorite BOOLEAN
);