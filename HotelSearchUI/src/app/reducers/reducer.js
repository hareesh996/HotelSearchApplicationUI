
import {Map} from 'immutable';
import * as actionTypes from 'constants/action-constants';

// merges the initial state of the application.
function setState(state,newState){
    return state.merge(newState);
}

const initialState = {};

// now we will default reducer function to initilize the state for the application.

export default function reducer(state = Map(initialState),action){
    switch(action.type){
        case actionTypes.SET_STATE :
            return setState(state,action.state); 
    }
    return state;
}