import React from 'react';
import './Track.css';


const Track = props => {
    const { isRemoval } = props;
    console.log(props);
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{ props.trackName }</h3>
                <p>{ props.trackArtist }</p>
            </div>
            <button className="Track-action">{
                isRemoval == true ? '-' : '+'
            }</button>
        </div>
    )
}

export default Track;