import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

const TrackList = props => {
    const { tracks } = props;

    
    
    const trackComponents = tracks && tracks.length && tracks.map( track => 
        <Track trackName={ track.name } trackArtist={ track.artist} key={ track.name } />
    );

    return (
        <div className="TrackList">
            { trackComponents }
        </div>
    )
}

export default TrackList;