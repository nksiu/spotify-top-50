import authReducer from '../authReducer'
import tracksReducer from '../tracksReducer'

import { AUTH_SUCCESS, GET_TRACKS, GET_TRACK, GET_COUNTRY, GET_VALUE, LOADING_TRACK } from '../../actions/types'

describe('authReducer', () => {

    const initialState = {
        token: null
    }
    
    it('Should return default state', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toEqual(initialState)
    })

    it('Should return new state for AUTH_SUCCESS', () => {
        const newState = authReducer(initialState, {
            type: AUTH_SUCCESS,
            payload: 'mockToken'
        });
        expect(newState).toEqual({token: 'mockToken'})
    })
})

describe('tracksReducer', () => {

    const initialState = {
        tracks: [],
        track: {},
        selectedCountry: null,
        selectedValue: null
    }

    it('Should return the default state', () => {
        const newState = tracksReducer(initialState, {});
        expect(newState).toEqual(initialState)
    })

    it('Should return new state for GET_TRACKS', () => {
        const mockTracks = [{track: 'Track 1'}, {track: 'Track 2'}, {track: 'Track 3'}];
        const expectState = {
            tracks: mockTracks,
            track: {},
            selectedCountry: null,
            selectedValue: null
        }
        const newState = tracksReducer(initialState, {
            type: GET_TRACKS,
            payload: mockTracks
        })
        expect(newState).toEqual(expectState)
    })

    it('Should return new state for GET_TRACK', () => {
        const mockTrack = {track: 'Track 1'};
        const expectState = {
            tracks: [],
            track: mockTrack,
            selectedCountry: null,
            selectedValue: null
        }
        const newState = tracksReducer(initialState, {
            type: GET_TRACK,
            payload: mockTrack
        })
        expect(newState).toEqual(expectState)
    })

    it('Should return new state for LOADING_TRACK', () => {
        const preconditionState = tracksReducer(initialState, {
            type: GET_TRACK,
            payload: {track: 'Track 1'}
        })
        const finalState = tracksReducer(preconditionState, {
            type: LOADING_TRACK
        })
        
        expect(finalState).toEqual(initialState)
    })

    it('Should return new state for GET_COUNTRY', () => {
        const expectState = {
            tracks: [],
            track: {},
            selectedCountry: 'Canada',
            selectedValue: null
        }
        const newState = tracksReducer(initialState, {
            type: GET_COUNTRY,
            payload: 'Canada'
        })
        expect(newState).toEqual(expectState)
    })

    it('Should return new state for GET_VALUE', () => {
        const expectState = {
            tracks: [],
            track: {},
            selectedCountry: null,
            selectedValue: 'somerandomtext'
        }
        const newState = tracksReducer(initialState, {
            type: GET_VALUE,
            payload: 'somerandomtext'
        })
        expect(newState).toEqual(expectState)
    })
})