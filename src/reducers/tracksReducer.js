import {GET_TRACKS, GET_TRACK, GET_COUNTRY, GET_VALUE, LOADING_TRACK} from '../actions/types';

const initialState = {
    tracks: [],
    track: {},
    selectedCountry: null,
    selectedValue: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_TRACKS:
            return {
                ...state,
                tracks: action.payload
            };
        case GET_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            };
        case GET_VALUE:
            return {
                ...state,
                selectedValue: action.payload
            }
        case GET_TRACK:
            return {
                ...state,
                track: action.payload
            }
        case LOADING_TRACK:
            return {
                ...state,
                track: {}
            }
        default:
            return state;
    }
}