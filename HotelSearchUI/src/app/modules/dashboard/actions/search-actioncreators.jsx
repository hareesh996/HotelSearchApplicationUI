import request from 'superagent';
import * as actionTypes from './search-actions';

const baseURL = process.env.API_URL;


/////////////////////// START: Search Hotel Action creators /////////////////////////////
/**
 * an action function that searches the hotel based on the 'searchPayload'.
 * @param {*} searchPayload 
 * @param {*} headers 
 */
export function searchHotels( searchPayload, headers){
    return (dispatch)=>{
        dispatch(searchHotelLoadAction(false));
        headers["Content-Type"]= "application/json";
        request.post(`${baseURL}/hotelsearch/search/hotel-search-results.json`)
        .accept('application/json')
        .set(headers)
        .send(searchPayload)
        .then(function(responseData){
            searchHotelSuccessHandler(responseData, dispatch);
            dispatch(searchHotelLoadAction(true));
        }, function(errorData){
            searchHotelErrorHandler(errorData,dispatch);
            dispatch(searchHotelLoadAction(true));
        })
    }
}

function searchHotelLoadAction(isDataLoaded){
    return {
        type : actionTypes.SEARCH_HOTELS_LOADED,
        hotelSearchDataLoaded : isDataLoaded
    }
}

/**
 * The success function upon calling the search api function.
 * @param {*} responseData : The response of the search hotel api 
 */
function searchHotelSuccessHandler(responseData,dispatch){
    var hotelData = responseData.body || JSON.parse(responseData.text);
    dispatch(saveSearchedHotel(hotelData));
}

/**
 * Action creator to store the searched hotel.
 * @param {*} hotelData 
 */
function saveSearchedHotel(hotelData){
    return {
        type : actionTypes.SAVE_SEARCHED_HOTELS,
        hotelSearchData :hotelData.data
    }
}

/**
 *  The error handler for the search hotel api
 * @param {*} errorResponse 
 */
function searchHotelErrorHandler(errorResponse,dispatch){
    var errorData = errorResponse.response.body;
    dispatch(saveSearchHotelError(errorData));
}
/**
 * Action creator to save the error response.
 * @param {*} errorData 
 */
function saveSearchHotelError(errorData){
    return {
        type : actionTypes.SAVE_SEARCH_HOTEL_ERROR,
        hotelSearchError : errorResponse
    }
}

/////////////////////// END: Search Hotel Action creators /////////////////////////////

/////////////////////// START: Search Hotel Status Action creators /////////////////////////////

export function getSatisticsOfHotelSearch(payload, headers){
    return (dispatch) =>{
        dispatch(searchHotelStatsLoadAction(false));
        request.post(`${baseURL}/hotelsearch/search/hotel-search-status.json`)
            .set(headers)
            .send(payload)
            .then(function(responseData){
                saveHotelSearchStatusHandler(responseData,dispatch);
                dispatch(searchHotelStatsLoadAction(true));
            }, function(errorData){
                saveHotelSearchStatusErrorHandler(errorData,dispatch);
                dispatch(searchHotelStatsLoadAction(true));
            })
    }
}
/**
 * The success handler for the hotel search status
 * @param {*} responseData 
 */
function saveHotelSearchStatusHandler(responseData,dispatch){
    var data = responseData.body || JSON.parse(responseData.text);
    dispatch(saveHotelSearchStatusAction(data.data));
}
/**
 * The action creator for the save HotelSearch Status.
 * @param {*} data 
 */
function saveHotelSearchStatusAction(data){
    return {
        type : actionTypes.SAVE_SEARCH_HOTEL_STATUS,
        hotelSearhotelSearchStatistics : data
    }
}

/**
 * The error handler for the hotel search status
 * @param {*} responseData 
 * @param {*} dispatch 
 */
function saveHotelSearchStatusErrorHandler(responseData, dispatch){
    var data = responseData.response.body | response.response.text;
    return dispatch(saveHotelSearchStatusErrorAction(data));
}

/**
 * The action creator for the save HotelSearch Status Error.
 * @param {*} errorData 
 */
function saveHotelSearchStatusErrorAction(errorData){
    return {
        type : actionTypes.SAVE_SEARCH_HOTEL_STATUS_ERROR,
        hotelSearhotelSearchStatisticsError : errorData
    }
}

function searchHotelStatsLoadAction(isDataLoaded){
    return {
        type : actionTypes.SAVE_SEARCH_HOTEL_STATUS_LOADED,
        hotelSearchStatisticsLoaded : isDataLoaded
    }
}


/////////////////////// END: Search Hotel Status Action creators /////////////////////////////
