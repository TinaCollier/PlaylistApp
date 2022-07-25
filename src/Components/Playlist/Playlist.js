import React from 'react';
import './Playlist.css';
import { useState } from 'react';
import TrackList from '../TrackList/TrackList';

const Playlist = () => {
    
    const [playlistName, setPlaylistName] = useState('New Playlist');
    
    return (
        <div className="Playlist">
            <input type="text" defaultValue={ playlistName } onChange={event => setPlaylistName(event.target.defaultValue)} />
            <TrackList />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;