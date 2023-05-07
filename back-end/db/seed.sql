\c songs_dev


INSERT INTO playlist (name, is_favorite) VALUES
('Playlist 1', true),
('Playlist 2', false),
('Playlist 3', false);




INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES
('Ramble On','Led Zeppelin','Led Zeppelin IV','3:45',true, 1),
('The Chain','Fleetwood Mac','Rumours','4:30',false, 1),
('Come as you are', 'Nirvana', 'Nevermind', '2:87',true, 3),
('I still havent found what im looking for', 'U2', 'The Jousha tree', '3:43',true, 2),
('Come Together' , 'The Beatles', 'Abbey Road', '2:12', false, 3),
('Can i kick it', 'A tribe called quest', 'People instinctive travels and the path of rhythm', '3:25',true, 2);