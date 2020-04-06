import {AUTH_SUCCESS} from '../actions/types';

const initialState = {
    token: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case AUTH_SUCCESS:
            return {
                token: action.payload
            };
        default:
            return state;
    }
}