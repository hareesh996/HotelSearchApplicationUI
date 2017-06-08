import * as actionTypes from '../actions/search-actions';
import {Map} from 'immutable';

const initialState ={
    hotelSearchData :[],
    hotelSearchError : {}
}

export default function(state= Map(initialState),action){
    switch(action.type){
        case actionTypes.SAVE_SEARCH_HOTEL_ERROR :
            return saveHotelSearchError(state,action.hotelData);
        case actionTypes.SAVE_SEARCHED_HOTELS :
            return saveHotelSearchData(state,action.hotelSearchData);
        default : console.log("unknown action type :["+action.type+"]");
    }
    return state;
}