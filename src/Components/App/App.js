import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'


function App() {

  const [searchResults, setSearchResults] = useState([]);

  const defaultSearchResults = [
    { name: 'name1', artist: 'artist1', album: 'album1' },
    { name: 'name2', artist: 'artist2', album: 'album2' },
    { name: 'name3', artist: 'artist3', album: 'album3' }
  ];

  const [playlistName, setPlaylistName] = useState('My Playlist');

  const [album, setAlbum] = useState({});
  let defaultAlbum;
  if(album.length === 0){
    defaultAlbum = [
      { name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 1},
      { name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 2},
      { name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 3},
    ]
  }



  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={ searchResults.length ? searchResults : defaultSearchResults } />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
