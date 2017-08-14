import * as actionTypes from '../actions/search-actions';
import {Map} from 'immutable';

const initialState ={
    hotelSearchData :[],
    hotelSearchError : {},
    hotelSearchDataLoaded : false,
    hotelSearchStatistics : {},
    hotelSearchStatisticsError : {},
    hotelSearchStatisticsLoaded : false
}

function saveHotelSearchData(state,hotelSearchData){
    state = state.set("hotelSearchData",hotelSearchData);
    return state;
}

function saveHotelSearchError(state, errorData){
    state = state.set("hotelSearchError",errorData);
    return state;
}

function saveHotelSearchStats(state,hotelSearchStatus){
    state = state.set("hotelSearchStatistics",hotelSearchStatus);
    return state;
}

function saveHotelSearchStatusError(state, hotelSearchStatusError){
    state = state.set("hotelSearchStatisticsError",hotelSearchStatusError);
    return state;
}

export default function(state= Map(initialState),action){
    switch(action.type){
        case actionTypes.SAVE_SEARCH_HOTEL_ERROR :
            return saveHotelSearchError(state,action.hotelData);
        case actionTypes.SAVE_SEARCHED_HOTELS :
            return saveHotelSearchData(state,action.hotelSearchData);
        case actionTypes.SAVE_SEARCH_HOTEL_STATUS :
            return saveHotelSearchStats(state,action.hotelSearhotelSearchStatistics);
        case actionTypes.SAVE_SEARCH_HOTEL_STATUS_ERROR :
            return saveHotelSearchStatusError(state,action.hotelSearhotelSearchStatisticsError);
        case actionTypes.SEARCH_HOTELS_LOADED : 
            return state.set("hotelSearchDataLoaded",action.hotelSearchDataLoaded);
        case actionTypes.SAVE_SEARCH_HOTEL_STATUS_LOADED : 
            return state.set("hotelSearchStatisticsLoaded",action.hotelSearchStatisticsLoaded);
        default : console.log("unknown action type :["+action.type+"]");
    }
    return state;
}