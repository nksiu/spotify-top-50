import {GET_TRACKS, GET_TRACK, GET_COUNTRY, GET_VALUE, LOADING_TRACK} from './types';
import axios from 'axios';
const queryString = require('query-string');

export const getTracks = (selectedOption, token) => dispatch => {
    axios.get(`https://api.spotify.com/v1/playlists/${selectedOption.value}/tracks`, { headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
            }}).then(res => {
                    let tracks = [];
                    var i;
                    for(i=0; i < res.data.items.length; i++){
                        tracks.push({rank: i+1,
                                    id: res.data.items[i].track.id,
                                    trackName: res.data.items[i].track.name,
                                    artistName: res.data.items[i].track.artists[0].name,
                                    albumName: res.data.items[i].track.album.name,
                                    albumReleased: res.data.items[i].track.album.release_date,
                                    trackURL: res.data.items[i].track.external_urls.spotify,
                                    explicit: res.data.items[i].track.explicit,
                                    duration: res.data.items[i].track.duration_ms,
                                    imageURL: res.data.items[i].track.album.images[1].url,
                                    country: selectedOption.label,
                                    token: token});
                    }

                    dispatch({
                        type: GET_COUNTRY,
                        payload: selectedOption.label
                    })
                    dispatch({
                        type: GET_VALUE,
                        payload: selectedOption.value
                    })
                    dispatch({
                        type: GET_TRACKS,
                        payload: tracks
                    })
                })
                .catch(err => window.location.assign('http://spotify-top-50.herokuapp.com/'))
}

export const getTrack = (token) => dispatch => {
    dispatch({
        type: LOADING_TRACK
    })
    let path = Object.keys(queryString.parse(window.location.pathname))[0];
    const id = getId(path);
    axios.get(`	https://api.spotify.com/v1/tracks/${id}`, { headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }}).then(res => {
            let track = {
                trackName: res.data.name,
                artistName: res.data.album.artists[0].name,
                albumName: res.data.album.name,
                albumReleased: res.data.album.release_date,
                duration: res.data.duration_ms,
                explicit: res.data.explicit,
                imageURL: res.data.album.images[1].url,
                artistURL: res.data.album.artists[0].external_urls.spotify
            }
            dispatch({
                type: GET_TRACK,
                payload: track
            })
        })
        .catch(err => window.location.assign('http://spotify-top-50.herokuapp.com/'))
}

const getId = (path) => {
    let withoutSlash = '';
    var i;
    for(i = 0; i < path.length; i++){
        if (path[i] !== '/'){
            withoutSlash = withoutSlash + path[i];
        };
    }
    return withoutSlash.substring(5);
};