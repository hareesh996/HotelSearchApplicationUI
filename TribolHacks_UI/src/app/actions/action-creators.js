import {SET_STATE} from '../constants/action-constants';

export function setup(stateOfApplication){
    return function(dispatch){
        dispatch(setState(stateOfApplication));
    };
}

export function setState(state){
    return {
        type: SET_STATE,
        state : state
    }
}