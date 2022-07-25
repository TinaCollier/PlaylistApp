import React from 'react';
import './Track.css';


const Track = props => {
    const { isRemoval } = props;
    
    let addTrack = () => {
        props.onAdd(props.trackName);
    }
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{ props.trackName }</h3>
                <p>{ props.trackArtist } | { props.trackAlbum } </p>
            </div>
            <button className="Track-action">{
                isRemoval == true ? '-' : '+'
            }</button>
        </div>
    )
}

export default Track;